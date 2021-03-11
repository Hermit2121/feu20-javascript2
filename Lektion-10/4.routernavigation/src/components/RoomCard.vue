<template>
  <div class="col-12 col-md-6 col-lg-3">
    <div>
      <div class="card border">
        <div class="card-body">
          {{ room.name }} 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['room']
}
</script>

<style>

</style>