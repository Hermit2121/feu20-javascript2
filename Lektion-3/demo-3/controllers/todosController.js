const router = require('express').Router();
// const express = require('express');
// const router = express.Router();
const todoModel = require('../models/todos/todoModel');

router.get('/', todoModel.getTodos);

router.post('/', (req, res) => {
  res.send('ett svar POST')
})


module.exports = router;
