<template>
  <div class="base__card mb-5">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss" scoped>
@import "@/assets/sass/main";

.base__card {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 8px 1px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 20px;
}
</style>
