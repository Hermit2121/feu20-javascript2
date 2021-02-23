<template>
  <div>
    <h2 v-if="todos.length > 0">Yaaay det finns todos att göra!</h2>
    <h2 v-else>Det finns inga todos, lägg till några vetja!</h2>
    <h3>{{todos[0].title}}</h3>
  </div>
</template>

<script>
export default {
  props: ['todos']
}
</script>

<style>

</style>