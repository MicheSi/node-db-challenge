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

module.exports = router;