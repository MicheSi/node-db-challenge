const express = require('express');
const helmet = require('helmet');

const ProjectRouter = require('./projects/project-router');
const ResourceRouter = require('./resources/resource-router');

const server = express();

server.use(express.json());
server.use(helmet());

server.use('/api/projects', ProjectRouter);
server.use('/api/resources', ResourceRouter);

server.get('/', (req, res) => {
    res.send('Server is running');
});

module.exports = server;