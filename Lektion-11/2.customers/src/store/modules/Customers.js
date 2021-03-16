export default {
  state: {
    customers: [
      { name: 'Customer 1', active: true },
      { name: 'Customer 2', active: false },
      { name: 'Customer 3', active: true },
    ]
  },
  getters: {
    customers: state => state.customers
  },
  mutations: {
    ADD_CUSTOMER: (state, cusName) => {
      state.customers.push({ name: cusName, active: true })
    },
    REMOVE_CUSTOMER: (state, customer) => {
      state.customers.splice(state.customers.indexOf(customer), 1)
    },
    TOGGLE_ACTIVE_STATE: (state, customer) => {
      customer.active = !customer.active
    }
  },
  actions: {
    addCustomer: ({commit}, cusName) => {
      commit('ADD_CUSTOMER', cusName)
    },
    removeCustomer: ({commit}, customer) => {
      commit('REMOVE_CUSTOMER', customer)
    },
    toggleActive: ({commit}, customer) => {
      commit('TOGGLE_ACTIVE_STATE', customer)
    }
  }

}