<template>
  <div class="border-bottom bg-white">
    <form class="py-5 container">
      
      <div class="row">

        <div class="col-8">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Add todo..">
            <button class="btn btn-info">ADD</button>
          </div>
        </div>
        <div class="col-4">
          <select class="form-control">
            <option value="">Show all</option>
            <option value="false">Show Uncompleted</option>
            <option value="true">Show Completed</option>
          </select>
        </div>

      </div>

    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>