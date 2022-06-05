<template>
  <MDBModalHeader>
    <MDBModalTitle id="exampleModalLabel"> {{ title }} </MDBModalTitle>
  </MDBModalHeader>
  <MDBModalBody>
    <div>
      <div
        v-for="like in likes"
        class="d-flex w-100 align-items-center"
        :key="like.id"
      >
        <p
          class="text-center rounded-circle name-sections p-1"
          v-if="like.file == ''"
        >
          <router-link :to="'/home/profile/' + like.id">
            {{ like.firstName }}
          </router-link>
        </p>
        <img
          v-else
          :src="like.file"
          class="rounded-circle img-profile"
          width="60"
          height="60"
        />
        <router-link :to="'/home/profile/' + like.id">
          <p class="px-2">{{ like.firstName }} {{ like.lastName }}</p>
        </router-link>
      </div>
      <div v-if="likes.length == 0">
        <p>{{ noList }}</p>
      </div>
    </div>
  </MDBModalBody>
  <MDBModalFooter class="btns">
    <button class="btn save" @click="$emit('close')">Close</button>
  </MDBModalFooter>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["likes", "title", "noList"],
  emits: ["close"],
});
</script>
<style lang="scss">
@import "@/assets/sass/main";
.name-sections {
  a {
    color: white;
    text-decoration: none;
  }
  background-color: $color-button;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
  word-break: break-all;
}

.save {
  border: 1px solid $color-button;
  color: $color-button;
}
</style>
