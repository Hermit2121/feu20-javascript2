<template>
  <div>
    <product-card-deck />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ProductCardDeck from '../components/Products/ProductCardDeck.vue'
export default {
  components: {
    ProductCardDeck
  },
  methods: {
    ...mapActions(['getProducts'])
  },
  created() {
    this.getProducts()
  }
}
</script>


<style>

</style>