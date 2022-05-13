<template>
  <section>
    <Navigation />
    <div class="row g-0 py-5 my-5">
      <div class="col-12 col-lg-6 col-xl-3">
        <SideNav />
      </div>
      <div class="col-12 col-lg-6">
        <section class="px-2 px-md-0 mx-2 mx-md-0">
          <router-view></router-view>
        </section>
      </div>
      <div class="col-12 col-lg-6 col-xl-3" v-if="!inChat && !inEvent">
        <section class="px-md-5 mx-md-4 px-2 mx-2">
          <EventSide></EventSide>
          <ImportantLink></ImportantLink>
        </section>
      </div>

      <div class="col-12 col-lg-6 col-xl-3" v-if="inEvent">
        <section class="px-md-5 mx-md-4 px-2 mx-2">
          <base-button class="mb-5 mx-3" @click="openEvent = !openEvent"
            >Add Event</base-button
          >
          <br />
          <ImportantLink></ImportantLink>
        </section>
      </div>
    </div>

    <MDBModal
      id="exampleModal"
      tabindex="-1"
      labelledby="exampleModalLabel"
      v-model="openEvent"
      centered
    >
      <AddEvent @close="openEvent = false" />
    </MDBModal>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Navigation from "@/components/header/Navigation.vue";
import SideNav from "@/components/header/SideNav.vue";
import ImportantLink from "@/components/header/ImportantLink.vue";
import EventSide from "@/components/header/EventSide.vue";

import AddEvent from "@/components/modal/AddEvent.vue";
export default defineComponent({
  data() {
    return {
      openEvent: false,
    };
  },
  components: { Navigation, SideNav, ImportantLink, AddEvent, EventSide },
  computed: {
    inChat() {
      if (this.$route.name == "PrivateChat") {
        return true;
      } else {
        return false;
      }
    },
    inEvent() {
      if (this.$route.name == "Events") {
        return true;
      } else {
        return false;
      }
    },
  },
});
</script>
