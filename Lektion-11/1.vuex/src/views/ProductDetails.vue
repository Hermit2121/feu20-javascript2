<template>
  <div class="card">
    <h1>name</h1>
    <p>id: {{ id }}</p>
    <h3>PRICE: 000</h3>
    <h3>PRICE + TAX: 000</h3>

  </div>
</template>

<script>
export default {
  props: ['id']
}
</script>

<style scoped>
  .card {
    width: 80%;
    margin: 2rem auto;
    border: 1px solid #4b4b4b;
    border-radius: 10px;
    padding: 1rem;
    min-height: 50vh;
  }
</style>