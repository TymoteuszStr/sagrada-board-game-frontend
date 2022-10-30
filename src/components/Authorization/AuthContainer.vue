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
