<template>
  <MDBModalHeader>
    <MDBModalTitle id="exampleModalLabel"> Add New Event </MDBModalTitle>
  </MDBModalHeader>
  <MDBModalBody>
    <form class="form d-flex flex-column gap-3">
      <label>
        Title :
        <input placeholder="Title ..." class="form-control" v-model="title" />
      </label>

      <label>
        Start Time
        <input
          type="datetime-local"
          placeholder="Start Time"
          class="form-control"
          v-model="startDate"
        />
      </label>

      <label>
        End Time
        <input
          type="datetime-local"
          placeholder="End Time"
          class="form-control"
          v-model="endDate"
        />
      </label>
      <label>
        Event Color: <br />
        <input type="color" v-model="colorLabel" />
      </label>
    </form>
  </MDBModalBody>
  <MDBModalFooter class="btns">
    <button class="btn colses" @click="$emit('close')">Close</button>
    <MDBBtn class="btn save" @click.prevent="AddEvent">Add</MDBBtn>
  </MDBModalFooter>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  data() {
    return {
      title: "",
      startDate: "",
      colorLabel: "",
      endDate: "",
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
    async AddEvent() {
      await this.SetEvent({
        newEvent: {
          title: this.title,
          startDate: this.startDate,
          endDate: this.endDate,
          backgroundColor: this.colorLabel,
        },
        user: this.user,
      });
      this.title = "";
      this.startDate = "";
      this.endDate = "";
      this.$emit("close");
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
