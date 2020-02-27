const {
	GraphQLString,
	GraphQLNonNull
} = require('graphql');


const AddCategoryInput = {
	title: {type: new GraphQLNonNull(GraphQLString)}
};



module.exports = {
	AddCategoryInput
};