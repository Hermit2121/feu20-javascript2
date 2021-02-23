<template>
  <div>
    <h2 v-bind:class="{green: true, red:true}">En Text</h2>
    <h2 v-bind:class="{green: true}">En Text</h2>
    <div @click="available = !available" :class="{className: available}">
      <span>Joakim</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      available: false
    }
  }
}
</script>

<style scoped>
  span {
    background: red;
    margin-top: 1rem;
    display: inline-block;
    padding: 1rem;
    color: #fff;
    cursor: pointer;
  }
  .className span {
    background: green;
  }
</style>