<template>
  <section>
    <Post />
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Post from "@/components/base/Post.vue";

export default defineComponent({
  components: { Post },
});
</script>
