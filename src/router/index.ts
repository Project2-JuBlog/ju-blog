import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    redirect: "/index"
  },
  {
    path: "/index",
    name: "Authentication",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("@/pages/authentication/Authentication.vue"),
    children: [
      {
        path: "",
        name: "login",
        component: () => import("@/components/authentication/RightSideAuth.vue"),

      },
      {
        path: "sign-up",
        name: "signup",
        component: () => import("@/components/authentication/SignUpAuth.vue"),
      },
      {
        path: "sign-up/Student",
        name: "signUpStudent",
        component: () => import("@/components/authentication/SignUpStudentAuth.vue"),
      },
      {
        path: "sign-up/company",
        name: "SignUpCompany",
        component: () => import("@/components/authentication/SignUpCompanyAuth.vue"),
      },
      {
        path: "sign-up/doctor",
        name: "SignUpDoctor",
        component: () => import("@/components/authentication/SignUpDoctorAuth.vue"),
      }
    ]
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
