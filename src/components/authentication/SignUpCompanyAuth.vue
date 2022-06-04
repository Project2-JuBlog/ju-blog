<template>
  <BaseAuth>
    <template v-slot:header>
      Sign Up <span class="signup-subtitle">As company</span>
    </template>
    <form class="form-auth d-flex flex-column gap-4 pt-5">
      <input
        class="form-control"
        type="name"
        placeholder="Company name"
        v-model="name"
      />
      <input
        class="form-control"
        type="email"
        placeholder="Company email"
        v-model="email"
      />
      <input
        class="form-control"
        type="password"
        v-model="password"
        placeholder="Enter your password"
      />
      <div class="col">
        <select
          class="form-select"
          v-model="collage"
          aria-label="Default select example"
          @change="setcollagehandler"
        >
          <option value="">Colleage</option>
          <option
            v-for="collage in collages"
            :key="collage.id"
            :value="collage"
          >
            {{ collage.name }}
          </option>
        </select>
      </div>
    </form>
    <template v-slot:button>
      <BaseButton @click.prevent="submitForm">Sign Up </BaseButton></template
    >
  </BaseAuth>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  data() {
    return {
      isLoading: false,
      collage: "" as any,
      password: "",
      name: "",
      email: "",
    };
  },
  computed: {
    ...mapGetters({
      collages: "Group/collage",
    }),
  },
  methods: {
    ...mapActions({
      signup: "Auth/signup",
      setCollage: "Group/setCollage",
    }),
    async submitForm() {
      this.isLoading = true;
      await this.signup({
        email: this.email,
        password: this.password,
        role: "company",
        name: this.name,
        collage: this.collage,
      });
      this.isLoading = false;
    },
  },
  created() {
    this.setCollage();
  },
});
</script>
