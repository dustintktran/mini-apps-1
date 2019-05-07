const express = require('express');
const router = express.Router();
const controller = require('./controller.js');

router
  .route('/')
  .post(controller.post)

  module.exports = router;
