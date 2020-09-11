const express = require('express');
const bodyParser = require('body-parser');

const reviewRouter = express.Router();

reviewRouter.use(bodyParser.json());

//'/reviews' endpoints
reviewRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the reviews to you');
})
.post((req, res) => {
    res.end(`Will add the review: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /reviews');
})
.delete((req, res) => {
    res.end('Deleting all reviews');
});

//'/reviews/:reviewId' endpoints
reviewRouter.route('/:reviewId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of the review: ${req.params.reviewId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /reviews/${req.params.reviewId}`);
})
.put((req, res) => {
    res.write(`Updating the review: ${req.params.reviewId}\n`);
    res.end(`Will update the review: ${req.body.name}
        with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting review: ${req.params.reviewId}`);
});

module.exports = reviewRouter;