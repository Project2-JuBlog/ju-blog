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
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  data() {
    return {
      RecommandData: "",
    };
  },
  computed: {
    ...mapGetters({
      user: "Auth/userInfo",
    }),
  },
  methods: {
    ...mapActions({
      addRecommand: "Profile/addRecommand",
    }),
    async SendRecommanditon() {
      await this.addRecommand({
        user: this.user,
        recomandation: this.RecommandData,
        userData: this.userData,
      });
      this.RecommandData = "";
      this.$emit("close");
    },
  },
  props: ["userData"],
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
