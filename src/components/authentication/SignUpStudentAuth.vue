<template>
  <BaseAuth>
    <template v-slot:header>
      Sign Up <span class="signup-subtitle">As Student’s</span>
    </template>
    <form class="form-auth d-flex flex-column gap-4">
      <div class="row row-cols-md-2 row-cols-1 gap-4 gap-md-0">
        <div class="col">
          <input
            class="form-control"
            v-model="fname"
            type="name"
            placeholder="First name"
          />
        </div>
        <div class="col">
          <input
            class="form-control"
            v-model="lname"
            type="name"
            placeholder="Last name"
          />
        </div>
      </div>
      <input
        class="form-control"
        type="email"
        placeholder="Example@example.com"
        v-model="email"
      />
      <input
        class="form-control"
        v-model="phoneNo"
        type="tel"
        placeholder="Phone Number"
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
            v-model="collage"
            aria-label="Default select example"
          >
            <option value="">Colleage</option>
            <option value="KASIT">KASIT</option>
          </select>
        </div>

        <div class="col">
          <select
            class="form-select"
            v-model="major"
            aria-label="Default select example"
          >
            <option value="">Major</option>
            <option value="CIS">CIS</option>
            <option value="CS">CS</option>
            <option value="BIT">BIT</option>
            <option value="DS">DS</option>
            <option value="AI">AI</option>
          </select>
        </div>
      </div>
      <div class="row row-cols-md-2 row-cols-1 gap-4 gap-md-0">
        <div class="col">
          <select
            class="form-select"
            v-model="status"
            aria-label="Default select example"
          >
            <option value="">Status</option>
            <option value="Student">Student</option>
            <option value="Alumni">Alumni`s</option>
          </select>
        </div>

        <div v-if="status == 'Student'">
          <select
            class="form-select"
            v-model="acadYear"
            aria-label="Default select example"
          >
            <option value="">Academic Year</option>
            <option value="first">first year</option>
            <option value="second">Second year</option>
            <option value="third">Third year</option>
            <option value="last">Last year</option>
          </select>
        </div>
        <div v-if="status == 'Alumni'">
          <input
            type="number"
            class="form-control"
            v-model="gradYear"
            placeholder="Graduation Year"
          />
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
import { mapActions } from "vuex";

export default defineComponent({
  data() {
    return {
      isLoading: false,
      email: "",
      password: "",
      fname: "",
      lname: "",
      collage: "",
      major: "",
      phoneNo: 0 as number,
      status: "",
      acadYear: "",
      gradYear: "",
    };
  },
  methods: {
    ...mapActions({
      signup: "Auth/signup",
    }),
    async submitForm() {
      this.isLoading = true;
      await this.signup({
        email: this.email,
        password: this.password,
        role: "student",
        firstName: this.fname,
        lastName: this.lname,
        phoneNumber: this.phoneNo,
        collage: this.collage,
        major: this.major,
        status: this.status,
        acadYear: this.acadYear,
        gradYear: this.gradYear,
      });
      this.isLoading = false;
    },
  },
});
</script>
