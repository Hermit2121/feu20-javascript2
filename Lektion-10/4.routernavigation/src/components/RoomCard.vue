<template>
  <div class="col-12 col-md-6 col-lg-3">
    <router-link :to="'/booking/details/' + room.id">
      <div class="card border hover-shadow">
        <div class="card-body">
          {{ room.name }} 
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['room']
}
</script>

<style>

</style>