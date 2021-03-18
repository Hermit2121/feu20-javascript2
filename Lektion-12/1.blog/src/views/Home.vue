<template>
  <div>
    <h1 class="mt-5">My Posts</h1>
    <div class="container mt-5">
      <post v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
import Post from '../components/Post'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    Post
  },
  computed: {
    ...mapGetters(['posts'])
  },
  methods: {
    ...mapActions(['getPosts'])
  },
  mounted() {
    this.getPosts()
  }
}
</script>
