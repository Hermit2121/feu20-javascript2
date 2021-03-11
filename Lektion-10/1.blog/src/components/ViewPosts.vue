<template>
  <div class="container">
    <div v-for="(post, index) in posts" :key="index">
      <h3 class="h1 text-center mt-5">PREWIEW</h3>
      <div class="card card-cascade">

        <div class="text-center bg-primary">
          <h3 class="h2 my-3 text-white">
            {{ post.title }}
          </h3>
        </div>

        <div class="card-body card-body-cascade">
          <p>Content:</p>
          <p>{{ post.content }}</p>
          <p>Categories:</p>
          <ul class="list-group list-group-horizontal">
            <li class="list-group-item border-0" v-for="(cat, i) in post.categories" :key="i">{{ cat }}</li>
          </ul>
          <p>Author: {{ post.author }}</p>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['posts']
}
</script>

<style>

</style>