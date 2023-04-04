<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import { ref, type Ref } from "vue";
import { useVibrate } from "@vueuse/core";
import { NEW_MESSAGE } from "@/models/webSocketEvents";

const props = defineProps<{ socket: any; roomId: string }>();
const { vibrate } = useVibrate({ pattern: [100, 100] });
const messages: Ref<any> = ref([]);
const myMessage = ref("");
function submitHandler() {
  vibrate();
  sendMessage(myMessage.value.trim());
  myMessage.value = "";
}

props.socket.on(NEW_MESSAGE, (message: any) => {
  ``;
  messages.value.push(message);
});

function sendMessage(message: string) {
  console.log(props.socket, message);
  props.socket.emit(NEW_MESSAGE, message, props.roomId);
  ``;
}
</script>

<template>
  <form class="wrapper" @submit.prevent="submitHandler">
    <input
      type="text"
      placeholder="type your message..."
      class="inputMsg"
      v-model="myMessage"
    />
    <div class="messages-container">
      <p class="message" v-for="message in messages" :key="message.id">
        {{ message.text }}
      </p>
    </div>
    <button type="submit" class="submit-btn">
      <Icon class="send-icon" icon="material-symbols:send-rounded" />
    </button>
  </form>
</template>

<style lang="scss" scoped>
.wrapper {
  position: fixed;
  bottom: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;

  .messages-container {
    display: flex;
    order: 1;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.1);
    height: 0px;
    overflow: auto;
    backdrop-filter: blur(10px);
    pointer-events: none;
    justify-content: flex-end;

    .message {
      color: white;
    }
  }

  input:focus + .messages-container {
    height: calc(100vh - 60px);
    transition: all 0.5s ease-in-out;
  }

  input {
    order: 2;
    width: 100%;
    background-color: rgb(0, 0, 0);
    margin: 0;
    color: white;
    outline: none;
    padding: 20px 30px;
  }

  .submit-btn {
    position: absolute;
    display: flex;
    right: 20px;
    bottom: 15px;
    background-color: rgba(255, 255, 255, 0);
    border: none;

    .send-icon {
      color: $grey-color;
      width: 30px;
      height: 30px;
    }
  }
}
</style>
