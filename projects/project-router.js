const express = require('express');

const Projects = require('./project-model');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.find()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        res.status(500).json({message: err.message})
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;

    Projects.findById(id)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        res.status(500).json({message: err.message})
    })
})

router.get('/:id/tasks', (req, res) => {
    const id = req.params.id;

    Projects.findTasks(id)
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(err => {
        res.status(500).json({message: err.message})
    })
})

router.post('/', (req, res) => {
    const projectInfo = req.body;

    Projects.add(projectInfo)
    .then(ids => {
        res.status(200).json({created: ids[0]})
    })
    .catch(err => {
        res.status(500).json({message: err.message})
    })
})

router.post('/:id/tasks', (req, res) => {
    const taskInfo = req.body;
    const id = req.params.id;

    Projects.addTask(taskInfo, id)
    .then(task => {
        res.status(200).json(task)
    })
    .catch(err => {
        res.status(500).json({message: err.message})
    })
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;

    Projects.update(id, changes)
    .then(count => {
        if (count) {
            res.status(200).json({updated: count});
        } else {
            res.status(404).json({message: err.message})
        }
    })
    .catch(err => {
        res.status(500).json({message: err.message})
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    Projects.remove(id)
    .then(count => {
        if (count) {
            res.status(200).json({removed: count})
        } else {
            res.status(404).json({message: err.message})
        }
    })
    .catch(err => {
        res.status(500).json({message: err.message})
    })
})

module.exports = router;