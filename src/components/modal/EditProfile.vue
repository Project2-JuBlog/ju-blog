<template>
  <MDBModalHeader>
    <MDBModalTitle id="exampleModalLabel"> Edit Profile </MDBModalTitle>
  </MDBModalHeader>
  <MDBModalBody>
    <form class="form">
      <textarea
        placeholder="Please Edit Your Post .."
        class="form-control"
        rows="5"
      ></textarea>
    </form>
  </MDBModalBody>
  <MDBModalFooter class="btns">
    <button class="btn colses" @click="$emit('close')">Close</button>
    <MDBBtn class="btns-save">Save changes</MDBBtn>
  </MDBModalFooter>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["close"],
});
</script>
<style lang="scss">
@import "@/assets/sass/main";
.closes {
  background-color: $color-button;
  color: $color-white;
  padding: 50px;
}
</style>
