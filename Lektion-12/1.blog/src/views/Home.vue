<template>
  <div>
    <h1 class="mt-5">My Posts</h1>
    <div class="container mt-5">
    <input type="text" placeholder="Search" class="form-control mb-5" v-model="searchVal" @keyup="search(searchVal)">
      <post v-for="post in filteredPosts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
import Post from '../components/Post'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      searchVal: ''
    }
  },
  components: {
    Post
  },
  computed: {
    ...mapGetters(['posts', 'filteredPosts', 'searchValue'])
  },
  methods: {
    ...mapActions(['getPosts', 'search'])
  },
  mounted() {
    this.getPosts()
    this.searchVal = this.searchValue
  }
}
</script>
