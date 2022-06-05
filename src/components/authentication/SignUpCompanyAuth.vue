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
        :class="{
          'form-control': true,
          'is-invalid': !fnameValidate(name) && fnameBlur,
        }"
        @blur="fnameBlur = true"
      />
      <input
        class="form-control"
        type="email"
        placeholder="Company email"
        v-model="email"
        :class="{
          'form-control': true,
          'is-invalid': !emailValidate(email) && emailBlur,
        }"
        @blur="emailBlur = true"
      />
      <input
        class="form-control"
        type="password"
        v-model="password"
        placeholder="Enter your password"
        :class="{
          'form-control': true,
          'is-invalid': !passValidate(password) && passwordBlur,
        }"
        @blur="passwordBlur = true"
      />
      <div class="col">
        <select
          :class="{
            'form-select': true,
            'is-invalid': !categoryValidate(collage) && categoryBlur,
          }"
          @blur="categoryBlur = true"
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
      fnameBlur: false,
      passwordBlur: false,
      emailBlur: false,
      categoryBlur: false,
      valid: false,
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

    fnameValidate(name: any) {
      if (name !== "") {
        return true;
      }
    },

    emailValidate(name: any) {
      const mailformat = new RegExp(
        /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/
      );
      if (mailformat.test(name) !== false) {
        return true;
      }
    },
    passValidate(name: any) {
      if (name.length !== 0) {
        return true;
      }
    },
    categoryValidate(name: any) {
      if (name !== "") {
        return true;
      }
    },
    validate() {
      this.fnameBlur = true;
      this.passwordBlur = true;
      this.emailBlur = true;
      this.categoryBlur = true;

      if (
        this.fnameValidate(this.name) &&
        this.emailValidate(this.email) &&
        this.passValidate(this.password) &&
        this.categoryValidate(this.collage)
      ) {
        this.valid = true;
      }
    },
    async submitForm() {
      this.isLoading = true;
      this.validate();
      if (this.valid) {
        await this.signup({
          email: this.email,
          password: this.password,
          role: "company",
          name: this.name,
          collage: this.collage,
        });
      }
      this.isLoading = false;
    },
  },
  created() {
    this.setCollage();
  },
});
</script>
