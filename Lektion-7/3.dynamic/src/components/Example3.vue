<template>
  <div>
    <label for="name">Name: </label>
    <input :class="hasErrors ? {error: true} : {success: true}" type="text" id="name">
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasErrors: false
    }
  }
}
</script>

<style scoped>
  input {
    padding: 0.5rem 0;
  }
  .error {
    border: 2px solid red;
    outline: red;
  }
  .success {
    border: 2px solid green;
    outline: green;
  }
</style>