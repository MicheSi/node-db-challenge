const express = require('express');

const Resources = require('./resource-model');

const router = express.Router();

router.get('/', (req, res) => {
    Resources.find()
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(err => {
        res.status(500).json({message: err.message})
    })
})

router.post('/', (req, res) => {
    const resourceInfo = req.body;

    Resources.add(resourceInfo)
    .then(ids => {
        res.status(200).json({created: ids[0]})
    })
    .catch(err => {
        res.status(500).json({message: err.message})
    })
})

module.exports = router;