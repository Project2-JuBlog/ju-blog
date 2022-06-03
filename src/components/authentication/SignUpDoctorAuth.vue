<template>
  <BaseAuth>
    <template v-slot:header>
      Sign Up <span class="signup-subtitle">As Doctor’s</span>
    </template>
    <form class="form-auth d-flex flex-column gap-4 pt-5">
      <div class="row row-cols-md-2 row-cols-1 gap-4 gap-md-0">
        <div class="col">
          <input
            class="form-control"
            type="name"
            placeholder="First name"
            v-model="fname"
          />
        </div>
        <div class="col">
          <input
            class="form-control"
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
        placeholder="Example@ju.edu.jo"
      />
      <input
        class="form-control"
        type="password"
        placeholder="Enter your password"
        v-model="password"
      />
      <div class="row row-cols-md-2 row-cols-1 gap-4 gap-md-0">
        <div class="col">
          <select
            class="form-select"
            aria-label="Default select example"
            @change="setcollagehandler"
            v-model="collage"
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
    async submitForm() {
      this.isLoading = true;
      await this.signup({
        email: this.email,
        password: this.password,
        role: "doctor",
        firstName: this.fname,
        lastName: this.lname,
        collage: this.collage,
        major: this.major,
      });
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
