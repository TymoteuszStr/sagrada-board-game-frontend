<script lang="ts" setup>
import createRoom from "@/composables/api/rooms/createRoom";
import { useRouter } from "vue-router";
import MainButton from "../Shared/MainButton.vue";
import Plus from "../Shared/Plus.vue";
const router = useRouter();

async function creatRoomHandle() {
  try {
    const id = await createRoom("test");
    router.push(`/room/${id}`);
  } catch (e: unknown) {
    console.log(e);
  }
}
</script>

<template>
  <div class="container">
    <p>CREATE NEW GAME ROOM</p>
    <MainButton @click="creatRoomHandle">
      <Plus />
    </MainButton>
    <p>invite your folks and start the GAME!</p>
  </div>
</template>

<style lang="scss" scoped>
.container {
  @include flex-center;
  height: 160px;
  width: 350px;
  flex-direction: column;
  border: 1px solid rgba(106, 163, 215, 0.5);
  backdrop-filter: blur(100px);
  border-radius: 7px;
  justify-content: space-around;
  padding: 10px 45px;

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
</style>
