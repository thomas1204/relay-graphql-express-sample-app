/**
 * Configuration variables
 * Comment and uncomment them based on the environment
 */


/**
 * Development environment
 */
const PORT = "7000";
const DATABASE = "poc_v2";
const MONGODB_URL = `mongodb+srv://shayamthomas:letmein123@loree-76xnb.mongodb.net/${DATABASE}?retryWrites=true&w=majority`;


/**
 * Production environment
 */
// const PORT = "";
// const SERVER_URL = ``;
// const MONGODB_URL = "";


module.exports = {
	PORT,
	DATABASE,
	MONGODB_URL
};