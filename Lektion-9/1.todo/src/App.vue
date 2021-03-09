<template>
  <div class="bg-light">
    <Header title="TODOS by Joakim" />
    <add-todo />
    <div class="container py-5">
      <todos :todos="todos" />

    </div>
    
  </div>
</template>

<script>
  import Todos from './components/Todos/Todos'
  import AddTodo from './components/AddTodo.vue'
  import Header from './components/Header'

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
      ]
    }
  }
}
</script>

<style>

</style>
