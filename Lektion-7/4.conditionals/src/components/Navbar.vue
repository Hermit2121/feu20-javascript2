<template>
  <nav>
    <h1>Conditional rendering</h1>

    <ul v-if="active">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
    </ul>
    <ul v-else>
      <li><a href="#">Login</a></li>
      <li><a href="#">Register</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['active']
}
</script>

<style scoped>
  nav {
    background: darkslateblue;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    width: 20%;
  }
  a {
    text-decoration: none;
    color: #fff;
    padding: 1rem;
    display: inline-block;
  }
  a:hover {
    background: #00000033;
  }
</style>