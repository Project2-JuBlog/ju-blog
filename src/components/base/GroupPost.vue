<template>
  <div v-for="post in posts" :key="post.id">
    <Post :post="post" :savedpostd="savedpostd" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Post from "@/components/base/Post.vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  components: { Post },
  props: ["posts"],
  computed: {
    ...mapGetters({
      user: "Auth/userInfo",
      savedpostd: "Group/savedpost",
    }),
  },
  methods: {
    ...mapActions({
      getSaved: "Group/getSaved",
    }),
  },
  created() {
    setTimeout(async () => {
      console.log("s" + this.user.id);

      await this.getSaved(this.user.id);
    }, 800);
  },
});
</script>
