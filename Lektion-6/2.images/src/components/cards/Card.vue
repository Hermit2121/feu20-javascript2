<template>
  <div class="col">
    <div class="card h-100">
      <img :src="imgURL" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ body }}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'body', 'imgURL']
  // props: {
  //   title: {
  //     type: String,
  //     required: false,
  //     default: 'En standard text'
  //   },
  //   body: {
  //     type: String,
  //     required: false,
  //     default: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, placeat.'
  //   },
  //   imgURL: {
  //     type: String,
  //     required: false,
  //     default: '...'
  //   }
  // }
}
</script>

<style>

</style>