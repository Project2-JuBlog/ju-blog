<template>
  <section>
    <div v-for="post in posts" :key="post"><Job :posts="post" :allPost="posts" /></div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Job from "./Job.vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  props: ["posts"],
  components: { Job },
});
</script>
