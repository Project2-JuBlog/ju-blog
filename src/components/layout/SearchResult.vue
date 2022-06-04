<template>
  <div class="col-12 g-0">
    <p class="rounded-pill tags col-2 text-center my-3">{{ searchQ }}</p>
    <div v-if="isLoading" class="d-flex justify-content-center">
      <MDBSpinner
        color="success"
        style="width: 5rem; height: 5rem"
      ></MDBSpinner>
    </div>
    <div v-else class="g-0">
      <div v-if="searchResult.length > 0" class="row">
        <div
          v-for="result in searchResult"
          :key="result.id"
          class="col-12 col-md-6 g-0 p-0 m-0"
        >
          <ProfileCard :user="result" />
        </div>
      </div>
      <div v-else>There is no one with these Skills</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import ProfileCard from "./ProfileCard.vue";
export default defineComponent({
  data() {
    return {
      isLoading: false,
    };
  },
  components: { ProfileCard },
  computed: {
    ...mapGetters({
      searchResult: "Search/searchResult",
    }),
    searchQ(): any {
      return this.$route.params.searchQuery;
    },
  },

  methods: {
    ...mapActions({ getSearchResult: "Search/getSearchResult" }),
  },
  async created() {
    this.isLoading = true;

    await this.getSearchResult(this.searchQ);
    this.isLoading = false;
  },
});
</script>

<style lang="scss">
@import "@/assets/sass/main";

.tags {
  background-color: white;
  color: $color-button;
  border: 1px solid $color-button;
  margin-inline: 5px;
  padding-inline: 20px;
  padding-block: 7px;
  margin-block: 5px;
}
</style>
