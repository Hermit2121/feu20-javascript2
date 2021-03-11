<template>
  <div>
    <form class="border border-light p-5" @submit.prevent="handleSubmit">
      <p class="h4 text-center mb-4">Create a new post</p>

      <div class="mb-5">
        <label for="title">Title</label>
        <input type="text" id="title" class="form-control" v-model="blog.title">
        <p class="invalid-feedback">Please enter a title</p>
      </div>

      <div class="mb-5">
        <label for="content">Content</label>
        <textarea id="content" class="form-control" v-model="blog.content"></textarea>
        <p class="invalid-feedback">Please enter a title</p>
      </div>

      <p>Categories</p>
      <div class="ms-1 mb-5">
        <div class="form-check form-check-inline">
          <input type="checkbox" class="form-check-input" id="travel" value="Travel" v-model="blog.categories">
          <label for="travel" class="form-check-label">Travel</label>
        </div>
        <div class="form-check form-check-inline">
          <input type="checkbox" class="form-check-input" id="food" value="Food" v-model="blog.categories">
          <label for="food" class="form-check-label">Food</label>
        </div>
        <div class="form-check form-check-inline">
          <input type="checkbox" class="form-check-input" id="computers" value="Computers" v-model="blog.categories">
          <label for="computers" class="form-check-label">Computers</label>
        </div>
        <div class="form-check form-check-inline">
          <input type="checkbox" class="form-check-input" id="frontend" value="Frontend" v-model="blog.categories">
          <label for="frontend" class="form-check-label">Frontend</label>
        </div>
      <p class="text-danger small" v-if="catError">Please choose a category</p>
      </div>


      <label for="select">Author</label>
      <select id="select" class="form-select" v-model="blog.author">
        <option value="" disabled selected></option>
        <option v-for="(au, index) in authors" :key="index">{{ au }}</option>
      </select>
      <p class="invalid-feedback">Please choose an author</p>

      <button class="btn btn-primary mt-5 btn-block"> CREATE POST</button>

    </form>

    <div class="container">
      <h3 class="h1 text-center mt-5">PREWIEW</h3>
      <div class="card card-cascade">

        <div class="text-center bg-primary">
          <h3 class="h2 my-3 text-white">
            {{ blog.title }}
          </h3>
        </div>

        <div class="card-body card-body-cascade">
          <p>Content:</p>
          <p>{{ blog.content }}</p>
          <p>Categories:</p>
          <ul class="list-group list-group-horizontal">
            <li class="list-group-item border-0" v-for="(cat, i) in blog.categories" :key="i">{{ cat }}</li>
          </ul>
          <p>Author: {{ blog.author }}</p>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: '',
        content: '',
        categories: [],
        author: ''
      },
      authors: ['Joakim', 'Hans', 'Jeanette', 'Liam', 'Haitem', 'Tommy'],
      catError: false
    }
  },
  methods: {
    handleSubmit(e) {
      if(this.blog.title !== '' && this.blog.content !== '' && this.blog.categories.length > 0 && this.blog.author !== '') {
        this.$emit('new-post', this.blog)
        this.blog = {
          title: '',
          content: '',
          categories: [],
          author: ''
        }
        e.target.forEach(t => t.classList.remove('is-invalid'))
      } else {
        e.target.forEach(t => {
          if(t.type === 'checkbox') {
            if(this.blog.categories.length > 0) {
              t.classList.remove('is-invalid')
              this.catError = false
            } else {
              t.classList.add('is-invalid')
              this.catError = true
            }
          } else {
            if(t.value === '') {
              t.classList.add('is-invalid')
            } else {
              t.classList.remove('is-invalid')
            }
          }
        })
      }
    } 
  }
}
</script>

<style>

</style>