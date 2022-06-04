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
    </form>
  </MDBModalBody>
  <MDBModalFooter class="btns">
    <button class="btn colses" @click="$emit('close')">Close</button>
    <MDBBtn class="btn save" @click.prevent="AddEvent">Create</MDBBtn>
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
    };
  },
  computed: {
    ...mapGetters({
      user: "Auth/userInfo",
    }),
  },
  methods: {
    ...mapActions({
      SetEvent: "Event/SetEvent",
    }),
  },
  emits: ["close"],
});
</script>
<style lang="scss">
@import "@/assets/sass/main";
.colses {
  background-color: $color-button;
  color: $color-white;
}
.save {
  border: 1px solid $color-button;
  color: $color-button;
}
</style>
