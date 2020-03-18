const COLLECTIONS = require('../model/collections');
const ObjectID = require('mongodb').ObjectID;
const DB = require('../model/db');

const {
	GraphQLID
} = require('graphql');

const {
	connectionArgs,
	connectionDefinitions,
	connectionFromPromisedArray,
	mutationWithClientMutationId,
	offsetToCursor,
	fromGlobalId
} = require('graphql-relay');


// Article Type
const {ArticleType} = require('../type/type');

// Article Inputs
const {
	AddArticleInput,
	UpdateArticleTitleInput
} = require('../input/article.inputs');

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
	resolve: (_, args) => {
		return connectionFromPromisedArray(
			new Promise((resolve, reject) => {
				let cond = {};
				if (args.searchByCategory !== undefined) {
					const GLOBAL_ID = fromGlobalId(args.searchByCategory);
					cond['category'] = new ObjectID(GLOBAL_ID.id)
				}
				DB.GET(COLLECTIONS.ARTICLES, cond, (err, docs) => {
					if (err) {
						reject(err)
					} else {
						resolve(docs)
					}
				});
			}),
			args
		)
	}
};


const AddArticle = mutationWithClientMutationId(
	{
		name: "AddArticle",
		description: "Adds new article",
		inputFields: AddArticleInput,
		outputFields: {
			article: {
				type: ArticleEdge,
				resolve: (payload) => {
					return new Promise((resolve, reject) => {
						DB.COUNT(COLLECTIONS.ARTICLES, {}, (err, count) => {
							if (err) {
								reject(err)
							} else {
								resolve({
									cursor: offsetToCursor(count - 1),
									node: {
										_id: payload._id,
										title: payload.title,
										content: payload.content,
										category: payload.category,
									}
								});
							}
						});
					})
				}
			}
		},
		mutateAndGetPayload: (articleInput) => {
			return new Promise((resolve, reject) => {
				const GLOBAL_ID = fromGlobalId(articleInput.category);
				articleInput.category = new ObjectID(GLOBAL_ID.id);
				DB.INSERT(COLLECTIONS.ARTICLES, articleInput, (err, doc) => {
					if (err) {
						reject(err)
					} else {
						resolve(doc)
					}
				})
			})
		}
	}
);


const UpdateArticleTitle = mutationWithClientMutationId({
	name: "UpdateArticleTitle",
	description: "Update article title details",
	inputFields: UpdateArticleTitleInput,
	outputFields: {
		article: {
			type: ArticleType,
			resolve: (payload) => ({
				_id: payload._id,
				title: payload.title,
				content: payload.content,
				category: payload.category,
			})
		}
	},
	mutateAndGetPayload: (article) => {
		return new Promise((resolve, reject) => {
			const _id = fromGlobalId(article.id).id;
			DB.UPDATE(COLLECTIONS.ARTICLES, {_id: ObjectID(_id)}, {$set: {title: article.title}}, (err, doc) => {
				if (err) {
					reject(err)
				} else {
					resolve(doc)
				}
			})
		})
	}
});


module.exports = {
	ArticleList,
	AddArticle,
	UpdateArticleTitle
};