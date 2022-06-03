<template>
  <div v-if="isLoading" class="d-flex justify-content-center">
    <MDBSpinner color="success" style="width: 5rem; height: 5rem"></MDBSpinner>
  </div>
  <div v-else>
  <div v-for="saved in savedpostd" :key="saved">
    <Post :post="saved" />
  </div>
  <div v-if="savedpostd.length == 0">
    <p>You Dont Have Any Saved Post</p>
  </div></div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Post from "@/components/base/Post.vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  components: { Post },
  data(){
    return{
      isLoading:false
    }
  },
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
  async created() {
        this.isLoading = true;

    let id = this.$route.params.id;
      await this.getSaved(id);
          this.isLoading = false;

  },
});
</script>
