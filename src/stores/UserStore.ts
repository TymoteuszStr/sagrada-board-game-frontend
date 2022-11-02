import { ref, type Ref } from "vue";
import { defineStore } from "pinia";
import type IUser from "@/models/userModel";

export const useUserStore = defineStore("counter", () => {
  const user: Ref<IUser | undefined> = ref(undefined);
  const isUserLogged: Ref<boolean> = ref(false);

  return { user, isUserLogged };
});
