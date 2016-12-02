
exports.up = function(knex, Promise) {
    return Promise.all([

        knex.schema.createTable('actions', function(table){
            table.increments('id').primary();
            table.string('name');
            table.string('description');
            table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'));
        })
    ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
        knex.schema.dropTable('actions')
    ])
};
