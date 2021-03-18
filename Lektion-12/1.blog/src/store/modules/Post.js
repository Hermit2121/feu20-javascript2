import axios from 'axios'

export default {
  state: {
    post: null
  },
  getters: {
    post: state => state.post
  },
  mutations: {
    SET_POST: (state, post) => {
      state.post = post
    },
    CLEAR_POST: state => state.post = null
  },
  actions: {
    getPost: async ({commit}, id) => {

      const res = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
      // setTimeout(() => {
        commit('SET_POST', res.data)
      // }, 2000)
    },
    clearPost: ({commit}) => {
      commit('CLEAR_POST')
    }
  }
}