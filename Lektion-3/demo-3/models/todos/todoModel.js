const mongodb = require('mongoose');
const Todo = require('./todoSchema');


exports.getTodos = (req, res) => {
  Todo.find()
  .then(data => res.status(200).json(data))
  .catch(err => res.status(500).json(err))
}