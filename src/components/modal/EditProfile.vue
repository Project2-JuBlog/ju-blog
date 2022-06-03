<template>
  <MDBModalHeader>
    <MDBModalTitle id="exampleModalLabel"> Information </MDBModalTitle>
  </MDBModalHeader>
  <MDBModalBody>
    <form class="form d-flex flex-column gap-2">
      <div class="col-3">
        <file-pond
          name="test"
          ref="pond"
          class="file-pond"
          class-name="my-pond"
          label-idle="uploade picture"
          accepted-file-types="image/jpeg, image/png,image/gif,image/jpg"
          :allow-multiple="false"
          @change="handleFilePondInit"
          styleButtonRemoveItemPosition="bottom center"
          stylePanelLayout="circle"
          stylePanelAspectRatio="1:1"
        />
      </div>
      <label for="email" class="col-12" v-if="user.role == 'student'">
        Phone Number:
        <input
          type="tel"
          class="form-control"
          v-model="Info.phone"
          placeholder="+962"
        />
      </label>
      <div class="row">
        <label class="col-11">
          Languages:
          <div v-for="lang in languageCounter" :key="lang" class="input-field">
            <input
              class="form-control mb-2"
              type="text"
              v-model="Info.language[lang - 1]"
            />
            <img
              src="@/assets/img/close.svg"
              @click="removeLang(lang - 1)"
              class="img-close"
            />
          </div>
        </label>
        <div class="col-1 align-self-center mt-2">
          <img
            src="@/assets/img/plus.svg"
            @click="languageCounter++"
            width="15"
            height="15"
          />
        </div>
      </div>

      <div class="row">
        <label class="col-11">
          Skills :
          <div v-for="skill in skillsCounter" :key="skill" class="input-field">
            <input
              class="form-control mb-2"
              type="text"
              v-model="Info.skills[skill - 1]"
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

      <div class="row">
        <label class="col-11">
          Experience:
          <div v-for="exp in experienceCounter" :key="exp" class="input-field">
            <input
              class="form-control mb-2"
              type="text"
              v-model="Info.experience[exp - 1]"
            />
            <img
              src="@/assets/img/close.svg"
              @click="removeExp(exp - 1)"
              class="img-close"
            />
          </div>
        </label>
        <div class="col-1 align-self-center mt-2">
          <img
            src="@/assets/img/plus.svg"
            @click="experienceCounter++"
            width="15"
            height="15"
          />
        </div>
      </div>

      <div class="row">
        <label class="col-11">
          Volunteer:
          <div v-for="vol in volunteerCounter" :key="vol" class="input-field">
            <input
              class="form-control mb-2"
              type="text"
              v-model="Info.volunteer[vol - 1]"
            />
            <img
              src="@/assets/img/close.svg"
              @click="removeVolunteer(vol - 1)"
              class="img-close"
            />
          </div>
        </label>
        <div class="col-1 align-self-center mt-2">
          <img
            src="@/assets/img/plus.svg"
            @click="volunteerCounter++"
            width="15"
            height="15"
          />
        </div>
      </div>

      <div>
        Certificates:
        <file-pond
          name="test"
          class-name="my-pond"
          label-idle="uploade Files"
          accepted-file-types="image/jpeg, image/png,image/gif,image/jpg,application/pdf,application/doc, application/docx,.docx"
          :allow-multiple="true"
          @change="handleFileCoverImagePondInit"
        />
      </div>
    </form>
  </MDBModalBody>
  <MDBModalFooter class="d-flex justify-content-center">
    <MDBBtn class="btns-save rounded-pill" @click.prevent="SubmitEdit"
      >Save changes</MDBBtn
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
import { mapActions, mapGetters } from "vuex";
const FilePond: any = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview
);

export default defineComponent({
  emits: ["close"],
  props: ["user"],
  data() {
    return {
      Info: {
        myFiles: this.user?.file,
        language: this.user?.languages,
        skills: this.user?.skills,
        experience: this.user?.experiense,
        volunteer: this.user?.volunteer,
        certificate: this.user?.Certificate,
        phone: this.user?.phoneNumber,
      },

      file: "" as any,
      volunteerCounter: this.user?.volunteer?.length as number,
      experienceCounter: this.user?.experiense?.length as number,
      languageCounter: this.user?.languages?.length as number,
      skillsCounter: this.user?.skills?.length as number,
    };
  },
  computed: {
    ...mapGetters({
      userProfile: "Profile/userProfile",
    }),
  },
  components: {
    FilePond,
  },
  methods: {
    ...mapActions({
      editUserCv: "Profile/editUserCv",
    }),
    SubmitEdit() {
      this.editUserCv({ id: this.user.id, info: this.Info });
      this.$emit("close");
    },
    handleFilePondInit(event: any) {
      this.Info.myFiles = event.target.files[0];
    },
    removeLang(item: any) {
      this.Info.language.splice(item, 1);
      this.languageCounter--;
    },
    removeSkills(item: any) {
      this.Info.skills.splice(item, 1);
      this.skillsCounter--;
    },
    removeExp(item: any) {
      this.Info.experience.splice(item, 1);
      this.experienceCounter--;
    },
    removeVolunteer(item: any) {
      this.Info.volunteer.splice(item, 1);
      this.volunteerCounter--;
    },
    handleFileCoverImagePondInit(event: any) {
      for (var i = 0; i < event.target.files.length; i++) {
        this.file = event.target.files[i];
        this.Info.certificate.push(this.file);
      }
    },
  },
});
</script>
<style lang="scss">
@import "@/assets/sass/main";
.btns-save {
  background-color: $color-button;
  color: $color-white;
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
