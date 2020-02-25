
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'Resource-1', description: 'Used for this'},
        {id: 2, name: 'Resource-2', description: 'Used for that'},
        {id: 3, name: 'Resource-3', description: 'None'},
        {id: 4, name: 'Resource-4', description: 'N/A'},
        {id: 5, name: 'Resource-5', description: '???'}
      ]);
    });
};
