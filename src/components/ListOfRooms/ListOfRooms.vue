<script lang="ts" setup>
import getRooms from "@/composables/api/rooms/getRooms";
import { ref } from "vue";
const rooms = ref(await getRooms());
</script>

<template>
  <div class="wrapper">
    <h2>Join the game!</h2>
    <p v-if="rooms.length === 0">Sorry... there is no rooms at the moment</p>
    <div v-else class="rooms-container">
      <div v-for="room in rooms" :key="room?._id">
        <p>{{ room?.name }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  margin-top: 45px;

  h2 {
    @include gradient-text-vue;
    letter-spacing: 1px;
    font-weight: 400;
    font-size: 26px;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    margin: 30px 0;
  }
}
</style>
