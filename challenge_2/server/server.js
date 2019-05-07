const express = require('express');
const parser = require('body-parser');
const router = require('./routes.js');

const app = express();

app.use(express.static('client'));
app.use(express.urlencoded({ extended: true }))
app.use(parser.json());
app.use('/api', router);

app.listen(3000, console.log('Server is running on localhost at port: 3000'));