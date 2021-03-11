<template>
  <footer class="bg-info text-center text-lg-start">
  <!-- Copyright -->
  <div class="text-center text-white p-3">
    &copy; {{ new Date().getFullYear() }} Copyright
    <a class="text-white" href="#">Meetingroom.com</a>
    <span class="small ms-4">
      <router-link class="text-white mx-2" to="/about">About</router-link>
      <router-link class="text-white mx-2" to="/integrity">Integrity Agreement</router-link>
    </span>
  </div>
  <!-- Copyright -->
</footer>
</template>

<script>
export default {

}
</script>

<style>

</style>