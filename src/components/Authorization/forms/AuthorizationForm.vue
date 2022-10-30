<script lang="ts" setup>
import { ref } from "vue";
import TextInput from "./elements/TextInput.vue";
import PasswordInput from "./elements/PasswordInput.vue";
import SubmitBtn from "./elements/SubmitBtn.vue";
import Text from "./elements/Text.vue";
import { useRouter } from "vue-router";
import { authorization } from "@/composables/authorization/login";
const login = ref("");
const password = ref("");
const router = useRouter();
let formError = ref(false);

async function handleSubmit(e: Event) {
  e.preventDefault();
  try {
    const resp = await authorization(login.value, password.value);
    console.log(resp);
    router.push("/home");
  } catch (err) {
    formError.value = true;
    setTimeout(() => {
      formError.value = false;
    }, 2000);
  }
}
</script>

<template>
  <form class="auth-form" @submit="handleSubmit">
    <TextInput v-model="login" :class="{ invalid: formError }" />
    <PasswordInput v-model="password" :class="{ invalid: formError }" />
    <Text v-if="formError" warning>Login or password is incorrect.</Text>
    <Text @click="$emit('showRegister')">Create an account</Text>
    <SubmitBtn>Log in</SubmitBtn>
  </form>
</template>
<style lang="scss" scoped>
.auth-form {
  display: flex;
  flex-direction: column;
  height: 460px;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
}

.invalid {
  animation-name: shakeX;
  animation-duration: 0.85s;
  border: 1px solid rgb(226, 73, 73);
}
</style>
