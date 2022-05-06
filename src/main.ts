import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BaseButton from "@/components/ui/BaseButton.vue";
import BaseAuth from "@/components/ui/BaseAuth.vue";


createApp(App).component("BaseButton", BaseButton).component("BaseAuth", BaseAuth).use(store).use(router).mount("#app");
