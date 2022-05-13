<template>
  <BaseCard2>
    <div class="post">
      <!-- Post Header -->
      <div class="d-flex justify-content-between">
        <div
          class="d-flex gap-2 justify-content-center align-items-center align-self-center"
        >
          <div>
            <img
              :src="require('@/assets/img/' + userImage)"
              width="40"
              height="40"
            />
          </div>
          <div>
            <p class="p-0 m-0 fw-bold">{{ userData.name }}</p>
            <p class="p-0 m-0">
              <span class="post-group-name me-2">KASIT</span>
              <span class="post-date">20/5/2022</span>
            </p>
          </div>
        </div>
        <div class="dropdown">
          <div
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style="cursor: pointer"
          >
            <img
              class="post-dots"
              src="@/assets/img/dots.svg"
              width="25"
              height="8"
            />
          </div>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a class="dropdown-item" href="#" @click.prevent="deletsPost"
                >Delete</a
              >
            </li>
            <li>
              <a class="dropdown-item" href="#" @click.prevent="editPosts"
                >Edit</a
              >
            </li>
          </ul>
        </div>
      </div>

      <!-- Post Body -->
      <div class="post-body mt-4">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione,
          excepturi ipsam nulla aperiam enim minus natus voluptates nesciunt
          libero numquam incidunt consectetur harum magni similique explicabo
          quis quisquam autem maximLorem, ipsum dolor sit amet consectetur
          adipisicing elit. Ratione, excepturi ipsam nulla aperiam enim minus
          natus voluptates nesciunt libero numquam incidunt consectetur harum
          magni similique explicabo quis quisquam autem maxime.
        </p>
      </div>

      <!-- Post Footer -->
      <div
        class="post-footer border-top mt-5 pt-3 px-md-4 px-0 border-2 d-flex justify-content-between align-items-center align-self-center"
      >
        <div
          class="post-like gap-2 d-flex justify-content-center"
          @click.prevent="LikePost"
        >
          <div>
            <img v-if="!isLiked" src="@/assets/img/Likes.svg" />
            <img v-else src="@/assets/img/liked-post.svg" />
          </div>
          <span>Likes</span>
        </div>
        <div
          class="post-like gap-2 d-flex justify-content-center"
          @click.prevent="commentPost"
        >
          <img src="@/assets/img/comment.svg" />
          <span>Comments</span>
        </div>
        <div
          class="post-like gap-2 d-flex justify-content-center"
          @click.prevent="SavedPost"
        >
          <div>
            <img v-if="!isSaved" src="@/assets/img/saved-post.svg" />
            <img v-else src="@/assets/img/savedd.svg" />
          </div>
          <span>Saved</span>
        </div>
      </div>

      <!-- Post Comment -->
      <Transition name="slide">
        <div
          v-if="openComment"
          class="border-top mt-3 pt-3 px-md-4 px-0 border-2"
        >
          <Comments />
        </div>
      </Transition>
    </div>
  </BaseCard2>

  <MDBModal
    id="exampleModal"
    tabindex="-1"
    labelledby="exampleModalLabel"
    v-model="editPost"
    centered
  >
    <EditPost @close="editPost = false" />
  </MDBModal>
  <MDBModal
    id="exampleModal"
    tabindex="-1"
    labelledby="exampleModalLabel"
    v-model="isDelete"
    centered
    size="sm"
  >
    <DeletePost />
  </MDBModal>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import Comments from "@/components/base/Comments.vue";

import EditPost from "@/components/modal/EditPost.vue";
import DeletePost from "@/components/modal/DeletePost.vue";
export default defineComponent({
  data() {
    return {
      isLiked: false,
      openComment: false,
      isSaved: false,
      editPost: false,
      isDelete: false,
    };
  },
  components: { EditPost, DeletePost, Comments },
  methods: {
    LikePost() {
      this.isLiked = !this.isLiked;
    },
    commentPost() {
      this.openComment = !this.openComment;
    },
    SavedPost() {
      this.isSaved = !this.isSaved;
    },
    editPosts() {
      this.editPost = !this.editPost;
    },
    deletsPost() {
      this.isDelete = !this.isDelete;
    },
  },
  computed: {
    ...mapGetters({
      user: "Auth/user",
    }),
    userData(): any {
      return this.user;
    },
    userImage(): any {
      return this.user.image;
    },
  },
});
</script>
<style lang="scss">
@import "@/assets/sass/main.scss";
.post {
  &-group-name {
    color: $color-button;
  }
  &-like {
    cursor: pointer;
  }
}

.slide-enter-active {
  transition: all 0.4s ease-out;
}

.slide-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
