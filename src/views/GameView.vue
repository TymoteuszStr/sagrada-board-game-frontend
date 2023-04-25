<script setup lang="ts">
import Board from "@/components/Game/Board/Board.vue";
import CardsDeck from "@/components/Game/Cards/CardsDeck.vue";
import { useWebSocketIO } from "@/composables/webSocket/WebSocket";

const { socket } = useWebSocketIO();
</script>
<template>
  <Board :userName="'Tymek'" :colorNr="2" :positionNr="0" isMainUser />
  <Board :userName="'Basia'" :colorNr="1" :positionNr="1" />
  <Board :userName="'Wojti'" :colorNr="3" :positionNr="2" />
  <CardsDeck />
  <Board :userName="'Olga'" :colorNr="0" :positionNr="3" />
</template>
<style scoped lang="scss"></style>
