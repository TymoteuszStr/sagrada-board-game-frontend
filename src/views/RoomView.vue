<script lang="ts" setup>
import LogoHeader from "@/components/LogoHeader/LogoHeader.vue";
import BoardsContainer from "@/components/Room/BoardsContainer.vue";
import PlayersList from "@/components/Room/PlayersList.vue";
import Chat from "@/components/Chat/Chat.vue";
import MainButton from "@/components/Shared/MainButton.vue";
import { useWebSocketIO } from "@/composables/webSocket/WebSocket";
import {
  USER_ENTER_ROOM,
  USER_LEAVE_ROOM,
  PLAYERS_LIST_IN_ROOM,
} from "@/models/webSocketEvents";
import { useUserStore } from "@/stores/UserStore";
import { onUnmounted, ref, onMounted, type Ref } from "vue";
import type { IUser } from "@/models/interfaces/userModel";

const props = defineProps<{ roomId: string }>();
const userStore = useUserStore();
const { socket } = useWebSocketIO();

const players: Ref<IUser[]> = ref([]);
function setPlayerList(playerList: IUser[]): void {
  if (!playerList) return;
  players.value = playerList.filter(({ id }) => id !== userStore.user?.id);
}

socket.on(PLAYERS_LIST_IN_ROOM, (playersInRoom: IUser[]) => {
  setPlayerList(playersInRoom);
});

onMounted(() => {
  socket.emit(USER_ENTER_ROOM, props.roomId, userStore.user?.id, setPlayerList);
});
onUnmounted(() => {
  socket.emit(USER_LEAVE_ROOM, props.roomId, userStore.user?.id);
});
</script>

<template>
  <div class="new-room-wrapper">
    <LogoHeader />
    <h2>The game is about to start!</h2>
    <BoardsContainer />
    <PlayersList :players="players" />
    <MainButton class="start-button" style="width: 300px"
      >START GAME</MainButton
    >
  </div>
  <Chat :socket="socket" :roomId="roomId" />
</template>

<style lang="scss" scoped>
.new-room-wrapper {
  @include flex-center;
  flex-direction: column;
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
.start-button {
  margin-top: 30px;

  padding: 20px 15px;
  max-width: 400px;
  width: 100% !important;
}
</style>
