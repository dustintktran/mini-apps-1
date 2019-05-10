const express = require('express');
const parser = require('body-parser')
const router = require('./router.js')
const db = require('../database/index.js')
const models = require('../database/models.js')

const app = express();

app.use(parser.json());
app.use('/api', router);
app.use(express.static('public'))
app.listen(3000, console.log('Listening on port 3000'));

module.exports = app;