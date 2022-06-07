<template>
  <BaseCard2>
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
      <div class="py-1 w-100">
        <form>
          <textarea
            class="form-control write-comment p-2"
            placeholder="Add a post ..."
            rows="3"
            v-model="content"
          ></textarea>
        </form>
      </div>
    </div>
    <div class="mt-3" v-if="imageSelect">
      <file-pond
        name="test"
        ref="pond"
        class="file-pond"
        class-name="my-pond"
        label-idle="Select Your Image"
        accepted-file-types="image/jpeg, image/png,image/gif,image/jpg"
        :allow-multiple="false"
        @change="handleFilePondInit"
      />
    </div>
    <div class="mt-3" v-if="fileSelect">
      <file-pond
        name="test"
        ref="pond"
        class="file-pond"
        class-name="my-pond"
        label-idle="Select Your Files"
        accepted-file-types="application/pdf,application/doc, .docx,"
        :allow-multiple="false"
        @change="handleFilePondInit"
      />
    </div>
    <div class="d-flex justify-content-between">
      <div class="d-flex gap-5">
        <div @click.prevent="imageSelect = true">
          <img
            role="button"
            src="@/assets/img/uploadeimg.svg"
            width="30"
            height="30"
            class="mx-2"
          />Photo
        </div>
        <div @click.prevent="fileSelect = true">
          <img
            src="@/assets/img/uploadeFile.svg"
            width="30"
            height="30"
            class="mx-2"
          />Attachment
        </div>
      </div>
      <div>
        <button
          class="btns-save rounded-pill"
          :disabled="content.length == 0"
          @click.prevent="createPost()"
        >
          <span v-if="loading"> <MDBSpinner /> </span>
          <span v-else>Post</span>
        </button>
      </div>
    </div>
  </BaseCard2>
</template>
<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import vueFilePond from "vue-filepond";

import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview
);

export default defineComponent({
  props: ["groupId", "postId"],
  data() {
    return {
      content: "",
      myFiles: [],
      imageSelect: false,
      fileSelect: false,
      isLoading: false,
    };
  },
  computed: {
    ...mapGetters({
      userInfo: "Auth/userInfo",
      loading: "Group/loading",
    }),
  },
  components: {
    FilePond,
  },
  methods: {
    ...mapActions({
      Addpost: "Group/Addpost",
    }),
    handleFilePondInit(event) {
      this.myFiles = event.target.files[0];
    },
    async createPost() {
      this.isLoading = true;
      let date = new Date();
      await this.Addpost({
        groupId: this.groupId,
        postId: this.postId,
        content: this.content,
        files: this.myFiles,
        createdAt: date,
        userInfo: this.userInfo,
      });
      // location.reload();
      this.content = "";
      this.myFiles = [];
      this.imageSelect = false;
      this.isLoading = false;
    },
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
  font-size: 3rem;
  background-color: $color-button;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
  word-break: break-all;
}
</style>
