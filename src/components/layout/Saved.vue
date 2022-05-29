<template>
  <div v-for="saved in savedpostd" :key="saved">
    <Post :post="saved" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Post from "@/components/base/Post.vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  components: { Post },
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
      await this.getSaved(this.user.id);
    }, 2000);
  },
});
</script>
