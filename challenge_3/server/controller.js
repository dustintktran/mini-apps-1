const db = require('../database/index.js');
const models = require('../database/models.js');

module.exports = {
    post: ('/', (req, res) => {
        res.send('Post received');
    }),
    get: ('/', (req, res) => {
        res.send('Get resceived');
    }),
    put: ('/', (req, res) => {
        res.send('Put received');
    }),
    delete: ('/', (req, res) => {
        res.send('Delete received');
    })
}