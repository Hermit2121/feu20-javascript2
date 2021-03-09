<template>
  <div>
    <transition-group name="fade-slide">
      <div v-for="todo in todos" :key="todo.id">
        <todo v-if="value === ''" :todo="todo" @toggle="$emit('toggle')" @delete-todo="$emit('delete-todo', todo.id)" />
        <todo v-else-if="todo.completed === value" @toggle="$emit('toggle')" :todo="todo" @delete-todo="$emit('delete-todo', todo.id)" />
      </div>
    </transition-group>
  </div>
</template>

<script>
import Todo from './todo'
export default {
  props: ['todos', 'value'],
  components: {
    Todo
  }
}
</script>

<style>

  .fade-slide-enter-active, .fade-slide-leave-active {
    transition: all 0.5s ease;
  }
  .fade-slide-enter{
    opacity: 0;
    transform: translateX(-50px);
  }
  .fade-slide-leave-to {
    opacity: 0;
    transform: translateX(50px);
  }

</style>