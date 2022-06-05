<template>
  <BaseCard2 class="post-job">
    <div
      class="dropdown d-flex justify-content-end"
      v-if="posts?.user?.id == user?.id"
    >
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
      </ul>
    </div>
    <div
      class="name-post pt-0 mt-0 d-flex align-items-center gap-2 border-bottom pb-3"
    >
      <router-link :to="'/home/profile/' + posts?.user?.id">
        <p
          class="text-center rounded-circle name-section p-1 m-0"
          v-if="posts.user.file == ''"
        >
          {{ posts.user.fname.charAt(0) }}
        </p>
        <img
          v-else
          :src="posts.user.file"
          class="rounded-circle img-profile"
          width="60"
          height="60"
        />
      </router-link>
      <div>
        <div>
          <h3 class="post-job-title text-capitalize">{{ posts.user.fname }}</h3>
        </div>
        <div class="d-flex">
          <h5>{{ posts.job.title }} - {{ posts.job.companyName }}</h5>
        </div>
        <span class="post-date">
          {{ moment(posts?.createdAt).fromNow() }}
        </span>
      </div>
    </div>
    <div class="pt-3">
      <p class="my-3">
        {{ posts.job.description }}
      </p>
      <div>
        Skills:
        <p class="d-flex flex-wrap col-md-7 col-12">
          <span
            v-for="skill in posts.job.skills"
            :key="skill"
            class="rounded-pill tags"
            >{{ skill }}</span
          >
        </p>
      </div>
      <p class="mt-3">
        <span> {{ posts.job.location }}</span> -
        <span> {{ posts.job.type }}</span>
      </p>
      <div class="d-flex justify-content-end">
        <button
          @click.prevent="islikesOpen = true"
          v-if="user.id == posts.user.id"
          class="button-job-view"
        >
          View All Application
        </button>
        <button
          v-if="user.id !== posts.user.id && !isLiked"
          class="button-job"
          @click.prevent="applyJob(posts.groupId, posts.id)"
        >
          Apply
        </button>
        <button class="button-job-d" v-if="isLiked">Apllied</button>
      </div>
    </div>
  </BaseCard2>
  <MDBModal
    id="exampleModal"
    tabindex="-1"
    labelledby="exampleModalLabel"
    v-model="islikesOpen"
    centered
  >
    <ListLike
      :likes="posts.likes"
      title="People Who Applied"
      noList="No one Applied Your Job"
      @close="islikesOpen = false"
    />
  </MDBModal>
</template>
<script lang="ts">
import ListLike from "@/components/modal/ListLike.vue";

import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  props: ["posts", "allPost"],
  data() {
    return {
      like: false,
      islikesOpen: false,
    };
  },
  components: { ListLike },
  computed: {
    ...mapGetters({
      user: "Auth/userInfo",
    }),
    isLiked() {
      this.posts?.likes?.map((item: any) => {
        if (item.id == this.user.id) {
          this.like = true;
        }
      });
      return this.like;
    },
  },
  methods: {
    ...mapActions({ likePostm: "Group/likePost" }),
    async applyJob(groupId: any, postId: any) {
      await this.likePostm({
        groupId: groupId,
        posts: this.allPost,
        postId: postId,
        user: this.user,
      });
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/sass/main";
.post-job {
  &-title {
    color: $color-button;
  }
  .button-job,
  .button-job-view,
  .button-job-d {
    background-color: $color-button;
    color: white;
    border-radius: 10px;
    border: 0px;
    width: 120px;
    height: 30px;
  }
  .button-job-d {
    background-color: rgba($color-button, 0.6);
    cursor: auto;
  }
  .button-job-view {
    width: 140px;
  }
}
.post-date {
  font-size: 10px;
}
.name-section {
  color: white;
  background-color: $color-button;
  width: 65px;
  text-transform: capitalize;
  font-size: 3rem;
  height: 65px;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
  word-break: break-all;
  text-decoration: none;
}
.tags {
  background-color: rgba($gray, 0.2);
  color: rgb(100, 100, 100);
  border: 0px;
  margin-inline: 5px;
  padding-inline: 15px;
  padding-block: 3px;
  margin-top: 10px;
}
</style>
