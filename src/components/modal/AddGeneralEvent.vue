<template>
  <MDBModalHeader>
    <MDBModalTitle id="exampleModalLabel"> Add General Event </MDBModalTitle>
  </MDBModalHeader>
  <MDBModalBody>
    <form class="form d-flex flex-column gap-3">
      <label>
        Event Cover Image:
        <file-pond
          name="test"
          class-name="my-pond"
          label-idle="uploade Image"
          accepted-file-types="image/jpeg, image/png,image/gif,image/jpg"
          :allow-multiple="false"
          @change="handleFilePondInit"
        />
      </label>
      <label>
        Event Name:

        <input
          placeholder="Event Name"
          class="form-control"
          v-model="event.title"
        />
      </label>
      <label>
        Event Group :
        <select class="form-select" v-model="event.group">
          <option selected value="">Please select Event Group</option>

          <option v-for="group in userGroup" :key="group.id" :value="group.id">
            {{ group.name }}
          </option>
        </select>
      </label>

      <label>
        Event Type:
        <select class="form-select" v-model="event.type">
          <option selected value="">Please select Event Type</option>

          <option value="online">Online</option>
          <option value="university">in University</option>
        </select>
      </label>
      <label v-if="event.type == 'university'">
        Event location:
        <input
          type="text"
          class="form-control"
          placeholder="Event Location ..."
          v-model="event.location"
        />
      </label>
      <label v-if="event.type == 'online'">
        Event Url:
        <input
          type="text"
          class="form-control"
          v-model="event.url"
          placeholder="Event Url ..."
        />
      </label>
      <label>
        Event Date:

        <input type="date" class="form-control" v-model="event.date" />
      </label>
      <label>
        Event Discription:
        <textarea
          rows="3"
          class="form-control"
          placeholder="Write About Your Event..."
          v-model="event.about"
        ></textarea>
      </label>
    </form>
  </MDBModalBody>
  <MDBModalFooter class="btns">
    <button class="btn save" @click="$emit('close')">Close</button>
    <MDBBtn class="btn colses" @click.prevent="eventHandler"
      >Create Event</MDBBtn
    >
  </MDBModalFooter>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import vueFilePond from "vue-filepond";

import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
const FilePond: any = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview
);

export default defineComponent({
  data() {
    return {
      event: {
        title: "",
        type: "",
        location: "",
        url: "",
        date: "",
        group: "",
        myFiles: "",
        about: "",
      },
      userGroup: [
        { name: "KASIT", id: 1 },
        { name: "CIS", id: 2 },
      ],
    };
  },
  emits: ["close"],
  components: {
    FilePond,
  },
  methods: {
    handleFilePondInit(event: any) {
      this.event.myFiles = event.target.files[0];
    },
    eventHandler() {
      console.log(this.event);
    },
  },
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
</style>
