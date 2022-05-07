<template>
  <section>
    <Navigation />
    <div class="row g-0 py-5 my-5">
      <div class="col-12 col-lg-6 col-xl-3">
        <SideNav />
      </div>
      <div class="col-12 col-lg-6">
        <router-view></router-view>
      </div>
      <div class="col-12 col-lg-6 col-xl-3">
        <section class="px-5 mx-4">
          <EventSide></EventSide>
          <ImportantLink></ImportantLink>
        </section>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Navigation from "@/components/header/Navigation.vue";
import SideNav from "@/components/header/SideNav.vue";
import ImportantLink from "@/components/header/ImportantLink.vue";
import EventSide from "@/components/header/EventSide.vue";
export default defineComponent({
  components: { Navigation, SideNav, ImportantLink, EventSide },
});
</script>
