
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('methods').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('methods').insert({id: 1, action_id: 1, method_type_id: 1, data: '555-555-5555'}),
        knex('methods').insert({id: 2, action_id: 1, method_type_id: 2, data: 'john.smith@gmail.com'}),
        knex('methods').insert({id: 3, action_id: 1, method_type_id: 3, data: 'https://www.google.com'}),
        knex('methods').insert({id: 4, action_id: 2, method_type_id: 1, data: '555-555-5555'}),
        knex('methods').insert({id: 5, action_id: 2, method_type_id: 2, data: 'john.smith@gmail.com'}),
        knex('methods').insert({id: 6, action_id: 3, method_type_id: 3, data: 'https://www.google.com'})
      ]);
    });
};