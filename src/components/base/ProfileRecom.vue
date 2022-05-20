<template>
  <section class="mt-5">
    <div
      class="row mb-4 recomandation-section border-bottom border-2 pb-4"
      v-for="recomandation in recommendationData"
      :key="recomandation.name"
    >
      <div class="col-2">
        <img
          :src="recomandation.img"
          class="recomandation-img"
          width="120"
          height="120"
        />
      </div>
      <div class="col-10">
        <p class="recomandation-name px-3 mt-2">{{ recomandation.name }}</p>

        <p class="px-3">{{ recomandation.description }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
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

<style scoped lang="scss">
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
</style>
