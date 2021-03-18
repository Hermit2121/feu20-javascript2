<template>
  <router-link :to="'/details/' + post.id">
    <div class="border rounded hover-shadow text-dark p-3 mb-3">
      <h2>{{ post.title }}</h2>
      <p class="mt-4">{{ post.body | shorten }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['post'],
  filters: {
    shorten(val) {
      return val.slice(1,100) + '...'
    }
  }
}
</script>

<style>

</style>