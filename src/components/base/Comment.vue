<template>
  <div class="d-flex comment mb-3">
    <div>
      <img src="@/assets/img/rawanimage.png" width="45" height="45" />
    </div>
    <div>
      <div class="mx-2 p-2 my-0 comment-content row">
        <p class="col-11">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          fugiat doloribus adipisci laboriosam id, molestias aperiam ab
          obcaecati a quia nihil? Atque cum
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

<style lang="scss">
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
</style>
