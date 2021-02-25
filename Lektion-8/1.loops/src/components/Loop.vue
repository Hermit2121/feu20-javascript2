<template>
  <div>
    <div v-if="names.length > 0">
      <p v-for="(name, index) in names" :key="index" >Namn nr: {{ index }} är: {{ name }}</p>
    </div>

    <p v-else>Det finns inga namn att visa</p>
  </div>
</template>

<script>
export default {
  props: ['names']
}
</script>

<style>

</style>