<template>
  <form class="text-center border border-primary p-5 bg-white">
    <p class="h4 mb-4">Sign in</p>
    <!-- Email input -->
      <input type="email" id="form2Example1" class="form-control mb-4" placeholder="email" />
    <!-- Password input -->
      <input type="password" id="form2Example2" class="form-control mb-4" placeholder="password" />

    <!-- 2 column grid layout for inline styling -->
    <div class="row mb-4">
      <div class="col d-flex justify-content-center">
        <!-- Checkbox -->
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="form2Example3"
            checked
          />
          <label class="form-check-label" for="form2Example3"> Remember me </label>
        </div>
      </div>

      <div class="col">
        <!-- Simple link -->
        <a href="#!">Forgot password?</a>
      </div>
    </div>

    <!-- Submit button -->
    <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>

    <!-- Register buttons -->
    <div class="text-center">
      <p>Not a member? <a href="#!">Register</a></p>
      <p>or sign up with:</p>
      <button type="button" class="btn btn-primary btn-floating mx-1">
        <i class="fab fa-facebook-f"></i>
      </button>

      <button type="button" class="btn btn-primary btn-floating mx-1">
        <i class="fab fa-google"></i>
      </button>

      <button type="button" class="btn btn-primary btn-floating mx-1">
        <i class="fab fa-twitter"></i>
      </button>

      <button type="button" class="btn btn-primary btn-floating mx-1">
        <i class="fab fa-github"></i>
      </button>
    </div>
  </form>
</template>

<script>
export default {
  destroyed() {
    console.log('Login destroyed')
  }
}
</script>

<style>

</style>