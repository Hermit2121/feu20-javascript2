<template>
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    <product-card />
    <product-card />
    <product-card />
    <product-card />
    <product-card />
  </div>
</template>

<script>
import ProductCard from './ProductCard'
export default {
  components: {
    ProductCard
  }
}
</script>

<style>

</style>