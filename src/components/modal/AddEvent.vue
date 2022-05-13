<template>
  <MDBModalHeader>
    <MDBModalTitle id="exampleModalLabel"> Add New Event </MDBModalTitle>
  </MDBModalHeader>
  <MDBModalBody>
    <form class="form d-flex flex-column gap-3">
      <input placeholder="Title ..." class="form-control" v-model="title" />

      <input type="date" class="form-control" />
    </form>
  </MDBModalBody>
  <MDBModalFooter class="btns">
    <button class="btn colses" @click="$emit('close')">Close</button>
    <MDBBtn class="btn save">Add</MDBBtn>
  </MDBModalFooter>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  date() {
    return {
      title: "",
    };
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
