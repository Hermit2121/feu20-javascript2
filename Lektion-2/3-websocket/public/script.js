const socket = io();

const output = document.querySelector('#output');
const userName = document.querySelector('#name');
const mesasge = document.querySelector('#message');
const btn = document.querySelector('#send');
const form = document.querySelector('#form');


// Emit event
form.addEventListener('submit', e => {
  e.preventDefault();
})