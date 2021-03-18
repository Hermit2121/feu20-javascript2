<template>
  <div class="container mt-5">
    <div class="border rounded p-5" v-if="post">
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  methods: {
    ...mapActions(['getPost', 'clearPost'])
  },
  computed: {
    ...mapGetters(['post'])
  },
  created() {
    this.getPost(this.$route.params.id)
  },
  destroyed() {
    this.clearPost()
  }
}
</script>

<style>

</style>