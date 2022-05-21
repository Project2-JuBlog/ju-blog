<template>
  <router-view> </router-view>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { mapActions } from "vuex";

export default defineComponent({
  methods: {
    ...mapActions({
      trylogin: "Auth/tryLogin",
    }),
  },
  created() {
    this.trylogin();
  },
});
</script>
<style lang="scss">
@import "~@/assets/sass/main";
@import "@/assets/sass/main.scss";
</style>
