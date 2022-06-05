<template>
  <!-- Write Comment -->
  <div>
    <div class="d-flex mb-3">
      <div class="">
        <!-- <img src="@/assets/img/rawanimage.png" width="45" height="45" /> -->

        <p class="text-center rounded-circle name-section p-1" v-if="userInfo.file==''">
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
      <div class="py-1 mx-2 mt-2 w-100">
        <form>
          <textarea
            class="form-control write-comment p-2"
            placeholder="Add a Comment ..."
            rows="1"
            v-model="newComment"
          ></textarea>
        </form>
      </div>
      <div class="align-self-center cursor mx-2" @click.prevent="CreateComment">
        <img src="@/assets/img/arrow.svg" width="25" height="25" />
      </div>
    </div>
  </div>

  <p>Most relevant</p>

  <div class="comments-section">
    <div v-for="comment in comments" :key="comment">
      <Comment :comment="comment" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

import Comment from "@/components/base/Comment.vue";
export default defineComponent({
  props: ["comments", "postId"],
  data() {
    return {
      newComment: "",
    };
  },
  computed: {
    ...mapGetters({
      userInfo: "Auth/userInfo",
    }),
  },
  components: { Comment },
  methods: {
    ...mapActions({
      Addcomments: "Group/Addcomments",
    }),
    async CreateComment() {
      await this.Addcomments({
        content: this.newComment,
        comments: this.comments,
        postId: this.postId,
        userInfo: this.userInfo,
      });
      this.newComment = "";
    },
  },
});
</script>
<style lang="scss" scoped>
@import "@/assets/sass/main";

.comments-section {
  max-height: 300px;
  overflow-y: auto;
}
.cursor {
  cursor: pointer;
}
.write-comment {
  border-radius: 15px;
}
.name-section {
  color: white;
  background-color: $color-button;
  width: 60px;
  height: 60px;
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
  word-break: break-all;
}
</style>
