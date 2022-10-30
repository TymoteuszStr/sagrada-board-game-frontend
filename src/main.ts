import { createApp } from "vue";
import { createPinia } from "pinia";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import { URI } from "./config";
import axios from "axios";

import App from "./App.vue";
import router from "./router";

import "./assets/styles/main.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(autoAnimatePlugin);

app.mount("#app");

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.baseURL = URI;
