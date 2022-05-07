<template>
  <Navigation />
  <div class="row g-0 py-5 my-5">
    <div class="col-12 col-md-3">
      <SideNav />
    </div>
    <div class="col-12 col-md-6">
      <section>thia is group no {{ id }}</section>

      <!-- <router-view></router-view> -->
    </div>
    <div class="col-12 col-md-3">live chat</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Navigation from "@/components/header/Navigation.vue";
import SideNav from "@/components/header/SideNav.vue";

export default defineComponent({
  components: { Navigation, SideNav },

  data() {
    return {
      idNo: "" as any,
    };
  },
  computed: {
    id(): any {
      this.idNo = this.$route.params.id;
      return this.idNo;
    },
  },
  //   created() {
  //     this.$watch(
  //       () => this.$route.query.id,
  //       () => {
  //         this.idNo = this.$route.query.id;
  //       }
  //     );
  //   },
});
</script>
