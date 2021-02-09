const express = require('express');
const app = express();

// importera controllers
const todosController = require('./controllers/todosController');

// För att vi ska kunna använda JSON
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Controllers
app.use('/api/todos', todosController);

module.exports = app;