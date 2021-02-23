<template>
  <footer>
    <h1>{{ msg }}</h1>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: ['msg']
}
</script>

<style scoped> 
  footer {
    background: darkslategray;
    color: #fff;
    padding: 3rem;
    border: 1px solid #000;
  }
</style>