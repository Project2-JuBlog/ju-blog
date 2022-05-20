<template>
  <section>
    <div class="mt-5 pt-5">
      <div class="d-flex justify-content-center my-4">
        <img src="@/assets/img/navbar-img.png" width="200" />
      </div>
      <h3 class="text-center">
        Now you can find better trainees for your company
      </h3>
      <div
        class="d-flex justify-content-center my-4"
        @click.prevent="this.openSearch = !this.openSearch"
      >
        <BaseButton small>Search</BaseButton>
      </div>
    </div>
  </section>
  <MDBModal
    id="exampleModal"
    labelledby="exampleModalLabel"
    v-model="openSearch"
    centered
  >
    <SearchModal @close="openSearch = false" />
  </MDBModal>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import SearchModal from "@/components/modal/SearchModal.vue";

export default defineComponent({
  data() {
    return {
      openSearch: false as boolean,
      search: "",
    };
  },
  components: {
    SearchModal,
  },
});
</script>
