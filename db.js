var config      = require('./knexfile.js');  
var env = process.env.DBENV || 'development';
var knex        = require('knex')(config[env]);

module.exports = knex;

knex.migrate.latest([config]); 