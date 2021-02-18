<template>
  <div class="row row-cols-1 row-cols-md-3 g-4">

  <!-- <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div> -->

  <card title="HEJ" body="jasffpwe" v-bind:imgURL="imgOne" />
  <card title="Hej 2" body="1233234534564563" imgURL="/img/taylor-heery-mF-GTUeLofs-unsplash.jpg" />
  <card imgUrl="@/assets/img/wander-fleur-IPvpWEfDIPk-unsplash.jpg"/>
  
</div>
</template>

<script>
import Card from './Card.vue'
export default {
  data() {
    return {
      imgOne: require('@/assets/img/docusign-orcAyrmuLXw-unsplash.jpg')
    }
  },
  components: { Card },

}
</script>

<style>

</style>