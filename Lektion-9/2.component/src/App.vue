<template>
  <div id="app">
    <div class="container mt-5">
      <user />
    </div>
  </div>
</template>

<script>
import User from './components/User'

export default {
  name: 'App',
  components: {
    User
  }
}
</script>

<style>
  form {
    z-index: 10;
  }
</style>
