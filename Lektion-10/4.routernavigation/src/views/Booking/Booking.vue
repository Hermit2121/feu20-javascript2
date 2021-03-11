<template>
  <div class="container py-5">
    <div class="row">
      <room-card v-for="room in meetingRooms" :key="room.id" :room="room" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import RoomCard from '../../components/RoomCard'
export default {
  name: 'Booking',
  components: {
    RoomCard
  },
  data() {
    return {
      meetingRooms: []
    }
  },
  methods: {
    async getRooms() {
      const res = await axios.get('http://localhost:3000/meetingRooms')
      this.meetingRooms = res.data
    }
  },
  created() {
    this.getRooms()
  }
}
</script>

<style>

</style>