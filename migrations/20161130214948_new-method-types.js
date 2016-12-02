
exports.up = function(knex, Promise) {
  return Promise.all([
        knex("method_types").insert({method_type: "phone"}),
        knex("method_types").insert({method_type: "email"}),
        knex("method_types").insert({method_type: "petition"})
    ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
        knex("method_types").delete().whereIn('method_type', "phone", "email", "petition")
    ])  
};
