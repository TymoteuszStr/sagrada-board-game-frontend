<template>
  <button type="button"><slot /></button>
</template>

<style lang="scss" scoped>
button {
  @include flex-center;
  background: linear-gradient(
    176.1deg,
    rgba(106, 163, 215, 0.8) -20.55%,
    rgba(91, 192, 113, 0.72) 146.54%
  );

  width: 100%;
  height: 35px;

  border-radius: 3px;
  color: #1b202c;
  font-size: 18px;
  outline: none;
  border: none;
}
</style>
