<template>
  <div class="side-login">
    <section class="center-section">
      <div class="pb-4 text-center">
        <h2 class="header-primary">
          Welcome To
          <p>JuBlog</p>
        </h2>
      </div>
      <div>
        <LoginAuth />
        <!-- <BaseButton :to="{ name: 'loginpage' }" link>Log In</BaseButton> -->
        <div
          class="text-center pt-5 cursor"
          @click="$router.push({ name: 'signup' })"
        >
          <p>Don`t Have Account ? Sign Up</p>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import LoginAuth from "./LoginAuth.vue";
export default defineComponent({
  components: {
    LoginAuth,
  },
});
</script>
<style scoped>
.cursor {
  cursor: pointer;
}
</style>
