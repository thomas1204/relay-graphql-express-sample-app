const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const http = require('http');
const colors = require('colors');
const CONFIG = require('./app/config/config');
const MongoDb = require('./app/model/mongoDb');



/**
 * Establish mongodb connection
 */
MongoDb.establishConnection((err) => {
	if (err) {
		console.log(colors.bgRed('MongoDb connection error'));
		console.log(err);
	} else {
		console.log(colors.bgGreen(`MongoDb connected`));
	}
});


/**
 * Express initialized
 */
const app = express();


/**
 * Express configuration
 */
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.set('port', CONFIG.PORT);
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Routes of application
 */
require('./routes/index')(app);

/**
 * Server initialized
 */
const server = http.createServer(app);


/**
 * Assigning port to server
 */
server.listen(CONFIG.PORT);


/**
 * Throws error if any issue in starting the server
 */
server.on('error', (err) => {
	console.log(colors.bgRed('Server initialization error'));
	console.log(err);
});


/**
 * Logs success message with the port number after server started successfully
 */
server.on('listening', () => {
	console.log(colors.bgGreen(`Server started. Listening on ${CONFIG.PORT}`));
});




