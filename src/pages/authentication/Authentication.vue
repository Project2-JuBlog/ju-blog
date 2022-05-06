<template>
  <section class="home-page">
    <div class="row g-0">
      <div class="col-12 col-md-6 g-0">
        <LeftSideAuth />
      </div>
      <div class="col-12 col-md-6 g-0">
        <router-view></router-view>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LeftSideAuth from "@/components/authentication/LeftSideAuth.vue";
export default defineComponent({
  components: { LeftSideAuth },
});
</script>
<style lang="scss">
@import "@/assets/sass/pages/authentication";
</style>
