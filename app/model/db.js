const MongoDb = require('./mongoDb');

/***
 * Returns a single document from a collection based on query
 * @param collection - name of the collection
 * @param query - conditions to filter the data
 * @constructor
 */
const FIND = async (collection, query) => {
	const db = MongoDb.getDb();
	const DATA = await db.collection(collection).findOne(query, {});
	return DATA;
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
 * @constructor
 */
const INSERT = async (collection, doc) => {
	const db = MongoDb.getDb();
	const DATA = await db.collection(collection).insertOne(doc, {});
	return DATA.ops[0];
};


/***
 * Delets a document from a collection
 * @param collection
 * @param query
 * @constructor
 */
const DELETE = async (collection, query) => {
	const db = MongoDb.getDb();
	const DATA = await db.collection(collection).deleteOne(query, {});
	return DATA;
};


/***
 * Updates a document based on query
 * @param collection
 * @param query
 * @param doc
 * @constructor
 */
const UPDATE = async (collection, query, doc) => {
	const db = MongoDb.getDb();
	const DATA = await db.collection(collection).findOneAndUpdate(query, doc, {returnOriginal: false});
	return DATA.value
};


/***
 * Returns the count of documents in a collection based on query
 * @param collection
 * @param query
 * @constructor
 */
const COUNT = async (collection, query) => {
	const db = MongoDb.getDb();
	const COUNT = await db.collection(collection).countDocuments(query, {});
	return COUNT;
};


module.exports = {
	FIND,
	GET,
	INSERT,
	DELETE,
	UPDATE,
	COUNT
};
