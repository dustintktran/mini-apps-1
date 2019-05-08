const router = require('express').Router();
const controller = require('./controller.js')

router
  .route('/f1')
  .post(controller.postf1)

router
  .route('/f2')
  .post(controller.postf2)

router
  .route('/f3')
  .post(controller.postf3)

router
  .route('/')
  .get(controller.getSummary)

module.exports = router;