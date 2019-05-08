const db = require('../database/index.js');
const models = require('../database/models.js');

module.exports = {
  //FORM 1 SUBMISSION
  postf1: ('/', (req, res) => {
    models.FormData.create(req.body)
    .then(()=>console.log('created'))
    .catch(err => console.log(err));
    res.status(200).send('Post received');
  }),
  //FORM 2 SUBMISSION
  postf2: ('/', (req, res) => {
    let data = {address: req.body.address, phone: req.body.phone};
    models.FormData.update(data, {where: {name: req.body.name}})
    .then(() => res.status(200).send('Post received'))
    .catch(err => console.log(err));
  }),
  //FORM 3 SUBMISSION
  postf3: ('/', (req, res) => {
    let data = {payment: req.body.payment};
    models.FormData.update(data, {where: {name: req.body.name}})
    .then(() => res.status(200).send('Post received'))
    .catch(err => console.log(err));
  }),
  //SUMMARY REVEAL
  getSummary: ('/', (req, res) => {
    models.FormData.findOne({where: {name: req.query.name}})
    .then(result => res.status(200).send(result))
    .catch(err => console.log(err));
  })
}