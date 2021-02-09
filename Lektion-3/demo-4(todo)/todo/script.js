const form = document.querySelector('#todoForm');
const input = document.querySelector('#todoInput');
const output = document.querySelector('#output');

let todos = [];

const fetchTodos = async () => {
  const res = await fetch('http://localhost:9999/api/todos')
  const data = await res.json();
  todos = data;
  console.log(todos)
}
fetchTodos();
