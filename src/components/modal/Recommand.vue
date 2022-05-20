<template>
  <MDBModalHeader>
    <MDBModalTitle id="exampleModalLabel">
      Write a recommendation
    </MDBModalTitle>
  </MDBModalHeader>
  <MDBModalBody>
    <form class="form d-flex flex-column gap-3">
      <textarea
        rows="5"
        class="form-control"
        placeholder="Write your recommendations here"
        v-model="RecommandData"
      >
      </textarea>
    </form>
  </MDBModalBody>
  <MDBModalFooter class="btns">
    <MDBBtn class="btn colses" @click.prevent="SendRecommanditon">Send</MDBBtn>
    <button class="btn save" @click="$emit('close')">Close</button>
  </MDBModalFooter>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      RecommandData: "",
    };
  },
  methods: {
    SendRecommanditon() {
      console.log(this.RecommandData);
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
</style>
