const app = require('./app');
const mongoose = require('mongoose');
const port = 9999;

const serverURI = 'http://localhost:' + port;


app.listen(port, () => console.log('Wabserver: ' + serverURI));