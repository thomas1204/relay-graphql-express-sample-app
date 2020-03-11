const {
	GraphQLString,
	GraphQLNonNull,
	GraphQLID
} = require('graphql');


const AddArticleInput = {
	title: {type: new GraphQLNonNull(GraphQLString)},
	content: {type: GraphQLString},
	category: {type: new GraphQLNonNull(GraphQLID)},
};


module.exports = {
	AddArticleInput
};