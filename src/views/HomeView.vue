<script setup lang="ts">
import logout from "@/composables/user/logout";
</script>

<template>
  <main>
    <button type="button" @click="logout">logout</button>
  </main>
</template>
