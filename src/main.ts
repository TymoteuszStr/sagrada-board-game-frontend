import { createApp } from "vue";
import { createPinia } from "pinia";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import App from "./App.vue";
import router from "./router";

import "./assets/styles/main.scss";
import setActiveUser from "./composables/user/setActiveUser";
import setDefaultAxiosConfig from "./composables/axios/setDefaultAxiosConfig";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(autoAnimatePlugin);

app.mount("#app");
setDefaultAxiosConfig();
await setActiveUser();
