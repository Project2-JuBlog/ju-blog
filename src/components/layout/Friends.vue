<template>
  <BaseCard2>
    <div v-for="i in 6" :key="i" class="row mb-4">
      <div class="col-sm-2 col-xl-1 col-12">
        <img src="@/assets/img/rawanimage.png" width="55" height="55" />
      </div>
      <div class="col-sm-10 col-xl-11 col-12 ps-3 border-bottom border-2 pb-3">
        <div class="d-flex justify-content-between">
          <div>
            <p class="p-0 m-0 fw-bold">Rawan Abdullah</p>
            <p class="p-0 m-0"><span>KASIT - CS</span></p>
            <p class="p-0 m-0">Frontend Developer</p>
          </div>
          <div class="d-flex flex-column gap-2">
            <button class="btn d-block rounded-pill color-button">
              Message
            </button>
            <button class="btn d-block btn-sm btn-danger rounded-pill">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  </BaseCard2>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
<style lang="scss">
@import "@/assets/sass/main";
.color-button {
  background-color: $color-button;
  color: white;
}
.cursor {
  cursor: pointer;
}
</style>
