<template>
  <div class="row row-cols-1 row-cols-md-3">
    <product v-for="product in products" :key="product._id" />
  </div>
</template>

<script>
import Product from './Product'
export default {
  components: {
    Product
  }
}
</script>

<style>

</style>