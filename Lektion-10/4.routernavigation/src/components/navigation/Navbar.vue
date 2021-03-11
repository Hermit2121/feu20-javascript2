<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-info">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">Meetingroom</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">

        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/booking">Booking</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/about">About</router-link>
        </li>

      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>

</style>