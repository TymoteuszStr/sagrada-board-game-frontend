<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{ score: number; isMainUser: boolean }>();

const dotArr: number[] = [];
if (props.score < 6 || props.score > 1)
  for (let i = 0; i < props.score; i++) dotArr.push(i);

let dotSize = computed(() => (props.isMainUser ? 6 : 3));
</script>

<template>
  <div class="dot-container" :data-score="props.score">
    <div class="dot-wrapper" v-for="dot in dotArr" :key="dot">
      <div class="dot"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dot-container {
  width: 100%;
  min-height: 100%;
  display: grid;
  padding: 10%;
}
.dot-wrapper {
  @include flex-center;
}

.dot {
  width: v-bind("`${dotSize}px`");
  height: v-bind("`${dotSize}px`");
  background-color: #f5f5f5b4;
  border-radius: 50%;
}
[data-score="1"] {
  grid-column: 1 /-1;
  grid-row: 1 /-1;
}

[data-score="2"] {
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  .dot-wrapper {
    grid-column: 1/-1;
    display: flex;

    .dot {
      margin: 0 20%;
    }
  }
  .dot-wrapper:nth-child(1) {
    justify-content: start;
  }
  .dot-wrapper:nth-child(2) {
    justify-content: end;
  }
}

[data-score="3"] {
  transform: rotate(-45deg);
}
[data-score="4"] {
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
}
[data-score="5"] {
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  .dot-wrapper:nth-child(3) {
    grid-column: 1/-1;
  }
}
[data-score="6"] {
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
}
</style>
