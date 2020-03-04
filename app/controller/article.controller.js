const COLLECTIONS = require('../model/collections');
const DB = require('../model/db');

const {
	GraphQLString,
} = require('graphql');

const {
	connectionArgs,
	connectionDefinitions,
	connectionFromPromisedArray,
	mutationWithClientMutationId,
	offsetToCursor
} = require('graphql-relay');


// Article Type
const {ArticleType} = require('../type/type');

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
		searchByTitle: {
			description: "Filter article by its title",
			type: GraphQLString
		},
		...connectionArgs
	},
	resolve: (_, args, req) => {
		return connectionFromPromisedArray(
			new Promise((resolve, reject) => {
				let cond = {};
				if (args.searchByTitle !== undefined) cond['title'] = {
					"$regex": `^${args.searchByTitle}`,
					$options: 'i'
				};
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

module.exports = {
	ArticleList
};