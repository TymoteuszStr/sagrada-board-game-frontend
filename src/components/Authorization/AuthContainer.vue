<script lang="ts" setup>
import { ref } from "vue";
import AuthorizationForm from "./forms/AuthorizationForm.vue";
import RegisterForm from "./forms/RegisterForm.vue";

let formToggler = ref(true);
function toggleForm(toggler: boolean): void {
  formToggler.value = toggler;
}
const registerForm = ref();
</script>
<template>
  <div class="auth-container" v-auto-animate>
    <AuthorizationForm
      v-if="formToggler"
      @showRegister="toggleForm(false)"
      v-auto-animate
    />
    <RegisterForm v-else @showLogin="toggleForm(true)" ref="registerForm" />
  </div>
</template>

<style scoped lang="scss">
.auth-container {
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
