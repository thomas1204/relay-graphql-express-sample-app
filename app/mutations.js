const {GraphQLObjectType} = require('graphql');

//  CONTROLLER
const CategoryController = require('./controller/category.controller');

const Mutations = new GraphQLObjectType({
	name: "RootMutation",
	fields: () => ({
		AddCategory: CategoryController.AddCategory
	})
});


module.exports = Mutations;