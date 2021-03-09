<template>
  <div>
    <div v-for="todo in todos" :key="todo._id">
      <todo :todo="todo" />
    </div>
  </div>
</template>

<script>
import Todo from './todo'
export default {
  props: ['todos'],
  components: {
    Todo
  }
}
</script>

<style>

</style>