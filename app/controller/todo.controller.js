const ObjectID = require('mongodb').ObjectID;
const COLLECTIONS = require('../model/collections');
const DB = require('../model/db');

const {
	GraphQLString,
	GraphQLBoolean,
} = require('graphql');

const {
	fromGlobalId,
	connectionArgs,
	connectionDefinitions,
	connectionFromPromisedArray,
	mutationWithClientMutationId,
	offsetToCursor
} = require('graphql-relay');

// Type
const {TodoType} = require('../type/type');

// Input
const {
	AddTodoInput,
	ChangeTodoDoneStatusInput,
	DeleteTodoInput
} = require('../input/todo.inputs');


const {
	connectionType: TodoConnection,
	edgeType: TodoEdge
} = connectionDefinitions({
	name: COLLECTIONS.TODOS,
	nodeType: TodoType
});

/**
 * Fetches the list of articles
 * @argument searchByTitle - Get article by its title
 * @argument status - Get article by its status
 */
const TodoList = {
	name: "Todo List",
	description: "Fetches list of todos",
	type: TodoConnection,
	args: {
		searchByTitle: {
			description: "Filter todo by its title",
			type: GraphQLString
		},
		done: {
			description: "Filter todo by its status",
			type: GraphQLBoolean
		},
		...connectionArgs
	},
	resolve: (_, args, req) => {
		return connectionFromPromisedArray(
			new Promise((resolve, reject) => {
				let cond = {};
				if (args.done !== undefined) cond['done'] = args.done;
				if (args.searchByTitle !== undefined) cond['title'] = {
					"$regex": `^${args.searchByTitle}`,
					$options: 'i'
				};
				DB.GET(COLLECTIONS.TODOS, cond, (err, docs) => {
					if (err) {
						reject(err)
					} else {
						resolve(docs)
					}
				});
			}),
			args
		)
	}
};


const AddTodo = mutationWithClientMutationId(
	{
		name: "AddTodo",
		description: "Add new todo",
		inputFields: AddTodoInput,
		outputFields: {
			todo: {
				type: TodoEdge,
				resolve: (payload) => {
					return new Promise((resolve, reject) => {
						DB.COUNT(COLLECTIONS.TODOS, {}, (err, count) => {
							if (err) {
								reject(err)
							} else {
								const todo = HandlePayload(payload);
								resolve({
									cursor: offsetToCursor(count - 1),
									node: todo
								});
							}
						});
					})
				}
			}
		},
		mutateAndGetPayload: (todo) => {
			return new Promise((resolve, reject) => {
				DB.INSERT(COLLECTIONS.TODOS, todo, (err, doc) => {
					if (err) {
						reject(err)
					} else {
						resolve(doc)
					}
				})
			})
		}
	}
);


const ChangeTodoDoneStatus = mutationWithClientMutationId({
	name: "ChangeTodoDoneStatus",
	description: "Change status of todo",
	inputFields: ChangeTodoDoneStatusInput,
	outputFields: {
		todo: {
			type: TodoType,
			resolve: (payload) => HandlePayload(payload)
		}
	},
	mutateAndGetPayload: (todo) => {
		return new Promise((resolve, reject) => {
			const _id = fromGlobalId(todo.id).id;
			DB.UPDATE(COLLECTIONS.TODOS, {_id: ObjectID(_id)}, {$set: {done: todo.done}}, (err, doc) => {
				if (err) {
					reject(err)
				} else {
					resolve(doc)
				}
			})
		})
	}
});


// Payload object
function HandlePayload(payload) {
	return {
		_id: payload._id,
		title: payload.title,
		done: payload.done
	}
}


module.exports = {
	TodoList,
	AddTodo,
	ChangeTodoDoneStatus
};