<template>
  <div>
    <appNavbar />
    <hero />
    <testamonials />
    <features />
    <hero />
    <pricing />
    <app-footer />
  </div>
</template>

<script>
import Navbar from './components/navigation/Navbar'
import Footer from './components/navigation/Footer'
import Testamonials from './components/testamonials/Terstamonials'
import Hero from './components/Hero.vue'
import Features from './components/Features.vue'
import Pricing from './components/Pricing.vue'

export default {
  name: 'App',
  components: {
    appNavbar: Navbar,
    appFooter: Footer,
    Testamonials,
    Hero,
    Features,
    Pricing
  }
}
</script>

<style>

</style>
