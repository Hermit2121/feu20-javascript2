const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;
const serverURI = 'http://localhost:' + PORT

// middleware
const middleware = (req, res, next) => {
  console.log('running middleware');
  next();
}

app.use('/post', middleware);



app.get('/', (req, res) => {
  res.send('Homepage');
})

app.get('/post', (req, res) => {
  res.send('Post')
})



app.listen(PORT, () => console.log('Webserver: '+ serverURI))