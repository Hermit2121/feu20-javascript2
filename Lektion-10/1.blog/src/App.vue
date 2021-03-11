<template>
  <div class="m-3 mt-5">
    <button class="btn" :class="{'btn-primary': createPost, 'btn-outline-primary': !createPost}" @click="component = 'CreatePost'">Create</button>
    <button class="btn" :class="{'btn-primary': viewPosts, 'btn-outline-primary': !viewPosts}" @click="component = 'ViewPosts'">View</button>
    <div class="border border-primary">
      <div class="container">
        <keep-alive>
          <component :is="component" @new-post="posts.push($event)" :posts="posts" />
        </keep-alive>
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
      component: 'CreatePost',
      createPost: true,
      viewPosts: false
    }
  },
  components: {
    CreatePost,
    ViewPosts
  },
  watch: {
    component: function() {
      if(this.component == 'CreatePost') {
        this.createPost = true
        this.viewPosts = false
      } else {
        this.createPost = false
        this.viewPosts = true
      }
    }
  }

}
</script>

<style>

</style>
