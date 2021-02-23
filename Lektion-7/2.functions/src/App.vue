<template>
  <div>
    <app-nav />
    <div class="output container mt-5">
      <h2>{{ message }}</h2>

      <functions class="mt-5" />
      <computed class="mt-5" />


    </div>

    <app-footer msg="meddelande" />
    <app-footer v-bind:msg="message" />
    <app-footer :msg="message" />
  </div>
</template>

<script>
import appNav from './components/Navbar'
import appFooter from './components/Footer'
import Functions from './components/Functions.vue'
import Computed from './components/Computed.vue'
export default {
  name: 'App',
  data() {
    return {
      message: 'Ett meddelande från våran data'
    }
  },
  components: {
    appNav,
    appFooter,
    Functions,
    Computed
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
.output {
  min-height: 500px;
}
.mt-5 {
  margin-top: 3rem;
}
</style>
