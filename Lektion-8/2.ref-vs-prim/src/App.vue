<template>
  <div id="app">
    <navbar :title="title" v-on:changeTitle="change($event)" />
    <div class="container">
      <!-- <users :users="users" @changeUser="changeUser" /> -->
      <users :users="users" />
      <users2 :users="users" />
    </div>
    <app-footer :title="title" />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import AppFooter from './components/Footer'
import Users from './components/Users'
import Users2 from './components/Users2'

export default {
  name: 'App',
  components: {
    Navbar,
    AppFooter,
    Users,
    Users2
  },
  data() {
    return {
      title: 'FRONTEND2021',
      users: [
        {id:1, name:'Joakim', age:34, email:'joakim@mail.com'},
        {id:2, name:'Jeanette', age:33, email:'jeanette@mail.com'},
        {id:3, name:'Hans', age:36, email:'hans@mail.com'},
        {id:4, name:'Liam', age:15, email:'liam@mail.com'}
      ]
    }
  },
  methods: {
    change(newTitle) {
      this.title = newTitle
    },
    // changeUser(newName) {
    //   this.users[0].name = newName
    // }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.container {
  width: 80%;
  margin: auto;
  min-height: 500px;
}
</style>
