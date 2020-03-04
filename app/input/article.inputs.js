const {
	GraphQLString,
	GraphQLNonNull,
	GraphQLID
} = require('graphql');


const AddArticleInput = {
	title: {type: new GraphQLNonNull(GraphQLString)},
	content: {type: new GraphQLNonNull(GraphQLString)},
	category: {type: new GraphQLNonNull(GraphQLID)},
};


module.exports = {
	AddArticleInput
};