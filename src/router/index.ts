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

    component: () =>
      import("@/pages/authentication/Authentication.vue"),
    children: [
      {
        path: "",
        name: "rightnav",
        component: () => import("@/components/authentication/RightSideAuth.vue"),

      },
      {
        path: "login",
        name: "loginpage",
        component: () => import("@/components/authentication/LoginAuth.vue"),

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
  {
    path: "/home",
    name: "Home",
    redirect: "/home/feed",
    component: () =>
      import("@/pages/student/Home.vue"),
    children: [{
      path: "feed",
      name: "Feed",
      component: () =>
        import("@/components/layout/Feed.vue"),
    },
    {
      path: "friends",
      name: "Friends",
      component: () =>
        import("@/components/layout/Friends.vue"),
    },
    {
      path: "events",
      name: "Events",
      component: () =>
        import("@/components/layout/Events.vue"),
    },
    {
      path: "saved",
      name: "Saved",
      component: () =>
        import("@/components/layout/Saved.vue"),
    },
    {
      path: "profile",
      name: "Profile",
      component: () =>
        import("@/components/layout/Profile.vue"),
    },
    {
      path: "private-chat",
      name: "PrivateChat",
      component: () =>
        import("@/components/layout/PrivateChat.vue"),
    },

    ]
  }, {
    path: "/group/:id",
    name: "group",
    component: () => import("@/pages/group/Group.vue")
  }


];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
