import { createApp } from "vue";
import { createPinia } from "pinia";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import { plugin, defaultConfig } from "@formkit/vue";

import App from "./App.vue";
import router from "./router";

import "./assets/styles/main.scss";
import "@formkit/themes/genesis";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(plugin, defaultConfig);
app.use(autoAnimatePlugin);

app.mount("#app");
