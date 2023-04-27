<script setup lang="ts">
import SingleFavorToken from "./SingleFavorToken.vue";

const props = defineProps<{ tokenNr: number }>();
</script>

<template>
  <div class="wrapper">
    <p>Your Favor Tokens:</p>
    <div class="tokens-container">
      <SingleFavorToken v-for="index in props.tokenNr" :key="index" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.tokens-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 20px 2px;
  align-items: center;
  justify-content: center;
}
p {
  text-align: center;
}
</style>
