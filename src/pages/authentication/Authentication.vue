<template>
  <section class="row">
    <div class="col-12 col-md-6"><LeftSideAuth /></div>
    <div class="col-12 col-md-6">
      <router-view></router-view>
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
