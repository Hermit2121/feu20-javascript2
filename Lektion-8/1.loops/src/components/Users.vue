<template>
  <div v-if="users.length">
    <div v-for="user in users" :key="user.id" class="card">
      <h3>{{ user.name }}</h3>
      <p>{{ user.age }}</p>
    </div>
  </div>
  <div v-else>
    <h3>No users registrated</h3>
  </div>
</template>

<script>
export default {
  props: ['users']
}
</script>

<style> 

</style>