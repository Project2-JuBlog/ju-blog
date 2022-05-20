<template>
  <FullCalendar :options="calendarOptions" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "@fullcalendar/core/vdom"; // solves problem with Vite
import FullCalendar from "@fullcalendar/vue3";

import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
export default defineComponent({
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },

  data() {
    return {};
  },
  computed: {
    calendarOptions() {
      return {
        plugins: [dayGridPlugin, interactionPlugin],
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,dayGridWeek,dayGridDay",
        },
        events: [
          {
            title: "Learn React section 1 and Section 2",
            backgroundColor: "#229f94",
            date: "2022-05-18",
          },
          { title: "event 2", date: "2022-05-21" },
        ],
      };
    },
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
