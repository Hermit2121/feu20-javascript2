<template>
  <div class="container mt-3 pt-5">
    <add-customer-form />
    <customer-list class="mt-5" />
  </div>
</template>

<script>
import AddCustomerForm from '../components/Customer/AddCustomerForm'
import CustomerList from '../components/Customer/CustomerList.vue'
export default {
  components: {
    AddCustomerForm,
    CustomerList
  }
}
</script>

<style>

</style>