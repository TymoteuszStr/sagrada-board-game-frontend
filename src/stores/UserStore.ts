import { ref, type Ref } from "vue";
import { defineStore } from "pinia";
import type IUser from "@/models/interfaces/userModel";

export const useUserStore = defineStore("counter", () => {
  const user: Ref<IUser | undefined> = ref(undefined);
  const isUserLogIn: Ref<boolean> = ref(false);

  return { user, isUserLogIn };
});
