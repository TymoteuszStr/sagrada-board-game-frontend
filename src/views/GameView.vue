<script setup lang="ts">
import { useWebSocketIO } from "@/composables/webSocket/WebSocket";
import BoardTemplate from "@/components/Game/Board/BoardTemplate.vue";

const { socket } = useWebSocketIO();
</script>
<template>
  <BoardTemplate :pattern="[]" />
</template>
<style scoped lang="scss"></style>
