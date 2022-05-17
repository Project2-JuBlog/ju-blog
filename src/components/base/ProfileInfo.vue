<template>
  <div class="profile-info mt-5 px-3">
    <div class="row">
      <h3 class="col-md-3 col-12">Email address :</h3>
      <h4 class="col">rawan2000abdullah@gmail.com</h4>
    </div>
    <div class="row">
      <h3 class="col-md-3 col-12">Phone number :</h3>
      <h4 class="col">0799281417</h4>
    </div>
    <div class="row">
      <h3 class="col-md-3 col-6">Achievements :</h3>
      <h4
        class="col-5 px-4 d-flex justify-content-end"
        @click="isAchievement = !isAchievement"
      >
        <img
          src="@/assets/img/down-arrow.svg"
          :class="isAchievement ? 'down-up' : ''"
          width="20"
          height="15"
        />
      </h4>
      <p v-if="isAchievement">here we will write my Achievements</p>
    </div>
    <div class="row">
      <h3 class="col-md-3 col-6">Skills :</h3>
      <h4
        class="col-5 px-4 d-flex justify-content-end"
        @click="isSkills = !isSkills"
      >
        <img
          src="@/assets/img/down-arrow.svg"
          :class="isSkills ? 'down-up' : ''"
          width="20"
          height="15"
        />
      </h4>
      <p v-if="isSkills">here we will write my Skills</p>
    </div>
    <div class="row">
      <h3 class="col-md-3 col-6">Certificates :</h3>
      <h4
        class="col-5 px-4 d-flex justify-content-end"
        @click="isCertificates = !isCertificates"
      >
        <img
          src="@/assets/img/down-arrow.svg"
          :class="isCertificates ? 'down-up' : ''"
          width="20"
          height="15"
        />
      </h4>
      <p v-if="isCertificates">here we will write my Certificates</p>
    </div>
    <div class="row">
      <h3 class="col-md-3 col-6">Languages :</h3>
      <h4
        class="col-5 px-4 d-flex justify-content-end"
        @click="isLanguages = !isLanguages"
      >
        <img
          src="@/assets/img/down-arrow.svg"
          :class="isLanguages ? 'down-up' : ''"
          width="20"
          height="15"
        />
      </h4>
      <p v-if="isLanguages">here we will write my Languages</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      isAchievement: false,
      isSkills: false,
      isCertificates: false,
      isLanguages: false,
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/sass/main";
.profile-info {
  .row {
    margin-bottom: 25px;
    img {
      cursor: pointer;
    }
  }
  h3 {
    color: $color-button;
  }
}
.down-up {
  transform: rotateX(180deg) !important;
  transition: all 0.5s;
}
</style>
