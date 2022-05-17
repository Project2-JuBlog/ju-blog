<template>
  <BaseCard class="name-section">
    <router-link :to="{ name: 'Profile' }" active-class="active-list">
      <img :src="require('@/assets/img/' + userImage)" width="40" height="40" />
      <strong class="header-black px-3">{{ userData.name }}</strong>
    </router-link>
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
<style scoped lang="scss">
@import "@/assets/sass/main";

.name-section {
  a {
    text-decoration: none;
  }
  .active-list {
    padding-left: 10px;
    margin-left: 20px;
    border-left: 3px solid $color-button !important;
    strong {
      color: $color-button;
    }
    img {
      display: none;
    }
  }
}
</style>
