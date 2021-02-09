const express = require('express');
const app = express();

// importera controllers
const todosController = require('./controllers/todosController');



// Controllers
app.use('/api/todos', todosController);

module.exports = app;