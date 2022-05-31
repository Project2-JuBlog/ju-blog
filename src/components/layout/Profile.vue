<template>
  <div class="profile">
    <section class="row profile-header border-bottom border-2 py-3">
      <div class="col-3">
        <p class="text-center rounded-circle name-section p-1">
          {{ userData.firstName }}
        </p>
      </div>
      <div class="col-7 profile-header-detail">
        <div class="d-flex justify-content-between">
          <h1 class="">
            {{ userData.firstName + " " + userData.lastName }}
          </h1>
          <div v-if="user.id !== userData.id">
            <base-button v-if="!sentD" @click="addFriend" small
              >add Friend</base-button
            >
            <base-button v-else @click="addFriend" small
              >Request Sended</base-button
            >
          </div>
        </div>
        <h4>{{ userData.collage }} -{{ userData.major }}</h4>
        <h4>
          {{ userData.status }} -
          <span v-if="userData.status !== 'Student'"
            >from {{ userData?.gradYear }}</span
          >
          <span v-else>{{ userData?.acadYear }} Year</span>
        </h4>
      </div>
      <div class="col-2 d-flex align-items-end">
        <div v-if="user.role == 'doctor'">
          <BaseButton small @click="isRecommand = !isRecommand"
            >Recommended</BaseButton
          >
        </div>
        <img
          v-else-if="user.id == userData.id"
          src="@/assets/img/edit.svg"
          @click="isEdit = !isEdit"
          class="img-edit"
          height="20"
        />
      </div>
    </section>
    <div class="profile-content mt-5">
      <MDBTabs v-model="activeTabId3">
        <!-- Tabs navs -->
        <MDBTabNav fill tabsClasses="mb-3">
          <MDBTabItem tabId="info" href="info">Information</MDBTabItem>

          <MDBTabItem tabId="reco" href="reco">Recommendations</MDBTabItem>
        </MDBTabNav>
        <!-- Tabs navs -->
        <!-- Tabs content -->
        <MDBTabContent>
          <MDBTabPane tabId="info"
            ><ProfileInfo :userData="userData"
          /></MDBTabPane>
          <MDBTabPane tabId="reco"
            ><ProfileRecom :userData="userData?.recommendation"
          /></MDBTabPane>
        </MDBTabContent>
        <!-- Tabs content -->
      </MDBTabs>
    </div>
  </div>

  <MDBModal
    id="exampleModal"
    tabindex="-1"
    labelledby="exampleModalLabel"
    v-model="isEdit"
    centered
  >
    <EditProfile @close="isEdit = false" :user="userData" />
  </MDBModal>

  <MDBModal
    id="exampleModal"
    tabindex="-1"
    labelledby="exampleModalLabel"
    v-model="isRecommand"
    centered
  >
    <Recommand @close="isRecommand = false" />
  </MDBModal>
</template>

<script lang="ts">
import EditProfile from "@/components/modal/EditProfile.vue";
import ProfileInfo from "@/components/base/ProfileInfo.vue";
import ProfileRecom from "@/components/base/ProfileRecom.vue";

import Recommand from "@/components/modal/Recommand.vue";
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";

export default defineComponent({
  components: { EditProfile, ProfileInfo, ProfileRecom, Recommand },
  data() {
    return {
      isEdit: false,
      activeTabId3: "info",
      isRecommand: false,
      isSent: false,
    };
  },
  computed: {
    ...mapGetters({
      user: "Auth/userInfo",
      userProfile: "Profile/userProfile",
      sent: "Friend/sent",
    }),
    userData(): any {
      return this.userProfile;
    },
    sentD(): any {
      this.sent?.map((item: any) => {
        if (item.id == this.userProfile.id) {
          this.isSent = true;
        } else {
          this.isSent = false;
        }
      });
      return this.isSent;
    },
  },
  methods: {
    ...mapActions({
      getUserCv: "Profile/getUserCv",
      addFrineds: "Friend/addFrined",
      getFreindData: "Friend/getFreindData",
    }),
    addFriend() {
      this.addFrineds({ myUser: this.user, frinedUser: this.userProfile });
    },
  },
  async created() {
    let id = this.$route.params.id;
    console.log(this.user);

    await this.getUserCv(id);
    await this.getFreindData(this.user.id);
  },
});
</script>
<style lang="scss">
@import "@/assets/sass/main";
.profile {
  &-header {
    &-detail {
      h1 {
        color: $color-button;
      }
    }
    .img-edit {
      cursor: pointer;
    }
  }
  .name-section {
    color: white;
    background-color: $color-button;
    width: 150px;
    height: 150px;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: center;
    word-break: break-all;
  }
}
.nav-tabs {
  border-radius: 20px;
  border: 0px;
}
.nav-fill .nav-item .nav-link,
.nav-justified .nav-item .nav-link {
  background-color: #ebeeee !important;
  color: $color-button;
}
.nav-tabs .nav-link.active {
  background-color: $color-button !important;
  color: white;
}
</style>
