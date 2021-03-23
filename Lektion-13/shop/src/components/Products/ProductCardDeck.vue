<template>
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    <product-card v-for="product in products" :key="product.id" :product="product" />
    <!-- <product-card />
    <product-card />
    <product-card />
    <product-card /> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductCard from './ProductCard'
export default {
  components: {
    ProductCard
  },
  computed: {
    ...mapGetters(['products'])
  }
}
</script>

<style>

</style>