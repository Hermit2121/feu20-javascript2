<template>
  <form class="row" @submit.prevent="onSubmit">
    <div class="col-10">
      <div class="form-outline border-bottom">
        <input type="text" id="cname" class="form-control form-control-lg" v-model="customerName" />
        <label class="form-label" for="cname">Enter Customer Name</label>
      </div>
    </div>
    <div class="col-auto">
      <button class="btn btn-primary">ADD CUSTOMER</button>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      customerName: ''
    }
  },
  methods: {
    ...mapActions(['addCustomer']),
    onSubmit() {
      this.addCustomer(this.customerName)
      this.customerName = ''
    }
  }
}
</script>

<style>

</style>