<script lang="ts" setup>
import { computed } from "vue";

const emit = defineEmits(["update:modelValue"]);
const props = defineProps<{ modelValue: string }>();
const text = computed({
  get: () => props.modelValue,
  set: (text: string) => emit("update:modelValue", text),
});
</script>

<template>
  <input
    class="textInput"
    v-model="text"
    type="text"
    placeholder="Login"
    name="login"
    minlength="6"
    maxlength="50"
    required
  />
</template>

<style lang="scss" scoped>
.textInput {
  color: white;
  height: 50px;
  width: 260px;
  border-radius: 25px;
  background: #242b44;
}
input:-webkit-autofill {
  -webkit-text-fill-color: white !important;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  box-shadow: 0 0 0 50px #242b44 inset !important;
}
</style>
