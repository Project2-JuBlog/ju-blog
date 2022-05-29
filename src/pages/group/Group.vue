<template>
  <Navigation />
  <div class="row g-0 py-5 my-5">
    <div class="col-12 col-md-3">
      <SideNav />
    </div>

    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import SideNav from "@/components/header/SideNav.vue";
import Navigation from "@/components/header/Navigation.vue";

export default defineComponent({
  components: { Navigation, SideNav },

});
</script>
