const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {

  // console.log('request made');
  // console.log(req.url)

  // res.end('hej')
  res.setHeader('Content-type', 'text/html');

  let url = 'index.html'
  // req.url == '/' 
  // ? url = 'index.html'
  // : url = req.url + '.html'

  switch(req.url) {
    case '/':
      url = 'index.html'
      res.statusCode = 200;
      break;
    case '/about':
      url = 'about.html';
      res.statusCode = 200;
      break;
    case '/about-us':
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
    default:
      url = '404.html';
      res.statusCode = 404;
  }


  fs.readFile(path.join(__dirname, 'views', url), (err, data) => {
    if(err) {
      console.log(err)
      res.end();
    }
    res.end(data);
  })


})

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log('server running at http://localhost:'+ PORT)
})