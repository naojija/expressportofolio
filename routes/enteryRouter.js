const express = require('express');
const bodyParser = require('body-parser');

const enteryRouter = express.Router();

enteryRouter.use(bodyParser.json());

//'/enteries' endpoints
enteryRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the enteries to you');
})
.post((req, res) => {
    res.end(`Will add the entery: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /enteries');
})
.delete((req, res) => {
    res.end('Deleting all enteries');
});

//'/enteries/:enteryId' endpoints
enteryRouter.route('/:enteryId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of the entery: ${req.params.enteryId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /enteries/${req.params.enteryId}`);
})
.put((req, res) => {
    res.write(`Updating the entery: ${req.params.enteryId}\n`);
    res.end(`Will update the entery: ${req.body.name}
        with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting entery: ${req.params.enteryId}`);
});

module.exports = enteryRouter;