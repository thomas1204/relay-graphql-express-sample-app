const {
	GraphQLString,
	GraphQLNonNull,
	GraphQLBoolean
} = require('graphql');


const AddTodoInput = {
	title: {type: new GraphQLNonNull(GraphQLString)},
	done: {type: GraphQLBoolean, defaultValue: true}
};

const ChangeTodoDoneStatusInput = {
	id: {type: new GraphQLNonNull(GraphQLString)},
	done: {type: new GraphQLNonNull(GraphQLBoolean)},
};

const DeleteTodoInput = {
	id: {type: new GraphQLNonNull(GraphQLString)}
};


module.exports = {
	AddTodoInput,
	ChangeTodoDoneStatusInput,
	DeleteTodoInput
};