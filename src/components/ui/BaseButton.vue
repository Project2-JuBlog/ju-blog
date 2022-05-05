<template>
  <button v-if="!link" class="button-base">
    <slot></slot>
  </button>
  <router-link v-else :to="to" class="button-base">
    <slot></slot>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: Object || String,
      required: false,
      default: "/",
    },
  },
});
</script>
