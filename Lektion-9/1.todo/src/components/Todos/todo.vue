<template>
  <div class="px-2 border bg-white mt-1 relative">
    <div class="d-flex justify-content-between align-items-center">
      <p class="p-3" :class="{ done: todo.completed}" @click="toggleCompleted">{{ todo.title }}</p>
      <button class="btn btn-danger px-3" @click="deleteTodo">X</button>
    </div>
      <!-- <small class="text-danger">{{ error }}</small> -->
      <modal v-if="error" @close="error = false" />
  </div>
</template>

<script>
import Modal from './Modal'
export default {
  props: ['todo'],
  components: {
    Modal
  },
  data() {
    return {
      error: false
    }
  },
  methods: {
    toggleCompleted() {
      fetch(`http://localhost:3000/todos/${this.todo.id}`, {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
          completed: !this.todo.completed
        })
      })
      .then(res => {
        if(res.status === 200) {
          this.$emit('toggle')
        }
      })
    },
    deleteTodo() {
      if(this.todo.completed) {
        this.$emit('delete-todo', this.todo.id)
      } else {
        
        this.error = true
      }
    }
  }
}
</script>

<style scoped>
p {
  margin: 0;
  cursor: pointer;
  flex: 1;

}
.relative {
  position: relative;
}
.done {
  text-decoration: line-through;
  color: #bbb;
}
small {
  position: absolute;
  bottom: 5px;
  left: 5px;
}
</style>