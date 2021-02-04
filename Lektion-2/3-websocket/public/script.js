const socket = io();

const output = document.querySelector('#output');
const userName = document.querySelector('#name');
const message = document.querySelector('#message');
const btn = document.querySelector('#send');
const form = document.querySelector('#form');
const feedback = document.querySelector('#feedback');


// Emit event
form.addEventListener('submit', e => {
  e.preventDefault();

  let name;
  userName.value.trim() !== '' ? name = userName.value : name = 'Unknown user'
  if(message.value.trim() !== '') {
    socket.emit('message', {
      id: socket.id,
      message: message.value,
      name
    })
  }

  message.value = '';
  message.focus();

})


// Lyssna efter event "message"

socket.on('message', data => {
  // console.log(data)
  let pos;
  data.id === socket.id ? pos = 'right' : ''
  output.innerHTML += `
  <div class="chat-box ${pos}">
    <p class="chat-name">${data.name}</p>
    <p class="chat-msg">${data.message}</p>
  </div>
  `

  feedback.innerHTML = ''
})


message.addEventListener('keypress', () => {
  socket.emit('typing', userName.value)
})

socket.on('typing', data => {
  feedback.innerHTML = `<p>${data} is typing a message...</p>`
})

socket.on('user', data => {
  output.innerHTML += `<p>${data}</p>`
})
