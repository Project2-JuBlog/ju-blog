<template>
  <BaseCard>
    <img :src="require('@/assets/img/' + userImage)" width="40" height="40" />
    <strong class="header-black px-3">{{ userData.name }}</strong>
  </BaseCard>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  computed: {
    ...mapGetters({
      user: "Auth/user",
    }),
    userData(): any {
      return this.user;
    },
    userImage(): any {
      return this.user.image;
    },
  },
});
</script>
