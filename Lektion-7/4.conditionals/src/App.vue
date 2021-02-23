<template>
  <div>
    <navbar :active="active" />
    <button @click="active = !active">Login</button>
    <div class="container">
      <h1 v-if="name === 'Joakim'">Hej {{ name }} välkommen tillbaka</h1>
      <h1 v-else>Trevligt att träffas {{ name }}</h1>

      <app-form />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import AppForm from './components/Form'

export default {
  name: 'App',
  components: {
    Navbar,
    AppForm
  },
  data() {
    return {
      name: 'Nisse',
      active: false
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
