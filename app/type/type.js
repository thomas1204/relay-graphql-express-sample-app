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
		if (GlobalID.type === COLLECTIONS.CATEGORIES) {
			return new Promise((resolve, reject) => {
				DB.FIND(COLLECTIONS.CATEGORIES, {_id: ObjectID(GlobalID.id)}, (err, data) => {
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
		if (GlobalID.type === COLLECTIONS.CATEGORIES) return TodoType;
		
		return null;
	}
);


const CategoryType = require('./category.type')(nodeInterface); //  CATEGORY TYPE


module.exports = {
	nodeField,
	CategoryType,
};
