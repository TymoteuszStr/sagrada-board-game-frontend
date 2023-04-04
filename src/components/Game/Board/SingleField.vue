<script setup lang="ts">
import DiceTemplateField from "./DiceTemplateField.vue";
import { ValuesColorEnum } from "@/models/enums/colorEnum";
const props = defineProps<{ field: any }>();

function setActive(elem: any) {
  elem.target.classList.toggle("active");
}
</script>

<template>
  <div class="field" @click="(event) => setActive(event)">
    <div
      v-if="field.type === 1"
      class="colorField"
      :style="`background:${ValuesColorEnum[props.field.color]}`"
    ></div>
    <DiceTemplateField v-if="field.type === 2" :score="field.score" />
  </div>
</template>

<style scoped lang="scss">
.field {
  overflow: hidden;
  border-radius: 3px;
  background: rgba(127, 137, 163, 0.28);
}
.active {
  border: 1.5px solid #bbbbbb;
  box-shadow: 0px 0px 5px 3px rgba(255, 255, 255, 0.3),
    inset 0px 0px 5px 3px rgba(241, 230, 230, 0.35);
  border-radius: 4px;
}
.colorField {
  height: 100%;
}
</style>
