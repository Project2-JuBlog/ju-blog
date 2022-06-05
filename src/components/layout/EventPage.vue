<template>
  <div v-if="isLoading" class="col-9 d-flex justify-content-center">
    <MDBSpinner color="success" style="width: 5rem; height: 5rem"></MDBSpinner>
  </div>
  <section v-else class="col-9 event px-2">
    <div class="event-img">
      <img :src="generalEvent.event.myFiles" />
    </div>
    <div class="mt-3 event-detail">
      <div class="d-flex justify-content-between">
        <h4 class="my-3">{{ generalEvent.event.title }}</h4>

        <base-button
          v-if="generalEvent.createdBy.id !== user.id && !userEnroll"
          small
          @click.prevent="joinEvent"
        >
          Enroll</base-button
        >
        <base-button
          v-if="generalEvent.createdBy.id == user.id"
          @click.prevent="isEnrollOpen = true"
        >
          View All Enrollments</base-button
        >
        <base-button
          class="disable-btn"
          disabled="disabled"
          v-if="userEnroll"
          small
        >
          Enrolled</base-button
        >
      </div>
      <p
        v-if="generalEvent.createdBy.id !== user.id"
        class="text-end p-0 m-0 text-view text-decoration-underline"
        @click.prevent="isEnrollOpen = true"
      >
        View all Enrollment
      </p>
      <p class="m-0 p-0">
        Created By
        <router-link :to="'/home/profile/' + generalEvent.createdBy.id">
          <span class="nameHost">{{
            generalEvent.createdBy.firstName +
            " " +
            generalEvent.createdBy.lastName
          }}</span></router-link
        >
      </p>

      <div class="col-md-6 col-12 mt-5">
        <strong class="event-detail-overview"> Event Overview:</strong>
        <p>{{ generalEvent.event.about }}</p>
      </div>

      <div class="mt-5">
        <p>
          <span class="title">Date : </span
          ><span>{{ generalEvent.event.date }}</span>
        </p>
        <p v-if="generalEvent.event.type == 'university'">
          <span class="title">Location : </span
          ><span>{{ generalEvent.event.location }}</span>
        </p>
        <p v-else>
          <span class="title">Metting Url : </span
          ><span
            ><a :href="generalEvent.event.url" target="_blank"
              >click Here</a
            ></span
          >
        </p>
        <p>
          <span class="title">Enrollments : </span
          ><span>{{ generalEvent.enrolls.length }}</span>
        </p>
      </div>
    </div>
  </section>
  <MDBModal
    id="exampleModal"
    tabindex="-1"
    labelledby="exampleModalLabel"
    v-model="isEnrollOpen"
    centered
  >
    <ListEnroll :enroll="generalEvent.enrolls" @close="isEnrollOpen = false" />
  </MDBModal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";
import ListEnroll from "@/components/modal/ListEnroll.vue";

export default defineComponent({
  data() {
    return {
      isLoading: false,
      isEnrollOpen: false,
      isEnroll: false,
    };
  },
  components: { ListEnroll },
  computed: {
    ...mapGetters({
      generalEvent: "Event/generalEvent",
      user: "Auth/userInfo",
    }),

    userEnroll(): any {
      this.generalEvent.enrolls.map((i: any) => {
        if (this.user.id == i.id) {
          this.isEnroll = true;
        }
      });
      return this.isEnroll;
    },
  },
  methods: {
    ...mapActions({
      getGernralEvent: "Event/getGernralEvent",
      enrollEvent: "Event/enrollEvent",
    }),

    joinEvent() {
      this.enrollEvent({
        user: this.user,
        eventId: this.$route.params.Eventid,
        event: this.generalEvent,
      });
      this.isEnroll = true;
    },
  },
  async created() {
    this.isLoading = true;
    let id = this.$route.params.Eventid;
    await this.getGernralEvent(id);
    this.isLoading = false;
  },
});
</script>
<style scoped lang="scss">
@import "@/assets/sass/main";

.event {
  .name-div {
    position: relative;
  }
  &-img {
    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border-radius: 5px;
    }
  }
  &-detail {
    position: relative;
    .title,
    .nameHost {
      color: $color-button;
    }
    h4 {
      color: $color-button;
    }
    &-overview {
      color: $color-button;
    }
  }
  .text-view {
    font-size: 10px;
    position: absolute;
    top: 35px;
    right: 3px;
    cursor: pointer;
  }
  .disable-btn {
    background-color: rgba($color-button, 0.5);
  }
}
</style>
