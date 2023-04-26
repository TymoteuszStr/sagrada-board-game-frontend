<script setup lang="ts">
import Board from "@/components/Game/Board/Board.vue";
import CardsDeck from "@/components/Game/Cards/CardsDeck.vue";
import { useWebSocketIO } from "@/composables/webSocket/WebSocket";

const { socket } = useWebSocketIO();
</script>
<template>
  <div class="gameGrid">
    <div class="area area1">
      <Board :userName="'Szymek'" :colorNr="3" :positionNr="2" />
    </div>
    <div class="area area2">
      <Board :userName="'Basia'" :colorNr="1" :positionNr="1" />
    </div>
    <div class="area area3">
      <Board :userName="'Doris'" :colorNr="0" :positionNr="3" />
    </div>
    <div class="area area4">
      <CardsDeck />
    </div>
    <div class="area area5">
      <Board :userName="'Tymek'" :colorNr="2" :positionNr="0" isMainUser />
    </div>
  </div>
</template>
<style scoped lang="scss">
.gameGrid {
  width: 100vw;
  height: 100vh;
  overflow: hidden !important;
  display: grid;
  grid-template-rows: repeat(12, 1fr);
  grid-template-columns: repeat(12, 1fr);
  &::-webkit-scrollbar {
    display: none;
  }
  .area {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .area1 {
    grid-column: 1 / -1;
    grid-row: 1 / span 3;
  }
  .area2 {
    grid-column: 1 / 7;
    grid-row: 4 / span 3;
  }
  .area3 {
    grid-column: 7/ -1;
    grid-row: 4 / span 3;
  }
  .area4 {
    grid-column: 1/ -1;
    grid-row: 7 / span 2;
  }
  .area5 {
    grid-column: 1/ -1;
    grid-row: 9 / -1;
    align-items: flex-end;
  }
}
</style>
