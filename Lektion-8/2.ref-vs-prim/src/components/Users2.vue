<template>
  <div>
    <div class="user" v-for="user in users" :key="user.id">
      <h3>{{ user.name }}</h3>
      <p>Age: {{ user.age }}</p>
      <p>Email: {{ user.email }}</p>
    </div>
    <button @click="change">Change</button>
  </div>
</template>

<script>
export default {
  props: ['users'],
  methods: {
    change() {
      if(this.users[0].name == 'Hej') {
        this.users.pop()
      } else {
        this.users[0].name = 'Hej'
      }
    }
  }
  
}
</script>

<style scoped>
  .user {
    background-color: #001925;
    color: #fff;
    border: 1px solid #000;
    padding: 1rem;
    margin: 1rem;
  }
</style>