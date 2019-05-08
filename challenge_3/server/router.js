const router = require('express').Router();
const controller = require('./controller.js')

router
  .route('/')
  .post(controller.post)
  .get(controller.get)
  .put(controller.put)
  .delete(controller.delete)

module.exports = router;