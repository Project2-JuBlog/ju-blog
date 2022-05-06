<template>
  <div class="container pt-5 px-5 px-md-0 mx-5 mx-md-0">
    <div
      class="d-flex justify-content-end px-4 back-arrow"
      @click="$router.go(-1)"
    >
      Go Back
    </div>
    <!-- <div class="back-arrow"><img src="@/assets/img/Back-Arrow.svg" /></div> -->
    <div class="header__Auth mt-5">
      <p class="header__Auth-title">JuBlog</p>
      <p class="header__Auth-subtitle"><slot name="header"></slot></p>
    </div>
    <div class="col-10 col-md-9 col-xl-6 mt-5">
      <slot></slot>
      <div class="d-flex justify-content-end mt-4">
        <slot name="button"></slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["title"],
});
</script>
<style lang="scss">
@import "@/assets/sass/main";
.back-arrow {
  cursor: pointer;
}
.signup-subtitle {
  border-left: 2px solid $color-button;
  padding-left: 5px;
}
.header__Auth {
  &-title {
    color: $color-primary;
    font-size: 3.9rem;
  }
  &-subtitle {
    margin: 0;
    border-left: 2px solid $color-primary;
    padding: 2px 8px;
    align-content: center;
    color: $color-button;
    font-size: 1.2rem;
  }
}
.form-auth {
  .form-control,
  .form-select {
    padding: 10px;
    border: 2px solid $color-button;
    border-radius: 10px;
    outline: none;
  }
  .form-control:focus {
    outline: none;
    box-shadow: none;
  }
}
</style>
