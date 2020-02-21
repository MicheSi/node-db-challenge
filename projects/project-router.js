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

module.exports = router;