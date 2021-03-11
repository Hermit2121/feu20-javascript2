<template>
  <div class="m-3 mt-5">
    <button class="btn btn-primary" @click="component = 'CreatePost'">Create</button>
    <button class="btn btn-primary" @click="component = 'ViewPosts'">View</button>
    <div class="border border-primary">
      <div class="container">
        <component :is="component" />
      </div>
    </div>
  </div>
</template>

<script>
import CreatePost from './components/CreatePost'
import ViewPosts from './components/ViewPosts'

export default {
  name: 'App',
  data() {
    return {
      posts: [],
      component: 'CreatePost'
    }
  },
  components: {
    CreatePost,
    ViewPosts
  }

}
</script>

<style>

</style>
