import axios from 'axios'

export default {
  state: {
    posts: [],
    searchVal: ''
  },
  getters: {
    posts: state => state.posts,
    filteredPosts: state => {
      return state.posts.filter(post => post.title.toLowerCase().match(state.searchVal.toLowerCase()))
    },
    searchValue: state => state.searchVal
  },
  mutations: {
    SET_POSTS: (state, posts) => {
      state.posts = posts
    },
    SEARCH: (state, val) => {
      state.searchVal = val
    }
  },
  actions: {
    getPosts: async ({commit}) => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      commit('SET_POSTS', res.data)
    },
    search: ({commit}, val) => {
      commit('SEARCH', val)
    }
  }
}