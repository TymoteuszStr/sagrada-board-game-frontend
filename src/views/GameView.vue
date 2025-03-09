<script setup lang="ts">
import Board from "@/components/Game/Board/Board.vue";
import CardsDeck from "@/components/Game/Cards/CardsDeck.vue";
import DicesContainer from "@/components/Game/Dice/DicesContainer.vue";
import FavorTokens from "@/components/Game/FavorTokens/FavorTokens.vue";
import RoundsPanel from "@/components/Game/RoundsPanel/RoundsPanel.vue";
import { useWebSocketIO } from "@/composables/webSocket/WebSocket";
import { ColorEnum as CE } from "@/models/enums/colorEnum";

const { socket } = useWebSocketIO();
</script>
<template>
  <div class="gameGrid">
    <div class="area area-favor-tokens"><FavorTokens :tokenNr="5" /></div>
    <div class="area area1">
      <Board :userName="'Szymek'" :colorNr="3" :positionNr="2" />
    </div>
    <div class="area area-round-nr">
      <RoundsPanel />
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
  <DicesContainer
    :dices="[
      { id: 1, score: 1, color: CE.red },
      { id: 2, score: 1, color: CE.blue },
      { id: 3, score: 2, color: CE.green },
      { id: 4, score: 5, color: CE.blue },
      { id: 5, score: 3, color: CE.yellow },
      { id: 6, score: 6, color: CE.blue },
      { id: 7, score: 4, color: CE.blue },
      { id: 8, score: 2, color: CE.green },
      { id: 9, score: 5, color: CE.blue },
      { id: 10, score: 3, color: CE.yellow },
      { id: 11, score: 6, color: CE.blue },
    ]"
  />
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
  .area-favor-tokens {
    grid-column: 1 / 4;
    grid-row: 1 / span 3;
  }
  .area1 {
    grid-column: 4 / 10;
    grid-row: 1 / span 3;
  }
  .area-round-nr {
    grid-column: 10 / -1;
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

@media screen and (min-width: $min-desktop-width) {
  .gameGrid {
    .area4 {
      grid-row: 8 / span 2;
    }
    .area5 {
    }
  }
}
</style>
