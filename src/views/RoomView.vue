<script lang="ts" setup>
import LogoHeader from "@/components/LogoHeader/LogoHeader.vue";
import PlayerContainer from "../components/Room/PlayerContainer.vue";
import BoardsContainer from "@/components/Room/BoardsContainer.vue";
import PlayersList from "@/components/Room/PlayersList.vue";
import Chat from "@/components/Chat/Chat.vue";
import MainButton from "@/components/Shared/MainButton.vue";
import { useWebSocketIO } from "@/composables/socket/";
import { ref, type Ref } from "vue";

const props = defineProps<{ id: string }>();
const { socket } = useWebSocketIO();
socket.emit("enterToRoom", props.id);

socket.on("playersInThisRoom", (players: any) => {
  console.log(players);
});

const messages: Ref<any[]> = ref([]);
socket.on("newMessage", (message: any) => {
  console.log("I got new message !", message);
  messages.value.push({ id: Math.random(), text: message });
  console.log(message);
});

function sendMessage(message: any) {
  console.log(message);
  socket.emit("sendMessage", message);
}
</script>

<template>
  <div class="new-room-wrapper">
    <LogoHeader />
    <h2>The game is about to start!</h2>
    <PlayerContainer />
    <BoardsContainer />
    <PlayersList :users="[]" />
    <MainButton class="startBtn">START GAME</MainButton>
  </div>
  <Chat :messages="messages" @sendMessage="sendMessage" />
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
