<template>
  <div class="products">
    <aside>
      <div class="buttons">
        <button><i class="fas fa-th-large"></i></button>
        <button><i class="fas fa-list"></i></button>
      </div>
      <form>
        <div>
          <input type="text" placeholder="search...">
        </div>
      </form>
      <div>
        <a href="#">Filter</a>
      </div>
    </aside>
    <div class="content">
      <component :is="comp" />
    </div>
  </div>
</template>

<script>
import Grid from '../components/Products/Grid'
import List from '../components/Products/List'
export default {
  name: 'Products',
  components: {
    Grid,
    List
  },
  data() {
    return {
      comp: 'Grid'
    }
  }
}
</script>

<style>

</style>