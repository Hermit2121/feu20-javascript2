<template>
  <tr :class="activeClass">
    <th scope="row">{{ id }}</th>
    <td>{{ customer.name }}</td>
    <td>{{ isActiveText }}</td>
    <td class="d-flex justify-content-end">
      <button @click="toggleActive(customer)" class="btn btn-sm btn-primary me-2 btn-fixed-width">{{ activeStateText }}</button>
      <button @click="removeCustomer(customer)" class="btn btn-sm btn-danger btn-fixed-width"><i class="fas fa-trash me-2"></i> Delete</button>
    </td>
  </tr>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['customer', 'id'],
  methods: {
    ...mapActions(['removeCustomer', 'toggleActive'])
  },
  computed: {
    isActiveText() {
      if(this.customer.active)
        return 'Active'
      else
        return 'Inactive'
    },
    activeClass() {
      if(!this.customer.active) {
        return 'inactive'
      } else {
        return ''
      }
    },
    activeStateText() {
      if(this.customer.active)
        return 'Inactivate'
      else
        return 'Activate'
    }
  }
}
</script>

<style scoped>
  .inactive {
    color: #dcdcdc;
  }
  .btn-fixed-width {
    width: 110px;
  }
</style>