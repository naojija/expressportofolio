const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const enteryRouter = require('./routes/enteryRouter');
const specialRouter = require('./routes/specialRouter');
const serviceRouter = require('./routes/serviceRouter');
const reviewRouter = require('./routes/reviewRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/enteries', enteryRouter);
app.use('/specials', specialRouter);
app.use('/services', serviceRouter);
app.use('/reviews', reviewRouter);

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});