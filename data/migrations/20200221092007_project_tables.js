
exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments();

        tbl.string('name', 255).notNullable().index();
        tbl.text('description');
        tbl.boolean('completed').defaultTo(false);
    })
    .createTable('tasks', tbl => {
        tbl.increments();

        tbl.text('description').notNullable();
        tbl.text('notes');
        tbl.boolean('completed').defaultTo(false);

        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
    .createTable('resources', tbl => {
        tbl.increments();

        tbl.string('name', 255).notNullable().index().unique();
        tbl.text('description');
    })
    .createTable('project_resources', tbl => {
        tbl.primary(['project_id', 'resource_id']);

        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');

        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('resources')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');      
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('projects')
};
