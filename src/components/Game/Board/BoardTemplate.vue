<script setup lang="ts">
import { ColorEnum as CE } from "@/models/enums/colorEnum";
import SingleField from "./SingleField.vue";
const props = defineProps<{ pattern: any }>();
enum FTE {
  empty,
  color,
  score,
}

const testPattern = [
  { id: 0, type: FTE.empty, dice: undefined },
  { id: 1, type: FTE.empty, dice: undefined },
  { id: 2, type: FTE.empty, dice: undefined },
  { id: 3, type: FTE.color, color: CE.red, dice: undefined },
  { id: 4, type: FTE.score, score: 5, dice: undefined },
  { id: 5, type: FTE.empty, dice: undefined },
  { id: 6, type: FTE.empty, dice: undefined },
  { id: 7, type: FTE.color, color: CE.purple, dice: undefined },
  { id: 8, type: FTE.score, score: 4, dice: undefined },
  { id: 9, type: FTE.color, color: CE.blue, dice: undefined },
  { id: 10, type: FTE.empty, dice: undefined },
  { id: 11, type: FTE.color, color: CE.blue, dice: undefined },
  { id: 12, type: FTE.score, score: 3, dice: undefined },
  { id: 13, type: FTE.color, color: CE.yellow, dice: undefined },
  { id: 14, type: FTE.score, score: 6, dice: undefined },
  { id: 15, type: FTE.color, color: CE.yellow, dice: undefined },
  { id: 16, type: FTE.score, score: 2, dice: undefined },
  { id: 17, type: FTE.color, color: CE.green, dice: undefined },
  { id: 18, type: FTE.score, score: 1, dice: undefined },
  { id: 19, type: FTE.color, color: CE.red, dice: undefined },
];
</script>

<template>
  <div class="grid-container">
    <SingleField v-for="field in testPattern" :key="field.id" :field="field" />
  </div>
</template>

<style scoped lang="scss">
.grid-container {
  min-width: 250px;
  min-height: 200px;
  aspect-ratio: 5 / 4;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 5%;
}
</style>
