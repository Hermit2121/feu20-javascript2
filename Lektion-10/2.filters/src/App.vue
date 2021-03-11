<template>
  <div>
    <posts :posts="posts" />
  </div>
</template>

<script>
import axios from 'axios'
import Posts from './components/Posts'
export default {
  name: 'App',
  components: {
    Posts
  },
  data() {
    return {
      posts: []
    }
  },
  methods: {
    async getPosts() {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      this.posts = res.data
    }
  },
  created() {
    this.getPosts()
  }
}
</script>

<style>

</style>
