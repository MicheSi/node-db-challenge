
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, description: 'Do this', notes: 'blah, blah, blah...', completed: false, project_id: 1},
        {id: 2, description: 'Do that', notes: 'my notes', completed: false, project_id: 3},
        {id: 3, description: 'This task', notes: 'N/A', completed: false, project_id: 2},
        {id: 4, description: 'Another task', notes: 'complete by Monday', completed: true, project_id: 1}
      ]);
    });
};
