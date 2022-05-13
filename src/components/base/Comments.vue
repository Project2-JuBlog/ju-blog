<template>
  <!-- Write Comment -->
  <div>
    <div class="row mb-3">
      <div class="col-1">
        <img src="@/assets/img/rawanimage.png" width="45" height="45" />
      </div>
      <div class="py-1 col-10">
        <form>
          <textarea
            class="form-control write-comment p-2"
            placeholder="Add a Comment ..."
            rows="1"
            v-model="newComment"
          ></textarea>
        </form>
      </div>
      <div
        class="col-1 align-self-center cursor mx-0"
        @click.prevent="CreateComment"
      >
        <img src="@/assets/img/arrow.svg" width="25" height="25" />
      </div>
    </div>
  </div>

  <p>Most relevant</p>

  <div class="comments-section">
    <div v-for="i in 4" :key="i">
      <Comment />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Comment from "@/components/base/Comment.vue";
export default defineComponent({
  data() {
    return {
      newComment: "",
    };
  },
  components: { Comment },
  methods: {
    CreateComment() {
      console.log(this.newComment);
      this.newComment = "";
    },
  },
});
</script>
<style lang="scss">
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
</style>
