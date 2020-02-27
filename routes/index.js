const graphqlHTTP = require('express-graphql');

// SCHEMA
const schema = require('../app/schema');

module.exports = (app) => {
	app.use('/api', graphqlHTTP({
		schema: schema,
		graphiql: true,
		pretty: true
	}));
};
