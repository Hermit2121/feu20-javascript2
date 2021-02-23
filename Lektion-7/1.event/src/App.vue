<template>
  <div>
    <hero />

    <div class="container mt-5">
      <div class="row">

        <div class="col-5">
          <sign-in />
        </div>
        
        <div class="col-2"></div>

        <div class="col-5">
          <register />
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Hero from './components/Hero'
import Register from './components/Register.vue'
import SignIn from './components/SignIn.vue'
export default {
  name: 'App',
  components: {
    Hero,
    SignIn,
    Register
  }
}
</script>

<style>

</style>
