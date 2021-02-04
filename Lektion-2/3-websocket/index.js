const express = require('express');
const http = require('http');
const path = require('path');
const socket = require('socket.io');

const app = express();
const server = http.createServer(app)
const io = socket(server);

const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, 'public')))

server.listen(PORT, () => {
  console.log('server runnig on http://localhost:' + PORT)
})

io.on('connection', socket => {
  // console.log(socket.id)

  socket.broadcast.emit('user', 'A user has joined the chat');
  socket.on('disconnect', () => {
    io.emit('user', 'A user has left the chat')
  })

  socket.on('message', data => {
    // console.log(data)
    io.sockets.emit('message', data)
  })

  // Broadcast - sckickara någonting till alla andra förutom den socket eventet kom ifrån
  socket.on('typing', data => {
    socket.broadcast.emit('typing', data)
  })

})