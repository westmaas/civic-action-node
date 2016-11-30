var config      = require('./knexfile.js');  
if(process.env.DBENV) { 
    var env         = process.env.DBENV;  
}
else { 
    var env         = 'development';  
}
var knex        = require('knex')(config[env]);

module.exports = knex;

knex.migrate.latest([config]); 