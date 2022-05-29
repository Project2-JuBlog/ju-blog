<template>
  <BaseCard class="name-section">
    <router-link :to="{ name: 'Profile' }" active-class="active-list">
      <!-- <img :src="require('@/assets/img/' + user.file)" width="40" height="40" /> -->
      <strong class="header-black px-3">{{ userName }}</strong>
    </router-link>
  </BaseCard>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  computed: {
    ...mapGetters({
      user: "Auth/userInfo",
    }),
    userName(): any {
      return this.user.firstName + " " + this.user.lastName;
    },
    // userImage(): any {
    //   return this.user.file;
    // },
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
