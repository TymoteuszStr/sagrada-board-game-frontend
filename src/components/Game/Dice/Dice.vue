<script setup lang="ts">
import { ValuesColorEnum, type ColorEnum } from "@/models/enums/colorEnum";
import DiceTemplateField from "./DiceTemplateField.vue";
function getRandomNr(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
const props = defineProps<{
  dice: { id: number; score: number; color: ColorEnum };
}>();
</script>

<template>
  <div class="dice">
    <DiceTemplateField
      class="dice"
      :score="props.dice.score"
      :style="`background:${
        ValuesColorEnum[props.dice.color]
      }; transform: rotate(${getRandomNr(0, 360)}deg)`"
      is-main-user
    />
  </div>
</template>

<style scoped lang="scss">
.dice {
  width: 35px;
  height: 35px;
  margin: 10px;
  border-radius: 3px;
  transition: all 0.3s ease;
}
.active-dice {
  transform: scale(2);
  z-index: 1;
}
</style>
