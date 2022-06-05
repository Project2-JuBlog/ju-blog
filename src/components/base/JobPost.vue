<template>
  <BaseCard2 role="button" @click.prevent="isJob = true">
    <div class="d-flex mb-3">
      <div class="mx-2">
        <!-- <img src="@/assets/img/rawanimage.png" width="55" height="55" /> -->
        <p
          class="text-center rounded-circle name-section p-1"
          v-if="userInfo.file == ''"
        >
          {{ userInfo.firstName.charAt(0) }}
        </p>
        <img
          v-else
          :src="userInfo.file"
          class="rounded-circle img-profile"
          width="60"
          height="60"
        />
      </div>
      <div class="py-1 w-100 align-items-center mt-3">
        <div class="form-control rounded-pill py-2 px-3">Add Post ....</div>
      </div>
    </div>
    <div class="d-flex justify-content-between">
      <div></div>
      <div>
        <button class="btns-save rounded-pill" @click.prevent="createPost()">
          Hiring Now
        </button>
      </div>
    </div>
  </BaseCard2>

  <MDBModal
    id="exampleModal"
    tabindex="-1"
    labelledby="exampleModalLabel"
    v-model="isJob"
    centered
  >
    <AddJob @close="isJob = false" />
  </MDBModal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

import CreatePost from "@/components/base/CreatePost.vue";
import AddJob from "@/components/modal/AddJob.vue";
export default defineComponent({
  data() {
    return { isJob: false };
  },
  components: {
    CreatePost,
    AddJob,
  },
  computed: {
    ...mapGetters({
      userInfo: "Auth/userInfo",
    }),
  },
});
</script>
<style lang="scss" scoped>
@import "@/assets/sass/main";
.btns-save {
  background-color: $color-button;
  color: $color-white;
  width: 100px;
  height: 30px;
  border: 0px;
}
.name-section {
  color: white;
  background-color: $color-button;
  width: 65px;
  height: 65px;
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
  word-break: break-all;
}
</style>
