<template>
  <form class="form-auth d-flex flex-column gap-md-4 gap-2">
    <input
      class="form-control"
      type="email"
      placeholder="Email"
      v-model="email"
    />
    <input
      class="form-control"
      type="password"
      placeholder="Enter your password"
      v-model="password"
    />
  </form>

  <BaseButton @click.prevent="submitForm" small class="mt-3">
    <span v-if="!isLoading">Log In </span>
    <span v-else> <MDBSpinner /> </span
  ></BaseButton>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  data() {
    return {
      isLoading: false,

      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions({
      login: "Auth/login",
    }),
    async submitForm() {
      this.isLoading = true;
      await this.login({
        email: this.email,
        password: this.password,
      });
      this.isLoading = false;
    },
  },
});
</script>
