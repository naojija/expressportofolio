const express = require('express');
const bodyParser = require('body-parser');

const serviceRouter = express.Router();

serviceRouter.use(bodyParser.json());

//'/services' endpoints
serviceRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the services to you');
})
.post((req, res) => {
    res.end(`Will add the service: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /services');
})
.delete((req, res) => {
    res.end('Deleting all services');
});

//'/services/:serviceId' endpoints
serviceRouter.route('/:serviceId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of the service: ${req.params.serviceId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /services/${req.params.serviceId}`);
})
.put((req, res) => {
    res.write(`Updating the service: ${req.params.serviceId}\n`);
    res.end(`Will update the service: ${req.body.name}
        with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting service: ${req.params.serviceId}`);
});

module.exports = serviceRouter;