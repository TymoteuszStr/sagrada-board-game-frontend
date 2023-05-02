<script setup lang="ts">
import SingleField from "./SingleField.vue";
const props = defineProps<{ pattern: any; isMainUser: boolean }>();
</script>

<template>
  <div class="grid-container" :class="{ mainBoard: props.isMainUser }">
    <SingleField
      v-for="field in props.pattern"
      :key="field.id"
      :isMainUser="props.isMainUser"
      :field="field"
    />
  </div>
</template>

<style scoped lang="scss">
.grid-container {
  width: 43vw;
  max-width: 230px;

  aspect-ratio: 5 / 4;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 5%;
}

.mainBoard {
  width: 70vw;
  max-width: 400px;
}
@media screen and (min-width: $min-desktop-width) {
  .grid-container {
    width: 650px;
    max-width: 300px;
  }
  .mainBoard {
    width: 900px;
    max-width: 500px;
  }
}
</style>
