<script lang="ts" setup>
export interface IProps {
  warning?: boolean;
}
const props = withDefaults(defineProps<IProps>(), {
  warning: false,
});
</script>

<template>
  <p class="text" :class="{ warning: props.warning }">
    <slot />
  </p>
</template>

<style lang="scss" scoped>
.text {
  color: rgba(255, 255, 255, 0.5);
  margin: 10px;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
    transform: scale(1.06);
  }
}
.warning {
  color: rgb(226, 73, 73);
  text-decoration: none;

  &:hover {
    cursor: default;
    transform: scale(1);
  }
}
</style>
