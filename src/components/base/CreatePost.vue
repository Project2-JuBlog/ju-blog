<template>
  <BaseCard2>
    <div class="d-flex mb-3">
      <div class="mx-2">
        <!-- <img src="@/assets/img/rawanimage.png" width="55" height="55" /> -->
        <p class="text-center rounded-circle name-section p-1">
          {{ userInfo.firstName }}
        </p>
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
    <div class="d-flex justify-content-between">
      <div class="d-flex gap-5">
        <div>
          <img
            src="@/assets/img/uploadeimg.svg"
            width="30"
            height="30"
            class="mx-2"
          />Photo
        </div>
        <div>
          <img
            src="@/assets/img/uploadeFile.svg"
            width="30"
            height="30"
            class="mx-2"
          />Attachment
        </div>
      </div>
      <div>
        <button class="btns-save rounded-pill" @click.prevent="createPost()">
          Post
        </button>
      </div>
    </div>
  </BaseCard2>
</template>
<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  props: ["groupId", "postId"],
  data() {
    return { content: "" };
  },
  computed: {
    ...mapGetters({
      userInfo: "Auth/userInfo",
    }),
  },
  methods: {
    ...mapActions({
      Addpost: "Group/Addpost",
    }),
    async createPost() {
      let date = new Date();

      await this.Addpost({
        groupId: this.groupId,
        postId: this.postId,
        content: this.content,
        createdAt: date,
        userInfo: this.userInfo,
      });
      this.content = "";
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
