<script setup lang="ts">
import { ref } from "vue";

const card: any = ref(null);
let showBackground = ref(false);
function openCard() {
  if (card.value === null) return;
  const isCardOpen = !Array(...card.value.classList).includes("previewCard");
  if (isCardOpen) {
    showBackground.value = true;
    card.value.classList.add("previewCard");
  }
}
function closeCard() {
  if (card.value === null) return;

  const isCardOpen = !Array(...card.value.classList).includes("previewCard");
  if (!isCardOpen) {
    showBackground.value = false;
    card.value.classList.remove("previewCard");
  }
}
</script>
<template>
  <div
    v-if="showBackground"
    class="card-background"
    @click.self="closeCard"
  ></div>
  <div class="card" @click.self="openCard" ref="card">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est quidem
    cupiditate molestiae libero eum omnis voluptates reiciendis ratione amet
  </div>
</template>

<style scoped lang="scss">
.card {
  transition: all 0.3s ease-out;
  position: absolute;
  width: calc(20vw - 3px);
  min-width: 60px;
  max-width: 90px;
  height: 110px;
  background: $board-color-1;
  border-radius: 7px;
  overflow: hidden;
  padding: 10px;
  font-size: 8px;
  box-shadow: 0px 0px 10px #2218262f;
}
.previewCard {
  position: fixed;
  max-width: unset;
  top: 50% !important;
  right: unset !important;
  left: 50% !important;
  transform: translate(-50%, -50%) scale(4);
  z-index: 100;
}
.card-background {
  position: fixed;
  top: 0 !important;
  left: 0 !important;
  backdrop-filter: blur(7px);
  width: 100vw;
  height: 100vh;
  z-index: 99;
}
</style>
