<script lang="ts" setup>
import getRooms from "@/composables/api/rooms/getRooms";
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const rooms = ref(await getRooms());
const router = useRouter();

function goToRoom(id: string) {
  router.push(`/room/${id}`);
}
async function refreshListOfRooms() {
  rooms.value = await getRooms();
  document.getElementById("refresh-icon")?.classList.toggle("rotate");
}
</script>

<template>
  <div class="wrapper">
    <div class="header-wrapper">
      <h2>Join the game</h2>
      <Icon
        icon="ic:sharp-refresh"
        alt="refres"
        id="refresh-icon"
        @click="refreshListOfRooms"
      />
    </div>
    <p v-if="rooms.length === 0">Sorry... there is no rooms at the moment</p>
    <div v-else class="rooms-container">
      <div v-for="room in rooms" :key="room?._id">
        <div class="room-item" @click="goToRoom(room._id)">
          <p>{{ room?.name }}</p>
          <p class="players-amount">{{ room.players.length }} / 4</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 350px;
  .header-wrapper {
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    width: inherit;
    #refresh-icon {
      color: #42b883;
      font-size: 26px;
      margin-left: 20px;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
    }
    .rotate {
      transform: rotate(360deg);
    }

    h2 {
      @include gradient-text-vue;
      letter-spacing: 1px;
      font-weight: 400;
      font-size: 44px;
      letter-spacing: 2px;
    }
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    height: 30px;
    font-size: 24px;
  }
  .rooms-container {
    width: inherit;
    min-height: 200px;
    max-height: 300px;
    overflow: auto;
    .room-item {
      margin: 30px 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: inherit;
      cursor: pointer;
      transition: transform 0.2s ease-in-out;
      &:hover {
        transform: scale(1.02);
      }

      .players-amount {
        font-size: 20px;
        width: 50px;
      }
    }
  }
}
</style>
