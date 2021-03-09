<template>
  <div class="bg-light">
    <Header title="TODOS by Joakim" />
    <add-todo @addTodo="add" @sort="sortTodos" />
    <div class="container py-5">
      <todos :value="sort" :todos="todos" @delete-todo="deleteTodo" />

    </div>
    
  </div>
</template>

<script>
  import Todos from './components/Todos/Todos'
  import AddTodo from './components/AddTodo.vue'
  import Header from './components/Header'

  import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'App',
  components: {
    Header,
    AddTodo,
    Todos
  },
  data() {
    return {
      todos: [
        { _id: '1', title: 'Todo item one', completed: true },
        { _id: '2', title: 'Todo item two', completed: false },
        { _id: '3', title: 'Todo item three', completed: true },
        { _id: '4', title: 'Todo item four', completed: false },
        { _id: '5', title: 'Todo item five', completed: false },
      ],
      sort: ''
    }
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo._id !== id)
    },
    add(title) {
    let todo = {
      _id: uuidv4(),
      title,
      completed: false
    }
    this.todos.unshift(todo)
    },
    sortTodos(val){
      switch(val) {
        case 'false':
          this.sort = false
          break;
        case 'true':
          this.sort = true
          break;
        default:
          this.sort = ''
      }
    }
  }
  
}
</script>

<style>

</style>
