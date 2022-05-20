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
    {
      path: "home-company",
      name: "HomeCompany",
      component: () =>
        import("@/components/layout/HomeCompany.vue"),
    },
    {
      path: "search/:searchQuery",
      name: "searchPage",
      component: () =>
        import("@/components/layout/SearchResult.vue"),
    },

    ]
  }, {
    path: "/group",
    name: "group",
    component: () => import("@/pages/group/Group.vue"),

    children: [
      {
        path: ":id",
        name: "general",
        component: () => import("@/pages/group/GroupHome.vue"),

      },
      {
        path: ":id/event/:Eventid",
        name: "eventPage",
        component: () => import('@/components/layout/EventPage.vue'),

      }
    ]
  }


];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
