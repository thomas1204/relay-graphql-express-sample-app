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

const UpdateArticleTitleInput = {
	id: {type: new GraphQLNonNull(GraphQLID)},
	title: {type: new GraphQLNonNull(GraphQLString)}
};


module.exports = {
	AddArticleInput,
	UpdateArticleTitleInput
};