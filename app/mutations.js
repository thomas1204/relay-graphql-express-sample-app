const {GraphQLObjectType} = require('graphql');

//  CONTROLLER
const CATEGORY_CONTROLLER = require('./controller/category.controller');
const ARTICLE_CONTROLLER = require('./controller/article.controller');


/**
 * Root mutation
 * @type {GraphQLObjectType<any, any, {[p: string]: any}>}
 */
const Mutations = new GraphQLObjectType({
	name: "RootMutation",
	fields: () => ({
		AddCategory: CATEGORY_CONTROLLER.AddCategory,
		AddArticle: ARTICLE_CONTROLLER.AddArticle,
		UpdateArticle: ARTICLE_CONTROLLER.UpdateArticle
	})
});


module.exports = Mutations;