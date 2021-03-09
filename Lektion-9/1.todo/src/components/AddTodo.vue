<template>
  <div class="border-bottom bg-white">
    <form class="py-5 container" @submit.prevent="addTodo">
      
      <div class="row">

        <div class="col-8">
          <div class="input-group">
            <!-- <input type="text" class="form-control" ref="input" placeholder="Add todo.." v-model="title"> -->
            <input type="text" class="form-control" :class="{'is-invalid': error.length}" placeholder="Add todo.." v-model="title">
            <button class="btn btn-info">ADD</button>
          </div>
          <small class="text-danger">{{error}}</small>
        </div>
        <div class="col-4">
          <select class="form-control" v-model="select" @change="$emit('sort', select)">
            <option value="">Show all</option>
            <option value="false">Show Uncompleted</option>
            <option value="true">Show Completed</option>
          </select>
        </div>

      </div>

    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      error: '',
      select: ''
    }
  },
  methods: {
    addTodo() {
      if(this.title !== '') {
        this.$emit('addTodo', this.title)
        this.error = ''
        this.title = ''
        // this.$refs.input.classList.remove('is-invalid')
      } else {
        this.error = 'You must enter what ToDO'
        // this.$refs.input.classList.add('is-invalid')
      }
    }
  }
}
</script>

<style>

</style>