<template>
  <!-- Card -->
<div class="card card-cascade">

  <!-- Card image -->
  <div class="view view-cascade gradient-card-header blue-gradient white-text py-4 text-center">

    <!-- Title -->
    <h2 class="card-header-title mb-3">{{ user.name }}</h2>
    <!-- Subtitle -->
    <p class="card-header-subtitle mb-0">Age: {{ user.age }}</p>

  </div>

  <!-- Card content -->
  <div class="card-body card-body-cascade text-center">

    <!-- Text -->
    <p class="card-text">Email: {{ user.email }}</p>

    <hr>

    <!-- Twitter -->
    <a class="px-2 fa-lg tw-ic"><i class="fab fa-twitter"> </i></a>
    <!-- Linkedin -->
    <a class="px-2 fa-lg li-ic"><i class="fab fa-linkedin-in"> </i></a>
    <!-- Facebook -->
    <a class="px-2 fa-lg fb-ic"><i class="fab fa-facebook-f"> </i></a>
    <!-- Email -->
    <a class="px-2 fa-lg email-ic"><i class="fas fa-envelope"> </i></a>

  </div>

</div>
<!-- Card -->
</template>

<script>
export default {
  props: ['user']
}
</script>

<style>

</style>