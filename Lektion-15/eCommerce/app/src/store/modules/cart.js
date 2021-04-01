// import axios from '@/axios'


const state = {
  shoppingCart: []
}
const getters = {
  shoppingCart: state => {
    return state.shoppingCart
  }
}
const mutations = {
  ADD_TO_CART: (state, item) => {
    state.shoppingCart.push(item)
  },
  INCREMENT_QUANTITY: (state, {product, quantity}) => {
    let item = state.shoppingCart.find(i => i.product._id === product._id)
    item.quantity += Number(quantity)
  },
  DELETE_PRODUCT_FROM_CART: (state, id) => {
    state.shoppingCart = state.shoppingCart.filter(item => item.product._id !== id)
  }

}
const actions = {
  addProductToCart: ({commit}, {product, quantity}) => {
    let exists = state.shoppingCart.find(item => item.product._id === product._id)
    if(exists) {
      commit('INCREMENT_QUANTITY', {product, quantity})
      return
    }
    commit('ADD_TO_CART', {product, quantity})
  },
  deleteProductFromCart: ({commit}, id) => {
    commit('DELETE_PRODUCT_FROM_CART', id)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}