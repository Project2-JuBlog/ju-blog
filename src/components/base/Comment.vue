<template>
  <div class="d-flex comment mb-3">
    <div class="">
      <!-- <img src="@/assets/img/rawanimage.png" width="45" height="45" /> -->
      <p class="text-center rounded-circle name-section p-1">
        {{ comment.user.fname }}
      </p>
    </div>
    <div class="w-100">
      <div class="mx-2 p-2 my-0 mt-3 comment-content row">
        <p class="col-11">
          {{ comment.content }}
        </p>
        <div class="dropdown col-1 mt-2">
          <div
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style="cursor: pointer"
          >
            <img src="@/assets/img/dots.svg" width="10" height="4" />
          </div>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a class="dropdown-item" href="#" @click.prevent="deletsComment"
                >Delete</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="mx-3 cursor" @click="isLiked = !isLiked">
        <span v-if="!isLiked">like</span>
        <span v-else class="isLiked">Liked</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["comment"],
  data() {
    return {
      isLiked: false,
    };
  },
  methods: {
    deletsComment() {
      console.log("d");
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/sass/main";

.comment {
  &-content {
    background-color: #f2f2f2;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }
}
.isLiked {
  color: $color-button;
}
.cursor {
  cursor: pointer;
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
