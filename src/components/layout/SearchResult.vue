<template>
  <div class="col-12">
    <p class="rounded-pill tags col-2 text-center my-3">{{ searchQ }}</p>
    <Friends />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Friends from "@/components/layout/Friends.vue";
export default defineComponent({
  computed: {
    searchQ(): any {
      return this.$route.params.searchQuery;
    },
  },
  components: {
    Friends,
  },
});
</script>

<style lang="scss">
@import "@/assets/sass/main";

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
