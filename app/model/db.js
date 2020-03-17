const MongoDb = require('./mongoDb');

/***
 * Returns a single document from a collection based on query
 * @param collection - name of the collection
 * @param query - conditions to filter the data
 * @param callback
 * @constructor
 */
const FIND = (collection, query, callback) => {
	const db = MongoDb.getDb();
	db.collection(collection).findOne(query, {}, function (error, result) {
		if (error) {
			callback(error, null);
		} else {
			callback(null, result);
		}
	})
};


/***
 * Returns an array of documents from a collection based on query
 * @param collection
 * @param query
 * @constructor
 */
const GET = async (collection, query) => {
	const db = MongoDb.getDb();
	const LIST = await db.collection(collection).find(query, {});
	return LIST.toArray();
};


/***
 * Inserts a document to a collection
 * @param collection
 * @param doc
 * @param callback
 * @constructor
 */
const INSERT = (collection, doc, callback) => {
	const db = MongoDb.getDb();
	db.collection(collection).insertOne(doc, {}, function (error, result) {
		if (error) {
			callback(error, null);
		} else {
			callback(null, result.ops[0]);
		}
	})
};


/***
 * Delets a document from a collection
 * @param collection
 * @param query
 * @param callback
 * @constructor
 */
const DELETE = (collection, query, callback) => {
	const db = MongoDb.getDb();
	db.collection(collection).deleteOne(query, {}, function (error, result) {
		if (error) {
			callback(error, null);
		} else {
			callback(null, result);
		}
	})
};


/***
 * Updates a document based on query
 * @param collection
 * @param query
 * @param doc
 * @param callback
 * @constructor
 */
const UPDATE = (collection, query, doc, callback) => {
	const db = MongoDb.getDb();
	db.collection(collection).findOneAndUpdate(query, doc, {returnOriginal: false}, function (error, result) {
		if (error) {
			callback(error, null);
		} else {
			callback(null, result.value);
		}
	})
};


/***
 * Returns the count of documents in a collection based on query
 * @param collection
 * @param query
 * @param callback
 * @constructor
 */
const COUNT = (collection, query, callback) => {
	const db = MongoDb.getDb();
	db.collection(collection).countDocuments(query, {}, function (error, result) {
		if (error) {
			callback(error, null);
		} else {
			callback(null, result);
		}
	})
};


module.exports = {
	FIND,
	GET,
	INSERT,
	DELETE,
	UPDATE,
	COUNT
};
