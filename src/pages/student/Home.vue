<template>
  <section>
    <Navigation />
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Navigation from "@/components/header/Navigation.vue";
export default defineComponent({
  components: { Navigation },
});
</script>
