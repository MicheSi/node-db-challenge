const db = require('../data/db-config');

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
    findTasks,
    addTask
}

function find() {
    return db('projects')
}

function findById(id) {
    return db('projects')
    .select('*')
    .where({id})
}

function add(project) {
    return db('projects')
        .insert(project, 'id')
}

function update(id, changes) {
    return db('projects')
    .where({id})
    .update(changes)
}

function remove(id) {
    return db('projects')
    .where({id})
    .del()
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