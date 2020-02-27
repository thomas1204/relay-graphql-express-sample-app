const {
	GraphQLObjectType,
	GraphQLString,
} = require('graphql');

const {
	globalIdField
} = require('graphql-relay');

const COLLECTIONS = require('../model/collections');


module.exports = (nodeInterface) => {
	return new GraphQLObjectType({
		name: 'Category',
		description: "Details of a category",
		fields: () => ({
			id: globalIdField(COLLECTIONS.CATEGORIES, (obj) => obj._id),
			title: {
				type: GraphQLString,
				description: "Title of category",
				resolve: (obj) => obj.title
			}
		}),
		interfaces: [nodeInterface]
	});
};