const app = require('./app');
const mongoose = require('mongoose');
const port = 9999;

const serverURI = 'http://localhost:' + port;
const mongoURI = 'byt!'


app.listen(port, () => console.log('Webserver: ' + serverURI));

mongoose
.set('useCreateIndex', true)
.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => console.log('Connected to DB'));