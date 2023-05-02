<script setup lang="ts">
const romanNumbersEntities = [
  "&#x2160;",
  "&#x2161;",
  "&#x2162;",
  "&#x2163;",
  "&#x2164;",
  "&#x2165;",
  "&#x2166;",
  "&#x2167;",
  "&#x2168;",
  "&#x2169;",
];
</script>

<template>
  <div class="container">
    <div
      v-for="romanNr in romanNumbersEntities"
      :key="romanNr"
      class="roman-nr"
      v-html="romanNr"
    ></div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: 6px;
  .roman-nr {
    @include flex-center;
    width: 30px;
    height: 30px;
    padding: 2px;
    border: 1.5px solid #bbbbbb;
    box-shadow: 0px 0px 1px 1px rgba(255, 255, 255, 0.3),
      inset 0px 0px 1px 1px rgba(241, 230, 230, 0.35);
    border-radius: 4px;
    font-size: 12px;
  }
}
</style>
