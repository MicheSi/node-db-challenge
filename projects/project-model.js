const db = require('../data/db-config');

module.exports = {
    find,
    add,
    findTasks,
    addTask
}

function find() {
    return db('projects')
}

function add(project) {
    return db('projects')
        .insert(project, 'id')
}

function findTasks(id) {
    return db('tasks as t')
        .join('projects as p', 'p.id', 't.project_id')
        .select('t.description', 't.notes', 't.completed', 'p.name as project_name', 'p.description as project_description')
        .where('project_id', id)
}

function addTask(task, project_id) {
    const newTask = {...task, project_id}
    return db('tasks')
        .insert(newTask)
}