<template>
  <div>
    <button @click="a++">Lägg till på A</button>
    <button @click="b++">Lägg till på B</button>
    <p>Nummret är {{ number }}</p>
    <p>A = {{ a }}</p>
    <p>B = {{ b }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 30,
      a: 0,
      b: 0
    }
  }
}
</script>

<style>

</style>