const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLBoolean
} = require('graphql');

const {
	globalIdField
} = require('graphql-relay');

const COLLECTIONS = require('../model/collections');


module.exports = (nodeInterface) => {
	return new GraphQLObjectType({
		name: 'Todo',
		description: "Details of a todo",
		fields: () => ({
			id: globalIdField(COLLECTIONS.TODOS, (obj) => obj._id),
			title: {
				type: GraphQLString,
				description: "Title of todo",
				resolve: (obj) => obj.title
			},
			done: {
				type: GraphQLBoolean,
				description: "Status of todo",
				resolve: (obj) => obj.done
			}
		}),
		interfaces: [nodeInterface]
	});
};