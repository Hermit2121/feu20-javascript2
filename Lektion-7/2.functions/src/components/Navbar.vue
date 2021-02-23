<template>
  <nav>
    <h1>Hello World</h1>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
nav {
  background: darkslategray;
  display: flex;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
}
ul {
  list-style: none;
  display: flex
}
a {
  text-decoration: none;
  color: #fff;
  padding: 1rem;
  display: inline-block;
}
a:hover {
  background: rgba(0, 0, 0, 0.205);
}
</style>