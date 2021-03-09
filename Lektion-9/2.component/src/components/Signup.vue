<template>
  <form class="text-center border border-info p-5">
    <p class="h4 mb-4">Sign up</p>
    <!-- 2 column grid layout with text inputs for the first and last names -->
    <div class="row mb-4">
      <div class="col">
       
          <input type="text" id="form3Example1" class="form-control" placeholder="First Name" />

      </div>
      <div class="col">

          <input type="text" id="form3Example2" class="form-control" placeholder="Last Name"/>

      </div>
    </div>

    <!-- Email input -->

      <input type="email" id="form3Example3" class="form-control mb-4" placeholder="Email" />


    <!-- Password input -->
    
      <input type="password" id="form3Example4" class="form-control mb-4" placeholder="password" />


    <!-- Checkbox -->
    <div class="form-check d-flex justify-content-center mb-4">
      <input
        class="form-check-input me-2"
        type="checkbox"
        value=""
        id="form2Example3"
        checked
      />
      <label class="form-check-label" for="form2Example3">
        Subscribe to our newsletter
      </label>
    </div>

    <!-- Submit button -->
    <button type="submit" class="btn btn-info btn-block mb-4">Sign up</button>

    <!-- Register buttons -->
    <div class="text-center">
      <p>or sign up with:</p>
      <button type="button" class="btn btn-info btn-floating mx-1">
        <i class="fab fa-facebook-f"></i>
      </button>

      <button type="button" class="btn btn-info btn-floating mx-1">
        <i class="fab fa-google"></i>
      </button>

      <button type="button" class="btn btn-info btn-floating mx-1">
        <i class="fab fa-twitter"></i>
      </button>

      <button type="button" class="btn btn-info btn-floating mx-1">
        <i class="fab fa-github"></i>
      </button>
    </div>
  </form>
</template>

<script>
export default {
  destroyed() {
    console.log('Signup destroyed')
  }
}
</script>

<style>

</style>