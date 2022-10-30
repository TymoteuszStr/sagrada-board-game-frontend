<script lang="ts" setup>
import { computed } from "vue";

const emit = defineEmits(["update:modelValue"]);
const props = defineProps<{ modelValue: string }>();
const password = computed({
  get: () => props.modelValue,
  set: (password: string) => emit("update:modelValue", password),
});
</script>

<template>
  <input
    class="passwordInput"
    v-model="password"
    type="password"
    placeholder="Password"
    name="password"
    minlength="6"
    maxlength="50"
    pattern=".*[0-9].*"
    required
  />
</template>

<style lang="scss" scoped>
.passwordInput {
  color: white;
  height: 50px;
  width: 260px;
  border-radius: 25px;
  background: #242b44;
}
</style>
