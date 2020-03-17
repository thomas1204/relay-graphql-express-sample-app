const COLLECTIONS = require('../model/collections');
const DB = require('../model/db');

const {
	GraphQLString,
} = require('graphql');

const {
	connectionArgs,
	connectionDefinitions,
	connectionFromArray,
	mutationWithClientMutationId,
	offsetToCursor
} = require('graphql-relay');

// Category Type
const {CategoryType} = require('../type/type');

// Input
const {
	AddCategoryInput
} = require('../input/category.inputs');


const {
	connectionType: CategoryConnection,
	edgeType: CategoryEdge
} = connectionDefinitions({
	name: COLLECTIONS.CATEGORIES,
	nodeType: CategoryType
});

/**
 * Fetches the list of categories
 * @argument searchByTitle - Get category by its title
 */
const CategoryList = {
	name: "GetCategories",
	description: "Fetches list of categories",
	type: CategoryConnection,
	args: {
		searchByTitle: {
			description: "Filter category by its title",
			type: GraphQLString
		},
		...connectionArgs
	},
	resolve: async (_, args) => {
		let cond = {};
		if (args.searchByTitle !== undefined) cond['title'] = {
			"$regex": `^${args.searchByTitle}`,
			$options: 'i'
		};
		const CATEGORY_LIST = await DB.GET(COLLECTIONS.CATEGORIES, cond);
		return connectionFromArray(CATEGORY_LIST,args);
	}
};


const AddCategory = mutationWithClientMutationId(
	{
		name: "AddCategory",
		description: "Adds new category",
		inputFields: AddCategoryInput,
		outputFields: {
			category: {
				type: CategoryEdge,
				resolve: (payload) => {
					return new Promise((resolve, reject) => {
						DB.COUNT(COLLECTIONS.CATEGORIES, {}, (err, count) => {
							if (err) {
								reject(err)
							} else {
								const category = HandlePayload(payload);
								resolve({
									cursor: offsetToCursor(count - 1),
									node: category
								});
							}
						});
					})
				}
			}
		},
		mutateAndGetPayload: (category) => {
			return new Promise((resolve, reject) => {
				DB.INSERT(COLLECTIONS.CATEGORIES, category, (err, doc) => {
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


// Payload object
function HandlePayload(payload) {
	return {
		_id: payload._id,
		title: payload.title
	}
}


module.exports = {
	CategoryList,
	AddCategory
};