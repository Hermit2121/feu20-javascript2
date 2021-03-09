<template>
  <div>
    <button class="btn btn-sm rounded-0 me-1" :class="loginClasses" @click="change('Login')">Login</button>
    <button class="btn btn-sm rounded-0" :class="registerClasses" @click="change('Signup')">Register</button>
    <keep-alive>
      <component :is="comp" />
    </keep-alive>
  </div>
</template>

<script>
import Login from './Login'
import Signup from './Signup'

export default {
  components: {
    Login,
    Signup
  },
  data() {
    return {
      comp: 'Login',
      login: true,
      register: false
    }
  },
  methods: {
    change(val) {
      this.comp = val
      if(val === 'Login') {
        this.login = true
        this.register = false
      } else {
        this.login = false
        this.register = true
      }
    }
  },
  computed: {
    loginClasses() {
      return {
        'btn-primary': this.login,
        'btn-outline-primary': !this.login
      }
    },
    registerClasses() {
      return {
        'btn-info': this.register,
        'btn-outline-info': !this.register
      }
    }
  }
}
</script>

<style scoped>
  .btn {
    margin-bottom: -1px ;
    box-shadow: none;
  }
</style>