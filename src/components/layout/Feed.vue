<template>
  <div v-if="isLoading" class="d-flex justify-content-center">
    <MDBSpinner color="success" style="width: 5rem; height: 5rem"></MDBSpinner>
  </div>
  <section v-else>
    <div v-for="post in groupPost" :key="post">
      <Post :post="post" />
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Post from "@/components/base/Post.vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  components: { Post },
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    ...mapGetters({
      user: "Auth/userInfo",
      groupPost: "Feed/groupPost",
    }),
  },
  methods: {
    ...mapActions({
      getGroupPost: "Feed/getGroupPost",
    }),
  },
  async created() {
    this.isLoading = true;
    const id = this.$route.params.id;
    setTimeout(async () => {
      this.isLoading = true;

      await this.getGroupPost(this.user);
      this.isLoading = false;
    }, 800);
  },
});
</script>
