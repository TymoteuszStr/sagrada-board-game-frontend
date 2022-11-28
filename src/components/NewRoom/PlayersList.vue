<script lang="ts" setup>
import { Icon } from "@iconify/vue";

// const { users } = defineProps<any>();

//temporary
const users = [
  { name: "Tymek", id: 0, picture: "" },
  { name: "Basia", id: 1 },
  { name: "Olio", id: 2 },
  { name: "Olio", id: 3 },
  { name: "Olio", id: 4 },
  { name: "Olio", id: 5 },
  { name: "Olio", id: 6 },
];
</script>

<template>
  <fieldset class="wrapper">
    <legend>Players in room</legend>
    <div v-for="user in users" :key="user.id" class="user">
      <img class="picture" v-if="user?.picture" alt="msg-icon" />
      <Icon class="picture" icon="ph:user-circle-fill" />
      <p class="name">{{ user.name }}</p>
    </div>
  </fieldset>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
  padding: 20px 15px;
  border-color: rgba(255, 255, 255, 0.2);
  max-width: 400px;
  min-width: 200px;
  max-height: 170px;
  overflow-y: auto;

  legend {
    color: rgba(255, 255, 255, 0.8);
  }

  .user {
    display: flex;
    align-items: center;
    font-size: 18px;
    min-height: 35px;

    .name {
      color: whitesmoke;
      letter-spacing: 1px;
    }
    .picture {
      margin-right: 8px;
      font-size: 25px;
    }
  }
}
</style>
