<script lang="ts" setup>
import createRoom from "@/composables/api/rooms/createRoom";
import { useUserStore } from "@/stores/UserStore";
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import MainButton from "../Shared/MainButton.vue";

const { user } = useUserStore();
const router = useRouter();
const roomName = ref(`${user?.name}'s room`);
async function creatRoomHandle() {
  const name = roomName.value.substring(0, 40);
  try {
    const id = await createRoom(roomName.value);
    router.push(`/room/${id}`);
  } catch (e: unknown) {
    console.log(e);
  }
}
</script>

<template>
  <div class="container">
    <p>CREATE NEW GAME ROOM</p>
    <div class="input-wrapper">
      <label for="room-name">name:</label>
      <input type="text" id="room-name" v-model="roomName" maxlength="40" />
    </div>
    <MainButton @click="creatRoomHandle" class="button">
      <Icon icon="material-symbols:add" class="plus-icon" />
    </MainButton>

    <!-- <p>invite your folks and start the GAME!</p> -->
  </div>
</template>

<style lang="scss" scoped>
.container {
  @include flex-center;
  height: 270px;
  width: 350px;
  flex-direction: column;
  border: 1px solid rgba(106, 163, 215, 0.5);
  backdrop-filter: blur(100px);
  border-radius: 7px;
  justify-content: space-around;
  padding: 30px 45px;

  .input-wrapper {
    width: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 45px;
    input {
      background-color: rgba(106, 163, 215, 0.2);
      color: white;
      padding: 10px;
      width: 100%;
      border-radius: 3px;
    }
  }

  p {
    @include gradient-text-vue;
    text-align: center;
    font-size: 26px;

    &:last-child {
      @include gradient-text;
      font-size: 20px;
    }
  }
}
.plus-icon {
  background-color: transparent;
}
</style>
