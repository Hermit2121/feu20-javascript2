<template>
  <div>
    <div class="d-flex">
      <div class="user" v-for="user in users" :key="user.id">
        <h3>{{ user.name }}</h3>
        <p>Age: {{ user.age }}</p>
        <p>Email: {{ user.email }}</p>
      </div>
    </div>
    <button @click="change">Change</button>
  </div>
</template>

<script>
export default {
  props: ['users'],
  methods: {
    change() {
      // this.$emit('changeUser', 'Hej')
      this.users[0].name = 'Hej'
    }
  }
}
</script>

<style scoped>
  .d-flex {
    display: flex;
    justify-content: space-between;
  }
  .user {
    border: 1px solid #000;
    padding: 1rem;
    margin: 1rem;
  }
</style>