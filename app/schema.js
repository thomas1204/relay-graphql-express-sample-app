const {GraphQLSchema} = require('graphql');

const Queries = require('./queries');
const Mutations = require('./mutations');


const schema = new GraphQLSchema({
	query: Queries,
	mutation: Mutations
});


module.exports = schema;