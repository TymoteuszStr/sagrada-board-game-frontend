<template>
  <button class="button" type="submit">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  color: white;
  min-height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  margin-top: 90px;
  width: 150px;
  border-radius: 25px;
  font-weight: 600;
  font-size: 17px;
  letter-spacing: 1px;
}
</style>
