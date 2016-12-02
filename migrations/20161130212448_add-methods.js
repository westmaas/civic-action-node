
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('method_types', function(table) {
            table.increments('id').primary();
            table.string('method_type');
            table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'));
        }),
        knex.schema.createTable('methods', function(table){
            table.increments('id').primary();
            table.integer('action_id').unsigned().references('id').inTable('actions').onDelete('cascade');
            table.integer('method_type_id').unsigned().references('id').inTable('method_types').onDelete('cascade');
            table.string('data');
            table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'));
        })
    ]) 
};

exports.down = function(knex, Promise) {
  return Promise.all([
        knex.schema.dropTable('methods'),
        knex.schema.dropTable('method_types')
    ])
};
