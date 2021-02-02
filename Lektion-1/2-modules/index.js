// import hej from './user'
// const hej = require('./user');

// console.log(hej);

const Nisse = require('./user');
const {names, ages} = require('./module');

const user1 = new Nisse('Joakim', 'Wahlström', 34, 'joakim@mail.com')

// user1.greet();

console.log(names)
console.log(ages)