<template>
  <MDBModalHeader>
    <MDBModalTitle id="exampleModalLabel">
      Suggested job searches
    </MDBModalTitle>
  </MDBModalHeader>
  <MDBModalBody>
    <div>
      <p class="d-flex flex-wrap col-12 text-center justify-content-center">
        <span
          class="rounded-pill tags"
          v-for="skill in skills"
          :key="skill.id"
          @click.prevent="searchHandler(skill.name)"
          >{{ skill.name }}</span
        >
      </p>
    </div>
    <h3 class="text-center">OR</h3>
    <form class="form d-flex flex-column gap-3">
      <input
        type="text"
        class="form-control"
        placeholder="Search by headline"
        v-model="searchtext"
      />
    </form>
  </MDBModalBody>
  <MDBModalFooter class="btns">
    <MDBBtn class="btn colses" @click.prevent="searchHandler(searchtext)"
      >Search</MDBBtn
    >
    <button class="btn save" @click="$emit('close')">Close</button>
  </MDBModalFooter>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      skills: [
        {
          name: "Html",
          id: 1,
        },
        {
          name: "css",
          id: 2,
        },
        {
          name: "bootstrap",
          id: 3,
        },
        {
          name: "Frontend",
          id: 4,
        },
        {
          name: "Backend",
          id: 5,
        },
        {
          name: "UX/UI",
          id: 6,
        },
      ],
      searchtext: "",
    };
  },
  methods: {
    searchHandler(name: string) {
      console.log(name);
      this.$router.push({ name: "searchPage", params: { searchQuery: name } });
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
}
.save {
  border: 1px solid $color-button;
  color: $color-button;
}
.tags {
  background-color: white;
  color: $color-button;
  border: 1px solid $color-button;
  margin-inline: 5px;
  padding-inline: 20px;
  padding-block: 7px;
  margin-block: 5px;
  cursor: pointer;
}
</style>
