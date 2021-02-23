<template>
  <div>
    <navbar />
    <div class="container">
      <example-1 />
      <example-2 class="mt-1" />
      <example-3 class="mt-1" />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Example1 from './components/Example1'
import Example2 from './components/Example2'
import Example3 from './components/Example3'

export default {
  name: 'App',
  components: {
    Navbar,
    Example1,
    Example2,
    Example3

  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.container {
  width: 80%;
  margin: auto;
}
.green {
  color: green;
}
.red {
  color: red;
}
.mt-1 {
  margin-top: 2rem;
}
.btn {
  background: transparent;
  border: none;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  outline: none;
  cursor: pointer;
}
.btn-active {
  background: green;
  color: #fff;
}
.btn-primary {
  background: #2e0042;
  color: #fff;
}
</style>
