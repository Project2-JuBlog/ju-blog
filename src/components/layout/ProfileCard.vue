<template>
  <div class="mt-4 mb-4 d-flex justify-content-center">
    <div class="card p-4">
      <router-link :to="'/home/profile/' + user?.id">
        <div
          class="image d-flex flex-column justify-content-center pt-3 align-items-center"
        >
          <!-- <img src="https://i.imgur.com/wvxPV9S.png" height="100" width="100" /> -->
          <p
            class="text-center rounded-circle name-section p-1"
            v-if="user.file == ''"
          >
            {{ user.firstName }}
          </p>
          <img
            v-else
            :src="user.file"
            class="rounded-circle img-profile"
            width="80"
            height="80"
          />
          <span class="name mt-3"
            >{{ user.firstName }} {{ user.lastName }}</span
          >
          <span class="idd">{{ user.email }} </span>
          <p class="text">
            <span
              >{{ user?.status }}
              <span v-if="user.status !== 'Student'"
                >from {{ user?.gradYear }}</span
              >
              <span v-else> - {{ user?.acadYear }} Year</span>
            </span>
          </p>
          <span class="collage">{{ user.collage }} - {{ user.major }} </span>

          <div class="d-flex mt-2">
            <button class="btn1">Open Profile</button>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["user"],
});
</script>
<style scoped lang="scss">
@import "@/assets/sass/main";

* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #000;
}
.collage {
  color: $color-button;
}

.card {
  width: 350px;
  background-color: white;
  border: $color-button;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 4px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
  transition: all 0.5s;
  border-radius: 15px;
}

.image img {
  transition: all 0.5s;
}

.card:hover .image img {
  transform: scale(1.3);
}

.btn {
  height: 140px;
  width: 140px;
  border-radius: 50%;
}

.name {
  font-size: 22px;
  font-weight: bold;
}

.idd {
  font-size: 14px;
  font-weight: 600;
}

.idd1 {
  font-size: 12px;
}

.number {
  font-size: 22px;
  font-weight: bold;
}

.btn1 {
  height: 40px;
  width: 150px;
  border: none;
  background-color: $color-button;
  color: white;
  font-size: 15px;
  border-radius: 5px;
}

.text span {
  font-size: 13px;
  color: #545454;
  font-weight: 500;
}

.icons i {
  font-size: 19px;
}

hr .new1 {
  border: 1px solid;
}

.join {
  font-size: 14px;
  color: #a0a0a0;
  font-weight: bold;
}

.date {
  background-color: #ccc;
}
</style>
