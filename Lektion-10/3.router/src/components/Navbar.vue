<template>
  <nav class="d-flex">
    <h1>LOGO</h1>
    <ul class="d-flex">
      <li><router-link to="/" class="link">Home</router-link></li>
      <li><router-link to="/about" class="link">About</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
  nav {
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    background-color: darkslategray;
    color: #fff;
  }
  li {
    list-style: none;
  }
  .link {
    text-decoration: none;
    color: #fff;
    padding: 1rem;
    display: inline-block;
  }
  .link:hover {
    background-color: #00000031;
  }
  /* .router-link-active {
    text-decoration: underline;
  } */
  .router-link-exact-active {
    text-decoration: underline;
  }
</style>