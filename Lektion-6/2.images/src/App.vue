<template>
  <div>
    <navbar />
    <carousel />
    <h1>{{ msg }}</h1>

    <div class="container mt-5">
      <card-deck />
    </div>

  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Carousel from './components/Carousel.vue'
import CardDeck from './components/cards/CardDeck.vue'

export default {
  name: 'App',
  data() {
    return {
      msg: 'här kan kagfksaldgarodikn'
    }
  },
  components: {
    Navbar,
    Carousel,
    CardDeck
  }
}
</script>

<style>
</style>