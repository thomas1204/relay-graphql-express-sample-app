const ObjectID = require('mongodb').ObjectID;
const COLLECTIONS = require('../model/collections');
const DB = require('../model/db');

const {
	fromGlobalId,
	nodeDefinitions
} = require('graphql-relay');


let GlobalID;

const {nodeInterface, nodeField} = nodeDefinitions(
	(globalId) => {
		
		GlobalID = fromGlobalId(globalId);
		
		/**
		 * Check the global type and return respective details
		 */
		if (GlobalID.type === COLLECTIONS.TODOS) {
			return new Promise((resolve, reject) => {
				DB.FIND(COLLECTIONS.TODOS, {_id: ObjectID(GlobalID.id)}, (err, data) => {
					if (err) reject(err);
					resolve(data)
				})
			})
		}
		
		return null;
	},
	() => {
		
		/**
		 * Check if global type and return respective type
		 */
		if (GlobalID.type === COLLECTIONS.TODOS) return TodoType;
		
		return null;
	}
);


const TodoType = require('./todo.type')(nodeInterface); //  CATEGORY TYPE


module.exports = {
	nodeField,
	TodoType,
};
