<template>
  <div class="container mt-5">
    <div class="card-deck">
      <display :name="name" :age="age" :email="email" />
      <update :name="name" :age="age" :email="email" @update-user="update" />
    </div>
    <div class="card-deck mt-5">
      <display2 :user="user" />
      <update2 :user="user" @update-user="update" />
    </div>
  </div>
</template>

<script>
import Display from './components/Display.vue'
import Update from './components/Update'
import Display2 from './components/Display2.vue'
import Update2 from './components/Update2'


export default {
  name: 'App',
  components: {
    Display,
    Update,
    Display2,
    Update2

  },
  data() {
    return {
      name: 'Joakim',
      age: '34',
      email: 'joakim.wahlstrom@mail.com',
      user: {
        name: 'Joakim',
        age: '34',
        email: 'joakim.wahlstrom@mail.com'
      }
    }
  },
  methods: {
    update(newUser) {
      this.name = newUser.name,
      this.age = newUser.age,
      this.email = newUser.email
    }
  }
}
</script>

<style>

</style>
