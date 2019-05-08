const express = require('express');
const parser = require('body-parser');
const path = require('path');
const db = require('../database');
const router = require('./router.js')

const app = express();

app.use(parser.json());
app.use('/api', router);
app.use(express.static('public'));
app.listen(3000, console.log('Listening on Port: 3000'));

module.exports = app;