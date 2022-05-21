import axios from "axios";
// import store from "@/store";
// import { computed } from "vue";

const axiosInstance = axios.create({
  //  baseURL: "https://development.himam.com/api/",
  baseURL: "https://jublog-e753d-default-rtdb.asia-southeast1.firebasedatabase.app/",
  //"http://158.101.229.40:3000/api/",
});
// const accessToken = computed(() => {
//   return store.getters["auth/accessToken"];
// });
// axiosInstance.interceptors.request.use(
//   (config) => {
//     if (!config) {
//       config = {};
//     }

//     if (!config.headers) {
//       config.headers = {};
//     }

//     config.headers["Authorization"] = `Bearer ${accessToken.value}`;

//     return config;
//   },

//   (error) => {
//     return Promise.reject(error);
//   }
// );

// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },

//   async (error) => {
//     const {
//       response: { status },
//     } = error;

//     if (status === 401) {
//       await store.dispatch("auth/removeAuthentication");
//     }

//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
