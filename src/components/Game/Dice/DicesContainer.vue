<script setup lang="ts">
import type { ColorEnum } from "@/models/enums/colorEnum";
import Dice from "./Dice.vue";

const props = defineProps<{
  dices: { id: number; score: number; color: ColorEnum }[];
}>();

function disactiveAllDices() {
  const dices = document.querySelectorAll(".dices-container .dice");
  dices.forEach((dice) => {
    dice.classList.remove("active-dice");
  });
}

function setActiveClickedElement(el: MouseEvent) {
  const target = el.currentTarget as HTMLElement | null; // Rzutowanie na HTMLElement
  if (target) {
    target.classList.toggle("active-dice");
  } else {
    console.error("Cliked element is null or not an HTMLElement");
  }
}

function diceClickHandler($event: MouseEvent) {
  disactiveAllDices();
  setActiveClickedElement($event);
}
</script>

<template>
  <div class="dices-container">
    <Dice
      v-for="dice in props.dices"
      :key="dice.id"
      :dice="dice"
      class="dice"
      @click="diceClickHandler"
    ></Dice>
  </div>
</template>

<style scoped lang="scss">
.dices-container {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 150px;
  width: 100%;
  height: 150px;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  flex-wrap: wrap;
}
</style>
