<template>
  <div>
    <app-nav />
  </div>
</template>

<script>
import appNav from './components/Navbar'
export default {
  name: 'App',
  components: {
    appNav
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.container {
  width: 80%;
  margin: auto;
}
</style>
