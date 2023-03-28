<script setup lang="ts">
import DiceTemplateField from "./DiceTemplateField.vue";
import { ValuesColorEnum } from "@/models/enums/colorEnum";
const props = defineProps<{ field: any }>();
</script>

<template>
  <div class="field">
    <div
      v-if="field.type === 1"
      class="colorField"
      :style="`background-color:${ValuesColorEnum[props.field.color]}`"
    ></div>
    <DiceTemplateField v-if="field.type === 2" :score="field.score" />
  </div>
</template>

<style scoped lang="scss">
.field {
  border: 1px solid white;
  overflow: hidden;
}
.colorField {
  height: 100%;
}
</style>
