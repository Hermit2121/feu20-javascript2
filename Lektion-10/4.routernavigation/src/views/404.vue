<template>
  <div>
    <h1>404</h1>
    <p>page not found</p>
  </div>
</template>

<script>
export default {
  name: '404',
  mounted() {
    setTimeout(() => {
      this.$router.replace({ name: 'Home' })
    }, 4000)
  }
}
</script>

<style>

</style>