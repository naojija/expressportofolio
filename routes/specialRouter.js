const express = require('express');
const bodyParser = require('body-parser');

const specialRouter = express.Router();

specialRouter.use(bodyParser.json());

//'/specials' endpoints
specialRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the specials to you');
})
.post((req, res) => {
    res.end(`Will add the special: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /specials');
})
.delete((req, res) => {
    res.end('Deleting all specials');
});

//'/specials/:specialId' endpoints
specialRouter.route('/:specialId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of the special: ${req.params.specialId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /specials/${req.params.specialId}`);
})
.put((req, res) => {
    res.write(`Updating the special: ${req.params.specialId}\n`);
    res.end(`Will update the special: ${req.body.name}
        with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting special: ${req.params.specialId}`);
});

module.exports = specialRouter;