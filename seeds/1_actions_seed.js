
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('actions').insert({
          id: 1, 
          name: 'action 1',
          description: 'description 1'
        }),
        knex('actions').insert({
          id: 2, 
          name: 'action 2',
          description: 'description 2'
        }),
        knex('actions').insert({
          id: 3, 
          name: 'action 3',
          description: 'description 3'
        })
      ]);
    });
};
