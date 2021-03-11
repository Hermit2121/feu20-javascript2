<template>
  <div>
    <navbar />
    <div class="container">
      <router-view/>
    </div>

  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  components: {
    Navbar
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
.d-flex {
  display: flex;
}
</style>
