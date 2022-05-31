<template>
  <div class="profile-info mt-5 px-3">
    <div class="row">
      <h3 class="col-md-3 col-12">Email address :</h3>
      <h4 class="col">{{ userData.email }}</h4>
    </div>
    <div class="row">
      <h3 class="col-md-3 col-12">Phone number :</h3>
      <h4 class="col">{{ userData.phoneNumber }}</h4>
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
      <div v-if="isLanguages" class="px-5 mt-4">
        <p>
          <span
            class="rounded-pill tags"
            v-for="lang in userData.languages"
            :key="lang"
            >{{ lang }}</span
          >
        </p>
      </div>
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
      <div v-if="isSkills" class="px-5 mt-4">
        <p class="d-flex flex-wrap col-md-7 col-12">
          <span
            v-for="skill in userData.skills"
            :key="skill"
            class="rounded-pill tags"
            >{{ skill }}</span
          >
        </p>
      </div>
    </div>
    <div class="row">
      <h3 class="col-md-3 col-6">Experience :</h3>
      <h4
        class="col-5 px-4 d-flex justify-content-end"
        @click="isExperince = !isExperince"
      >
        <img
          src="@/assets/img/down-arrow.svg"
          :class="isExperince ? 'down-up' : ''"
          width="20"
          height="15"
        />
      </h4>
      <div v-if="isExperince" class="mx-5 mt-2">
        <ul>
          <li v-for="exp in userData.experiense" :key="exp">{{ exp }}</li>
        </ul>
      </div>
    </div>

    <div class="row">
      <h3 class="col-md-3 col-6">Volunteer :</h3>
      <h4
        class="col-5 px-4 d-flex justify-content-end"
        @click="isVolunteer = !isVolunteer"
      >
        <img
          src="@/assets/img/down-arrow.svg"
          :class="isVolunteer ? 'down-up' : ''"
          width="20"
          height="15"
        />
      </h4>
      <div v-if="isVolunteer" class="mx-5 mt-2">
        <ul>
          <li v-for="voluntee in userData.volunteer" :key="voluntee">
            {{ voluntee }}
          </li>
        </ul>
      </div>
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

      <div v-if="isCertificates" class="px-5 mt-4">
        <p>
          <span
            class="rounded-pill tags"
            v-for="cert in userData.Certificate"
            :key="cert"
            >{{ cert }}</span
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["userData"],
  data() {
    return {
      isExperince: false,
      isSkills: false,
      isCertificates: false,
      isLanguages: false,
      isVolunteer: false,
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

.tags {
  background-color: white;
  color: $color-button;
  border: 1px solid $color-button;
  margin-inline: 5px;
  padding-inline: 20px;
  padding-block: 7px;
  margin-block: 5px;
}
</style>
