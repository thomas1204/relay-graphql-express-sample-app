const CONFIG = require('../config/config');
const MongoClient = require('mongodb').MongoClient;
const mongoUrl = CONFIG.MONGODB_URL;
const database = CONFIG.DATABASE;


let DB;

module.exports = {
	
	establishConnection: (callback) => {
		MongoClient.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true}, function (err, client) {
			DB = client.db(database);
			return callback(err);
		});
	},
	
	getDb: () => {
		return DB;
	}
};