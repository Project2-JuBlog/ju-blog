<template>
  <div class="profile">
    <section class="row profile-header border-bottom border-2 py-3">
      <div class="col-3">
        <img
          :src="require('@/assets/img/' + userImage)"
          width="150"
          height="150"
        />
      </div>
      <div class="col-7 profile-header-detail">
        <h1 class="mt-5 mb-4">{{ userData.name }}</h1>
        <h4>KASIT - CIS</h4>
      </div>
      <div class="col-2 d-flex align-items-end">
        <div v-if="user.role == 'company'">
          <BaseButton small @click="isRecommand = !isRecommand"
            >Recommended</BaseButton
          >
        </div>
        <img
          v-else
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
          <MDBTabPane tabId="info"><ProfileInfo /></MDBTabPane>
          <MDBTabPane tabId="reco"><ProfileRecom /></MDBTabPane>
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
    <EditProfile @close="isEdit = false" />
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
import { mapGetters } from "vuex";

export default defineComponent({
  components: { EditProfile, ProfileInfo, ProfileRecom, Recommand },
  data() {
    return {
      isEdit: false,
      activeTabId3: "info",
      isRecommand: false,
    };
  },
  computed: {
    ...mapGetters({
      user: "Auth/user",
    }),
    userData(): any {
      return this.user;
    },
    userImage(): any {
      return this.user.image;
    },
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
