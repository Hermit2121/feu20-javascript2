<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">Navbar</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarTogglerDemo02"
      aria-controls="navbarTogglerDemo02"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/posts">Posts</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/customers">Customers</router-link>
        </li>
        
      </ul>
      <form class="d-flex input-group w-auto">
        <input
          type="search"
          class="form-control"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
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