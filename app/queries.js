const {GraphQLObjectType} = require('graphql');

//  NODE FIELD
const {nodeField} = require('../app/type/type');

//  CONTROLLERS
const CategoryController = require('./controller/category.controller');
// const ArticleController = require('./controller/article.controller');

const Queries = new GraphQLObjectType({
	name: "RootQuery",
	fields: () => ({
		CategoryList: CategoryController.CategoryList,
		// ArticleList: ArticleController.ArticleList,
		node: nodeField
	})
});


module.exports = Queries;
