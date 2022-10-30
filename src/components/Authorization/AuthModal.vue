<script lang="ts" setup>
import { ref } from "vue";
import AuthorizationForm from "./forms/AuthorizationForm.vue";
import RegisterForm from "./forms/RegisterForm.vue";

let formToggler = ref(true);
function toggleForm(toggler: boolean): void {
  formToggler.value = toggler;
}
</script>
<template>
  <div class="auth-modal">
    <AuthorizationForm v-if="formToggler" @showRegister="toggleForm(false)" />
    <RegisterForm v-else @showLogin="toggleForm(true)" />
  </div>
</template>

<style scoped lang="scss">
.auth-modal {
  position: fixed;
  bottom: 0px;
  left: 0;
  width: 100vw;
  height: 80%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 150px;
}
</style>
