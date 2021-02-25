<template>
<!-- Material form register -->
<div class="card">

    <h5 class="card-header blue-gradient white-text text-center py-4">
        <strong>Sign up</strong>
    </h5>

    <!--Card content-->
    <div class="card-body px-lg-5 pt-0">

        <!-- Form -->
        <form class="text-center" style="color: #757575;" action="#!" @submit.prevent="update">

            <div class="form-row">
                <div class="col">
                    <!-- First name -->
                    <div class="md-form">
                        <input type="text" id="name" class="form-control" v-model="newName">
                        <label for="name">Name</label>
                    </div>
                </div>
                <div class="col">
                    <!-- Age -->
                    <div class="md-form">
                        <input type="number" id="age" class="form-control" v-model="newAge">
                        <label for="age">Age</label>
                    </div>
                </div>
            </div>

            <!-- E-mail -->
            <div class="md-form mt-0">
                <input type="email" id="email" class="form-control" v-model="newEmail">
                <label for="email">E-mail</label>
            </div>

            <!-- Sign up button -->
            <button class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Sign in</button>

        </form>
        <!-- Form -->
    </div>
</div>
<!-- Material form register -->
</template>

<script>
export default {
  props: ['name', 'age', 'email'],
  data() {
    return {
      newName: this.name,
      newAge: this.age,
      newEmail: this.email
    }
  },
  methods: {
    update() {
      let user = {
        name: this.newName,
        age: this.newAge,
        email: this.newEmail
      }
      this.$emit('update-user', user)
    }
  }
}
</script>

<style>

</style>