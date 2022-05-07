import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BaseButton from "@/components/ui/BaseButton.vue";
import BaseCard from "@/components/ui/BaseCard.vue";
import BaseAuth from "@/components/ui/BaseAuth.vue";


createApp(App).component("BaseButton", BaseButton).component("BaseCard", BaseCard).component("BaseAuth", BaseAuth).use(store).use(router).mount("#app");
