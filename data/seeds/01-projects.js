
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Project-1', description: 'Project doing this', completed: false},
        {id: 2, name: 'Project-2', description: 'Project doing that', completed: false},
        {id: 3, name: 'Project-3', description: 'Build app', completed: false}
      ]);
    });
};
