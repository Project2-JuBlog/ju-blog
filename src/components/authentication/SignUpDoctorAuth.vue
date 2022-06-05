<template>
  <BaseAuth>
    <template v-slot:header>
      Sign Up <span class="signup-subtitle">As Doctor’s</span>
    </template>
    <form class="form-auth d-flex flex-column gap-4 pt-5">
      <div class="row row-cols-md-2 row-cols-1 gap-4 gap-md-0">
        <div class="col">
          <input
            type="name"
            placeholder="First name"
            v-model="fname"
            :class="{
              'form-control': true,
              'is-invalid': !fnameValidate(fname) && fnameBlur,
            }"
            @blur="fnameBlur = true"
          />
        </div>
        <div class="col">
          <input
            :class="{
              'form-control': true,
              'is-invalid': !lnameValidate(lname) && lnameBlur,
            }"
            @blur="lnameBlur = true"
            type="name"
            placeholder="Last name"
            v-model="lname"
          />
        </div>
      </div>
      <input
        class="form-control"
        type="email"
        v-model="email"
        :class="{
          'form-control': true,
          'is-invalid': !emailValidate(email) && emailBlur,
        }"
        @blur="emailBlur = true"
        placeholder="Example@ju.edu.jo"
      />
      <input
        class="form-control"
        type="password"
        placeholder="Enter your password"
        v-model="password"
        :class="{
          'form-control': true,
          'is-invalid': !passValidate(password) && passwordBlur,
        }"
        @blur="passwordBlur = true"
      />
      <div class="row row-cols-md-2 row-cols-1 gap-4 gap-md-0">
        <div class="col">
          <select
            class="form-select"
            aria-label="Default select example"
            @change="setcollagehandler"
            v-model="collage"
            :class="{
              'form-select': true,
              'is-invalid': !categoryValidate(collage) && categoryBlur,
            }"
            @blur="categoryBlur = true"
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
        <div class="col">
          <select
            class="form-select"
            v-model="major"
            :class="{
              'form-select': true,
              'is-invalid': !majorValidate(major) && majorBlur,
            }"
            @blur="majorBlur = true"
            aria-label="Default select example"
          >
            <option value="">Major</option>

            <option v-for="major in majors" :key="major.id" :value="major">
              {{ major.name }}
            </option>
          </select>
        </div>
      </div>
    </form>
    <template v-slot:button>
      <BaseButton small @click.prevent="submitForm"
        ><span v-if="!isLoading">Sign Up</span>
        <span v-else> <MDBSpinner /> </span> </BaseButton
    ></template>
  </BaseAuth>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  data() {
    return {
      isLoading: false,
      email: "",
      password: "",
      fname: "",
      lname: "",
      collage: "" as any,
      major: "",
      fnameBlur: false,
      passwordBlur: false,
      emailBlur: false,
      lnameBlur: false,
      categoryBlur: false,
      majorBlur: false,
      valid: false,
    };
  },
  computed: {
    ...mapGetters({
      collages: "Group/collage",
      majors: "Group/major",
    }),
  },
  methods: {
    ...mapActions({
      signup: "Auth/signup",
      setCollage: "Group/setCollage",
      setMajor: "Group/setMajor",
    }),
    fnameValidate(name: any) {
      if (name !== "") {
        return true;
      }
    },

    lnameValidate(name: any) {
      if (name !== "") {
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

    majorValidate(name: any) {
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

    validate() {
      this.fnameBlur = true;
      this.passwordBlur = true;
      this.emailBlur = true;
      this.lnameBlur = true;
      this.categoryBlur = true;
      this.majorBlur = true;

      if (
        this.fnameValidate(this.fname) &&
        this.lnameValidate(this.lname) &&
        this.emailValidate(this.email) &&
        this.passValidate(this.password) &&
        this.categoryValidate(this.collage) &&
        this.majorValidate(this.major)
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
          role: "doctor",
          firstName: this.fname,
          lastName: this.lname,
          collage: this.collage,
          major: this.major,
        });
      }
      this.isLoading = false;
    },
    setcollagehandler() {
      this.setMajor(this.collage.id);
    },
  },
  created() {
    this.setCollage();
  },
});
</script>
