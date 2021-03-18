import Vue from 'vue'
import Vuex from 'vuex'
import posts from './modules/Posts'
import post from './modules/Post'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    posts,
    post
  }
})
