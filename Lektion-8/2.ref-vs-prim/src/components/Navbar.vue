<template>
  <nav>
    <h1 @click="change">{{ title }}</h1>
  </nav>
</template>

<script>
export default {
  props: ['title'],
  methods: {
    change() {
      this.$emit('changeTitle', 'Hej')
    }
  }
}
</script>

<style scoped>
  nav {
    background: #6558b8;
    padding: 2rem;
  }
</style>