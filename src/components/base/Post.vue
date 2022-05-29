<template>
  <BaseCard2 v-if="post">
    <div class="post">
      <!-- Post Header -->
      <div class="d-flex justify-content-between">
        <div
          class="d-flex gap-2 justify-content-center align-items-center align-self-center"
        >
          <div>
            <!-- <img
              :src="require('@/assets/img/' + userImage)"
              width="40"
              height="40"
            /> -->
          </div>
          <div class="name-post">
            <router-link :to="{ name: 'Profile' }">
              <p class="p-0 m-0 fw-bold">
                {{ post.user.fname + " " + post.user.lname }}
              </p>
            </router-link>
            <p class="p-0 m-0">
              <span class="post-group-name me-2">{{ post.user.status }}</span>
              <span class="post-date"
                >{{ moment(post.createdAt).format("DD-MM-YYYY") }}
              </span>
            </p>
          </div>
        </div>
        <div class="dropdown" v-if="post.user.id == user.id">
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
      <div class="post-body mt-4 px-3">
        <p>
          {{ post.content }}
        </p>
      </div>

      <!-- Post Footer -->
      <div class="d-flex justify-content-between mt-3">
        <div role="button" @click.prevent="islikesOpen = true">
          {{ post.likes.length }} likes
        </div>
        <div role="button" @click.prevent="openComment = true">comment</div>
      </div>
      <div
        class="post-footer border-top pt-3 px-md-4 px-0 border-2 d-flex justify-content-between align-items-center align-self-center"
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
          <Comments :comments="comments" :postId="post.id" />
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
    v-model="islikesOpen"
    centered
  >
    <ListLike :likes="post.likes" @close="islikesOpen = false" />
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
import { mapActions, mapGetters } from "vuex";
import Comments from "@/components/base/Comments.vue";
import moment from "moment";
import db from "../../firebase";

import EditPost from "@/components/modal/EditPost.vue";
import ListLike from "@/components/modal/ListLike.vue";
import DeletePost from "@/components/modal/DeletePost.vue";
export default defineComponent({
  props: ["post"],
  data() {
    return {
      isLiked: false,
      openComment: false,
      isSaved: false,
      editPost: false,
      isDelete: false,
      idNo: 0 as any,
      comments: [],
      islikesOpen: false,
    };
  },
  components: { EditPost, DeletePost, Comments, ListLike },
  methods: {
    ...mapActions({
      savedpost: "Group/savedpost",
      getSaved: "Group/getSaved",
      Removesavedpost: "Group/Removesavedpost",
      likePostm: "Group/likePost",
      removelikePost: "Group/removelikePost",
    }),

    LikePost() {
      console.log(this.group);
      console.log(this.group.posts);
      console.log(this.post.id);
      console.log(this.user);

      if (this.isLiked == false) {
        this.likePostm({
          groupId: this.group.id,
          posts: this.group.posts,
          postId: this.post.id,
          user: this.user,
        });
      } else {
        this.removelikePost({
          groupId: this.group.id,
          posts: this.group.posts,
          postId: this.post.id,
          user: this.user,
        });
      }
      this.isLiked = !this.isLiked;
    },
    async commentPost() {
      await db
        .collection("comments")
        .doc(this.post.id)
        .get()
        .then((snapshot: any) => {
          const document: any = snapshot.data()?.comment;
          console.log(document);
          this.comments = document;
        });
      this.openComment = !this.openComment;
    },
    SavedPost() {
      console.log(this.isSaved);
      if (this.isSaved == false) {
        console.log("Addd");

        this.savedpost({
          post: this.post,
          savedpost: this.savedpostd,
          user: this.user,
        });
      } else {
        console.log("remove");

        this.Removesavedpost({
          post: this.post,
          savedpost: this.savedpostd,
          user: this.user,
        });
      }
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
      user: "Auth/userInfo",
      savedpostd: "Group/savedpost",
      group: "Group/group",
    }),
    userData(): any {
      return this.user;
    },
    userImage(): any {
      return this.user.image;
    },
    id(): any {
      this.idNo = this.$route.params.id;
      return this.idNo;
    },
  },
  created() {
    this.idNo = this.$route.params.id;
    console.log(this.savedpostd);
    setTimeout(async () => {
      this.savedpostd?.map((item: any) => {
        if (item.id == this.post.id) {
          console.log("d");
          this.isSaved = true;
        }
      });

      this.post?.likes?.map((item: any) => {
        if (item.id == this.user.id) {
          this.isLiked = true;
        }
      });
    }, 800);
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
.name-post {
  a {
    text-decoration: none;
    color: $color-black;
  }
}
</style>
