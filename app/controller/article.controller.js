const COLLECTIONS = require('../model/collections');
const ObjectID = require('mongodb').ObjectID;
const DB = require('../model/db');

const {
	GraphQLID
} = require('graphql');

const {
	connectionArgs,
	connectionDefinitions,
	connectionFromArray,
	mutationWithClientMutationId,
	offsetToCursor,
	fromGlobalId
} = require('graphql-relay');


// Article Type
const {ArticleType} = require('../type/type');

// Article Inputs
const {AddArticleInput} = require('../input/article.inputs');

const {
	connectionType: ArticleConnection,
	edgeType: ArticleEdge
} = connectionDefinitions({
	name: COLLECTIONS.ARTICLES,
	nodeType: ArticleType
});

/**
 * Fetches the list of articles
 * @argument searchByTitle - Get articles by its title
 */
const ArticleList = {
	name: "GetArticles",
	description: "Fetches list of articles",
	type: ArticleConnection,
	args: {
		searchByCategory: {
			description: "Filter article by category",
			type: GraphQLID
		},
		...connectionArgs
	},
	resolve: async (_, args) => {
		let cond = {};
		if (args.searchByCategory !== undefined) {
			const GLOBAL_ID = fromGlobalId(args.searchByCategory);
			cond['category'] = GLOBAL_ID.id
		}
		const ARTICLES_LIST = await DB.GET(COLLECTIONS.ARTICLES, cond);
		return connectionFromArray(ARTICLES_LIST, args);
	}
};

/**
 * Mutation - Adds article to DB
 * Returns the newly added doc
 */
const AddArticle = mutationWithClientMutationId(
	{
		name: "AddArticle",
		description: "Adds new article",
		inputFields: AddArticleInput,
		outputFields: {
			article: {
				type: ArticleEdge,
				resolve: async (payload) => {
					const COUNT = DB.COUNT(COLLECTIONS.ARTICLES, {});
					return {
						cursor: offsetToCursor(COUNT - 1),
						node: {
							_id: payload._id,
							title: payload.title,
							content: payload.content,
							category: payload.category,
						}
					}
				}
			}
		},
		mutateAndGetPayload: async (articleInput) => {
			const GLOBAL_ID = fromGlobalId(articleInput.category);
			articleInput.category = new ObjectID(GLOBAL_ID.id);
			return await DB.INSERT(COLLECTIONS.ARTICLES, articleInput);
		}
	}
);


module.exports = {
	ArticleList,
	AddArticle
};