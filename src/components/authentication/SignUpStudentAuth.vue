<template>
  <BaseAuth>
    <template v-slot:header>
      Sign Up <span class="signup-subtitle">As Student’s</span>
    </template>
    <form class="form-auth d-flex flex-column gap-4">
      <div class="row row-cols-md-2 row-cols-1 gap-4 gap-md-0">
        <div class="col">
          <input
            :class="{
              'form-control': true,
              'is-invalid': !fnameValidate(fname) && fnameBlur,
            }"
            v-model="fname"
            @blur="fnameBlur = true"
            type="name"
            placeholder="First name"
          />
        </div>
        <div class="col">
          <input
            :class="{
              'form-control': true,
              'is-invalid': !lnameValidate(lname) && lnameBlur,
            }"
            v-model="lname"
            type="name"
            @blur="lnameBlur = true"
            placeholder="Last name"
          />
        </div>
      </div>
      <input
        :class="{
          'form-control': true,
          'is-invalid': !emailValidate(email) && emailBlur,
        }"
        @blur="emailBlur = true"
        type="email"
        placeholder="Example@example.com"
        v-model="email"
        required
      />
      <input
        class="form-control"
        v-model="phoneNo"
        :class="{
          'form-control': true,
          'is-invalid': !phonevalidate(phoneNo) && phoneBlur,
        }"
        @blur="phoneBlur = true"
        type="tel"
        placeholder="Phone Number"
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
            :class="{
              'form-select': true,
              'is-invalid': !categoryValidate(collage) && categoryBlur,
            }"
            v-model="collage"
            aria-label="Default select example"
            @blur="categoryBlur = true"
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
        <div class="col">
          <select
            :class="{
              'form-select': true,
              'is-invalid': !majorValidate(major) && majorBlur,
            }"
            @blur="majorBlur = true"
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
      <div class="row row-cols-md-2 row-cols-1 gap-4 gap-md-0">
        <div class="col">
          <select
            :class="{
              'form-select': true,
              'is-invalid': !statusValidate(status) && statusBlur,
            }"
            @blur="statusBlur = true"
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
      phoneNo: 0 as number,
      status: "",
      acadYear: "",
      gradYear: "",
      fnameBlur: false,
      passwordBlur: false,
      phoneBlur: false,
      emailBlur: false,
      lnameBlur: false,
      categoryBlur: false,
      majorBlur: false,
      statusBlur: false,
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

    emailValidate(name: any) {
      const mailformat = new RegExp(
        /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/
      );
      if (mailformat.test(name) !== false) {
        return true;
      }
    },

    phonevalidate(name: any) {
      if (name !== 0) {
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

    statusValidate(name: any) {
      if (name !== "") {
        return true;
      }
    },
    validate() {
      this.fnameBlur = true;
      this.passwordBlur = true;
      this.phoneBlur = true;
      this.emailBlur = true;
      this.lnameBlur = true;
      this.categoryBlur = true;
      this.majorBlur = true;
      this.statusBlur = true;

      if (
        this.fnameValidate(this.fname) &&
        this.lnameValidate(this.lname) &&
        this.emailValidate(this.email) &&
        this.phonevalidate(this.phoneNo) &&
        this.passValidate(this.password) &&
        this.categoryValidate(this.collage) &&
        this.majorValidate(this.major) &&
        this.statusValidate(this.status)
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
<style scoped>
/* .is-invalid {
  color: red;
  border: red;
} */
</style>
