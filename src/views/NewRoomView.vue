<script lang="ts" setup>
import LogoHeader from "@/components/LogoHeader/LogoHeader.vue";
import PlayerContainer from "../components/NewRoom/PlayerContainer.vue";
import BoardsContainer from "@/components/NewRoom/BoardsContainer.vue";
import PlayersList from "@/components/NewRoom/PlayersList.vue";
import Chat from "@/components/Chat/Chat.vue";
import MainButton from "@/components/Shared/MainButton.vue";
import { useWebSocketIO } from "@/composables/socket/";
const { socket } = useWebSocketIO();
console.log("sc", socket);
</script>

<template>
  <div class="new-room-wrapper">
    <LogoHeader />
    <h2>The game is about to start!</h2>
    <PlayerContainer />
    <BoardsContainer />
    <PlayersList />
    <MainButton class="startBtn">START GAME</MainButton>
  </div>
  <Chat />
</template>

<style lang="scss" scoped>
.new-room-wrapper {
  @include flex-center;
  flex-direction: column;
}

.startBtn {
  margin-top: 30px;
  cursor: pointer;
}

.disableBtn {
  pointer-events: none;
  cursor: initial;
}

h2 {
  @include gradient-text-vue;
  @include flex-center;
  font-size: 34px;
}
</style>
