<template>
  <section class="mt-5">
    <div
      class="row mb-4 recomandation-section border-bottom border-2 pb-4"
      v-for="recomandation in userData"
      :key="recomandation.name"
    >
      <div class="col-2">
        <p class="text-center rounded-circle name-sections p-1">
          {{ recomandation.RecommandBy.firstName }}
        </p>
        <!-- <img
          :src="recomandation.img"
          class="recomandation-img"
          width="120"
          height="120"
        /> -->
      </div>
      <div class="col-10">
        <p class="recomandation-name px-3 mt-2">
          {{ recomandation.RecommandBy.firstName }}
        </p>

        <p class="px-3">{{ recomandation.description }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["userData"],
  data() {
    return {
      recommendationData: [
        {
          name: "Khair Eddin Sabri",
          description:
            "rawan is one of the best trainee's, she has a charming personality and great soft skills, she thinks creatively and technically about any problem she faces, not only that but she also provide a great creative solution for them.",
          img: require("@/assets/img/kher.png"),
        },
        {
          name: "Hamad Alsawalqah",
          description:
            "Rawan is one of the best trainee's, she has a charming personality and great soft skills, she thinks creatively and technically about any problem she faces, not only that but she also provide a great creative solution for them.",
          img: require("@/assets/img/hamad2.jpg"),
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/sass/main";
.recomandation {
  &-img {
    object-fit: cover;
    border-radius: 50%;
  }
  &-name {
    color: $color-button;
    font-size: 20px;
    font-weight: 400;
    line-height: 29px;
  }
}
.name-sections {
  color: white;
  background-color: $color-button;
  width: 110px;
  height: 110px;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
  word-break: break-all;
}
</style>
