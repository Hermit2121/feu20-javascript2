<template>
  <div>
    <button @click="a++">Lägg till på A</button>
    <button @click="b++">Lägg till på B</button>
    <p>Nummret är {{ number }}</p>
    <p class="mt-5">A = {{ a }}</p>
    <p>B = {{ b }}</p>
    <br>
    <p>Nummer + A = {{ addToA }}</p>
    <p>Nummer + B = {{ addToB }}</p>

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
  },
  computed: {
    addToA: function() {
      console.log('ökade A')
      return this.number + this.a
    },
    addToB() {
      console.log('ökade b')
      return this.number + this.b
    }
  }
}
</script>

<style>

</style>