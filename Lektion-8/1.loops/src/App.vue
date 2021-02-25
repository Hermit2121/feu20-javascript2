<template>
  <div id="app">
    <!-- <names :names="names" /> -->
    <loop :names="names" />

    <users :users="users" />
    <objects :users="users" />
  </div>
</template>

<script>
import Loop from './components/Loop.vue'
import Objects from './components/Objects.vue'
import Users from './components/Users.vue'
// import Names from './components/Names'

export default {
  name: 'App',
  components: {
    // Names,
    Loop,
    Users,
    Objects
  },
  data() {
    return {
      names: ['Joakim', 'Jeanette', 'Hans', 'Haitem', 'Tommy', 'Jack', 'Colin', 'Vince'],
      users: [
        {id: 1, name: 'Joakim', age: 34},
        {id: 2, name: 'Hans', age: 36},
        {id: 3, name: 'Jeanette', age: 33},
        {id: 4, name: 'Tommy', age: 38}
      ]
    }
  }
}
</script>

<style>
  .card {
    border: 1px solid #333;
    border-radius: 1rem;
    margin-bottom: 1rem;
    padding: 1rem;
    width: 50%;
  }
</style>
