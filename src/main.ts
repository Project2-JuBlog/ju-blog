import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BaseButton from "@/components/ui/BaseButton.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
createApp(App).component("BaseButton", BaseButton).use(store).use(router).mount("#app");
