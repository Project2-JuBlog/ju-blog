<template>
  <div v-if="isLoading" class="d-flex justify-content-center">
    <MDBSpinner color="success" style="width: 5rem; height: 5rem"></MDBSpinner>
  </div>
  <div v-else>
    <FullCalendar :options="calendarOptions" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "@fullcalendar/core/vdom"; // solves problem with Vite
import FullCalendar from "@fullcalendar/vue3";

import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },

  data() {
    return { isLoading: false };
  },
  computed: {
    ...mapGetters({
      user: "Auth/userInfo",
      eventTo: "Event/eventTo",
    }),

    calendarOptions() {
      let eventList = [] as any;

      this.eventTo?.map((i: any) => {
        eventList.push({
          title: i.title,
          backgroundColor: i?.backgroundColor ? i.backgroundColor : "#229f94",
          start: i.startDate,
          end: i.endDate,
        });
      });
      return {
        plugins: [dayGridPlugin, interactionPlugin],
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,dayGridWeek,dayGridDay",
        },

        events: eventList,
      };
    },
  },
  methods: {
    ...mapActions({
      getEvent: "Event/getEvent",
    }),
  },
  async created() {
    let id = this.$route.params.id;

    this.isLoading = true;
    await this.getEvent(id);
    this.isLoading = false;
  },
});
</script>
<style>
.fc .fc-daygrid-block-event .fc-event-title {
  white-space: pre-wrap !important;
}
.fc .fc-h-event {
  background-color: #229f94;
}
</style>
