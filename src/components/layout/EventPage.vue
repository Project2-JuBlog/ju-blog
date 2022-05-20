<template>
  <section class="col-9 event px-2">
    <div class="event-img">
      <img src="@/assets/img/cover.jpg" />
    </div>
    <div class="mt-3 event-detail">
      <div class="d-flex justify-content-between">
        <h4 class="my-3">{{ event.title }}{{ id }}</h4>

        <base-button small @click.prevent="joinEvent"> Enroll</base-button>
      </div>

      <div class="col-md-6 col-12 mt-5">
        <strong class="event-detail-overview"> Event Overview:</strong>
        <p>{{ event.about }}</p>
      </div>

      <div class="mt-5">
        <p>
          <span class="title">Date : </span><span>{{ event.date }}</span>
        </p>
        <p v-if="event.type == 'university'">
          <span class="title">Location : </span
          ><span>{{ event.location }}</span>
        </p>
        <p v-else>
          <span class="title">Metting Url : </span
          ><span><a :href="event.url">click Here</a></span>
        </p>
        <p>
          <span class="title">Enrollments : </span
          ><span>{{ event.enrollments }}</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      event: {
        title: "3RD INTERNATIONAL CONFERENCE OF SPORT SCIENCE",
        type: "university",
        location: "JORDAN - UJ",
        url: "",
        date: "24-05-2022",
        group: "1",
        myFiles: "",
        about:
          "​Aims to bring together leading scientists, scholars, researchers, experts and leaders from around the world to share and discuss both theoretical and practical knowledge about sport and health science, knowledge, expertise, and research results in sports and physical education sciences. It focuses on current issues on various fields of sports and physical activity and its impact on life in all aspects. 3ICSS with Advanced Workshop on Sports sciences. It will provide a venue for discussion and ollaboration ideas between and among professionals in meeting the challenges and opportunities for more responsive and relevant sports and physical education programs and activities around the worldwide.",
        enrollments: 5,
      },
    };
  },
  computed: {
    id(): any {
      return this.$route.params.Eventid;
    },
  },
  methods: {
    joinEvent() {
      console.log("joined");
    },
  },
});
</script>
<style scoped lang="scss">
@import "@/assets/sass/main";

.event {
  &-img {
    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border-radius: 5px;
    }
  }
  &-detail {
    .title {
      color: $color-button;
    }
    h4 {
      color: $color-button;
    }
    &-overview {
      color: $color-button;
    }
  }
}
</style>
