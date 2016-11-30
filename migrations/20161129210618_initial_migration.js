
exports.up = function(knex, Promise) {
      return Promise.all([

        knex.schema.createTable('actions', function(table){
            table.increments('id').primary();
            table.string('name');
            table.string('description');
            table.dateTime('creation_date');
        })
    ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
        knex.schema.dropTable('actions')
    ])
};
