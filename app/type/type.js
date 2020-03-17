const ObjectID = require('mongodb').ObjectID;
const COLLECTIONS = require('../model/collections');
const DB = require('../model/db');

const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLList
} = require('graphql');

const {
	fromGlobalId,
	globalIdField,
	nodeDefinitions
} = require('graphql-relay');


let GlobalID;

const FETCH_NODE_DETAILS = (collectionName, _id) => {
	return new Promise((resolve, reject) => {
		DB.FIND(collectionName, {_id: ObjectID(_id)}, (err, data) => {
			if (err) reject(err);
			resolve(data)
		})
	})
};


/**
 * Checks the global type and returns respective details
 * @param globalId
 * @returns {Promise<unknown>|null}
 * @constructor
 */
const GET_NODE_INTERFACE = (globalId) => {
	GlobalID = fromGlobalId(globalId);
	
	if (GlobalID.type === COLLECTIONS.CATEGORIES) {
		FETCH_NODE_DETAILS(COLLECTIONS.CATEGORIES, GlobalID.id);
	}
	
	if (GlobalID.type === COLLECTIONS.ARTICLES) {
		FETCH_NODE_DETAILS(COLLECTIONS.ARTICLES, GlobalID.id);
	}
	return null;
};


/**
 * Check if global type and return respective type
 * @returns {GraphQLObjectType<any, any, {[p: string]: any}>|null}
 * @constructor
 */
const GET_NODE_FIELD = () => {
	if (GlobalID.type === COLLECTIONS.CATEGORIES) return CategoryType;
	if (GlobalID.type === COLLECTIONS.ARTICLES) return ArticleType;
	return null;
};

const {nodeInterface, nodeField} = nodeDefinitions(GET_NODE_INTERFACE, GET_NODE_FIELD);


const CategoryType = new GraphQLObjectType({
	name: "Category",
	description: "Details of a category",
	fields: () => ({
		id: globalIdField(COLLECTIONS.CATEGORIES, (obj) => obj._id),
		title: {
			type: GraphQLString,
			description: "Title of category",
			resolve: (obj) => obj.title
		},
		articles: {
			type: new GraphQLList(ArticleType),
			description: "Fetches list of articles that belongs to this category",
			resolve: async (obj) => {
				return await DB.GET(COLLECTIONS.ARTICLES, {category: ObjectID(obj._id)});
			}
		}
	}),
	interfaces: [nodeInterface]
});


const ArticleType = new GraphQLObjectType({
	name: 'Article',
	description: "Details of a articles",
	fields: () => ({
		id: globalIdField(COLLECTIONS.ARTICLES, (obj) => obj._id),
		title: {
			type: GraphQLString,
			description: "Title of article",
			resolve: (obj) => obj.title
		},
		content: {
			type: GraphQLString,
			description: "Content of article",
			resolve: (obj) => obj.content
		},
		category: {
			type: CategoryType,
			description: "Details of category",
			resolve: (obj) => {
				return new Promise((resolve, reject) => {
					DB.FIND(COLLECTIONS.CATEGORIES, {_id: new ObjectID(obj.category)}, (err, data) => {
						if (err) reject(err);
						resolve(data)
					})
				});
			}
		}
	}),
	interfaces: [nodeInterface]
});


module.exports = {
	nodeField,
	CategoryType,
	ArticleType
};
