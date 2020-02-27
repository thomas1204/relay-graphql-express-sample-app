const {GraphQLObjectType} = require('graphql');

//  NODE FIELD
const {nodeField} = require('../app/type/type');

//  CONTROLLER
const CategoryController = require('./controller/category.controller');

const Queries = new GraphQLObjectType({
	name: "RootQuery",
	fields: () => ({
		CategoryList: CategoryController.CategoryList,
		node: nodeField
	})
});


module.exports = Queries;
