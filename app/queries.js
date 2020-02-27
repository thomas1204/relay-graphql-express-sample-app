const {GraphQLObjectType} = require('graphql');

//  NODE FIELD
const {nodeField} = require('../app/type/type');

//  CONTROLLER
const TodoController = require('./controller/todo.controller');

const Queries = new GraphQLObjectType({
	name: "RootQuery",
	fields: () => ({
		todos: TodoController.TodoList,
		node: nodeField
	})
});


module.exports = Queries;
