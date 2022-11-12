<script lang="ts" setup>
import AuthContainer from "@/components/Authorization/AuthContainer.vue";
import LogoHeader from "@/components/Shared/LogoHeader.vue";
</script>
<template>
  <div class="wrapper">
    <LogoHeader class="logo" />
    <AuthContainer />
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  @include table-center;
  height: 100vh;
}
.logo {
  position: fixed;
  top: 25px;
}
</style>
