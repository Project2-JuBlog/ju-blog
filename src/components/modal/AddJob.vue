<template>
  <MDBModalHeader>
    <MDBModalTitle id="exampleModalLabel"> Create Job </MDBModalTitle>
  </MDBModalHeader>
  <MDBModalBody>
    <form class="form d-flex flex-column gap-3">
      <label>
        Job Title :
        <input
          placeholder="Add the title you are hiring for .. ..."
          class="form-control"
          v-model="title"
        />
      </label>

      <label>
        Company Name:
        <input
          type="text"
          placeholder="Add the name of the company .."
          class="form-control"
          v-model="companyName"
        />
      </label>

      <label>
        Job Location:
        <input
          type="text"
          placeholder="Add the location of the company .."
          class="form-control"
          v-model="location"
        />
      </label>
      <label>
        Description:
        <textarea
          class="form-control write-comment p-2"
          placeholder="Add the skills and requirements you`re looking for ..."
          rows="3"
          v-model="description"
        ></textarea>
      </label>
      <label>
        Job Type:
        <select
          class="form-select"
          v-model="type"
          aria-label="Default select example"
        >
          <option value="full-time" selected>full Time</option>
          <option value="part-time">Part Time</option>
          <option value="internship">Internship</option>
        </select>
      </label>
      <div class="row">
        <label class="col-11">
          Skills :
          <div v-for="skill in skillsCounter" :key="skill" class="input-field">
            <input
              class="form-control mb-2"
              type="text"
              v-model="skills[skill - 1]"
            />
            <img
              src="@/assets/img/close.svg"
              @click="removeSkills(skill - 1)"
              class="img-close"
            />
          </div>
        </label>
        <div class="col-1 align-self-center mt-2">
          <img
            src="@/assets/img/plus.svg"
            @click="skillsCounter++"
            width="15"
            height="15"
          />
        </div>
      </div>
    </form>
  </MDBModalBody>
  <MDBModalFooter class="btns">
    <button class="btn colses" @click="$emit('close')">Close</button>
    <MDBBtn class="btn save" @click.prevent="createJob">Create</MDBBtn>
  </MDBModalFooter>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  data() {
    return {
      title: "",
      type: "full-time",
      description: "",
      location: "",
      companyName: "",
      skills: [],
      skillsCounter: 1,
    };
  },
  computed: {
    ...mapGetters({
      user: "Auth/userInfo",
    }),
  },
  methods: {
    ...mapActions({
      Addjobpost: "Group/Addjobpost",
    }),
    async createJob() {
      let date = new Date();

      await this.Addjobpost({
        user: this.user,
        post: {
          title: this.title,
          type: this.type,
          description: this.description,
          location: this.location,
          companyName: this.companyName,
          skills: this.skills,
        },
        createdAt: date,
      });
      this.title = "";
      this.type = "full-time";
      this.description = "";
      this.location = "";
      this.companyName = "";
      this.$emit("close");
    },
    removeSkills(item: any) {
      this.skills.splice(item, 1);
      this.skillsCounter--;
    },
  },
  emits: ["close"],
});
</script>
<style lang="scss">
@import "@/assets/sass/main";
.colses {
  background-color: $color-button;
  color: $color-white;
  width: 150px;
  height: 30px;
}
.save {
  border: 1px solid $color-button;
  color: $color-button;
  width: 150px;
  height: 30px;
}
.input-field {
  position: relative;
}

.img-close {
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px;
}
</style>
