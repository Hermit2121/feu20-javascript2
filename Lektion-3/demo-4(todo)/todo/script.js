const form = document.querySelector('#todoForm');
const input = document.querySelector('#todoInput');
const output = document.querySelector('#output');

let todos = [];

const fetchTodos = async () => {
  const res = await fetch('http://localhost:9999/api/todos')
  const data = await res.json();
  todos = data;
  console.log(todos)
  listTodos();
}
fetchTodos();


const listTodos = () => {
  output.innerHTML = '';
  todos.forEach(todo => {
    newTodo(todo)
  })
}

const newTodo = todo => {
  let card = document.createElement('div');
  card.classList.add('card', 'p-2', 'mb-3');

  let innerCard = document.createElement('div');
  innerCard.classList.add('d-flex', 'justify-content-between');

  let title = document.createElement('h3');
  title.classList.add('title');
  if(todo.completed === true)
    title.classList.add('complete');
  title.innerText = todo.title;

  title.addEventListener('click', () => updateTodo(todo))



  let button = document.createElement('button');
  button.classList.add('btn', 'btn-sm', 'btn-danger', 'px-3')
  button.innerText = 'X'

  button.addEventListener('click', () => deleteTodo(todo._id))

  innerCard.appendChild(title);  
  innerCard.appendChild(button);
  card.appendChild(innerCard);
  output.appendChild(card);  
}

const deleteTodo = async id => {
  await fetch(`http://localhost:9999/api/todos/${id}`, {
    method: 'DELETE'
  })
  fetchTodos();
}

const createTodo = title => {
  fetch('http://localhost:9999/api/todos', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
      title
    })
  })
  .then(res => res.json())
  .then(() => fetchTodos());
} 

const updateTodo = todo => {
  fetch(`http://localhost:9999/api/todos/${todo._id}`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
      completed: !todo.completed
    })
  })
  .then(res => res.json())
  .then(() => fetchTodos());
} 

form.addEventListener('submit', e => {
  e.preventDefault();
  if(input.value !== '') {
    createTodo(input.value)
    form.reset()
  }

})
