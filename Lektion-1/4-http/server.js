const http = require('http');

const server = http.createServer((req, res) => {
  // console.log('request made')
  // console.log(req.url)
  // res.write('Hello');
  // res.write('<head><link /></head>');
  // res.write('<h1>HELLO</h1>');
  res.end('<h1>HELLO Again</h1>');
})

server.listen(9999, 'localhost', () => console.log('Server running on http://localhost:9999'))