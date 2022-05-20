<template>
  <div v-for="i in 5" :key="i">
    <Post />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Post from "@/components/base/Post.vue";

export default defineComponent({
  components: { Post },
});
</script>
