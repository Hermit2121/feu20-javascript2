<template>
  <div>
    <!-- <button @click="sum++" >Add</button>
    <button @click="sum--">Subtract</button> -->
    <button @click="add($event, 2)" >Add</button>
    <button @click="sub">Subtract</button>

    <div>sum: {{ sum }}</div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      sum: 32
    }
  },
  methods: {
    add(e, n) {
      console.log(e)
      this.sum += n
    },
    sub() {
      this.sum--
    }
  }
}
</script>

<style>

</style>