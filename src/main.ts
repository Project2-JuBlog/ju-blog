import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BaseButton from "@/components/ui/BaseButton.vue";
import BaseCard from "@/components/ui/BaseCard.vue";
import BaseCard2 from "@/components/ui/BaseCard2.vue";
import BaseAuth from "@/components/ui/BaseAuth.vue";
// import axiosInstance from "./axios";

import moment from "moment";
import '@/assets/sass/main.scss'
import './firebase';

import * as mdbVue from 'mdb-vue-ui-kit';
const app = createApp(App).component("BaseButton", BaseButton).component("BaseCard", BaseCard).component("BaseCard2", BaseCard2).component("BaseAuth", BaseAuth).use(store).use(router);
for (const component in mdbVue) {
    app.component(component, mdbVue[component]);
}

// app.config.globalProperties.axios = axiosInstance;


app.config.globalProperties.moment = moment;
app.mount("#app");


