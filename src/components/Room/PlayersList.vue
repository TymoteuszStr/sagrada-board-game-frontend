<script lang="ts" setup>
import type { IUser } from "@/models/interfaces/userModel";
import { Icon } from "@iconify/vue";
const props = defineProps<{ players: IUser[] }>();
</script>

<template>
  <fieldset class="wrapper">
    <legend>Players in room</legend>
    <div
      v-for="player in props.players"
      :key="player.id"
      class="user"
      @clic="$emit('playerCliked', player)"
    >
      <img class="picture" v-if="player?.picture" alt="msg-icon" />
      <Icon class="picture" icon="ph:user-circle-fill" />
      <p class="name">{{ player.name }}</p>
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
    cursor: pointer;
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
