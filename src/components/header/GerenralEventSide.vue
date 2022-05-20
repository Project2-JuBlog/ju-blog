<template>
  <span class="px-5"> General Events</span>

  <BaseCard>
    <section class="py-4">
      <div class="py-2">
        <ul v-if="events.length > 0">
          <li v-for="event in events" :key="event.name">
            <router-link
              :to="{ name: 'eventPage', params: { Eventid: event.id, id: id } }"
            >
              {{ event.name }} in {{ event.date }}
            </router-link>
          </li>
        </ul>
        <div v-else>
          <p class="text-center">No Events to See</p>
        </div>
      </div>
    </section>
  </BaseCard>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import moment from "moment";

export default defineComponent({
  data() {
    return {
      events: [
        { name: "Coding ", date: "01/05/2022", id: 1 },
        { name: "ACM Challenge ", date: "11/05/2022", id: 2 },
        { name: "iTravel ", date: "20/05/2022", id: 3 },
      ],
    };
  },
  computed: {
    id(): any {
      return this.$route.params.id;
    },
    eventId(): any {
      return this.$route.params.Eventid;
    },
  },
});
</script>
