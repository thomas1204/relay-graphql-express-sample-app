const fs = require('fs');
const path = require('path');
const {printSchema} = require('graphql');

/**
 * Main schema file
 */
const schema = require('./app/schema.js');

/**
 * Path to save the generated schema file
 */
const schemaPath = path.resolve(__dirname, './schema/schema.graphql');

/**
 * Generate schema file
 */
fs.writeFileSync(schemaPath, printSchema(schema));

/**
 * Display success message
 */
console.log("Wrote", schemaPath);
