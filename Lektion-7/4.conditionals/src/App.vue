<template>
  <div>
    <navbar :active="active" />
    <button @click="active = !active">Login</button>
    <div class="container">
      <h1 v-if="name === 'Joakim'">Hej {{ name }} välkommen tillbaka</h1>
      <h1 v-else>Trevligt att träffas {{ name }}</h1>
      <h2>Du har {{ todos.length }} todos att göra idag</h2>

      <app-form />

      <todos :todos="todos" />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import AppForm from './components/Form'
import Todos from './components/Todos.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    AppForm,
    Todos
  },
  data() {
    return {
      name: 'Nisse',
      active: false,
      todos: [
        {id: 1, title: 'Todo1'},
        {id: 2, title: 'Todo2'},
        {id: 3, title: 'Todo3'}
      ]
    }
  }
}
</script>

<style> 
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html, body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.container {
  width: 80%;
  margin: auto;
}
</style>
