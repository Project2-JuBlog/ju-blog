<template>
  <section v-if="user.role !== 'company'">
    <span class="px-5"> General Events</span>

    <BaseCard>
      <section class="py-2">
        <div>
          <ul v-if="events.length > 0" class="list-navbar">
            <router-link
              v-for="event in events"
              :key="event.name"
              :to="{
                name: 'eventPage',
                params: { Eventid: event.id, id: id },
              }"
              ><li>{{ event.name }} in {{ event.date }}</li>
            </router-link>
          </ul>
          <div v-else>
            <p class="text-center">No Events to See</p>
          </div>
        </div>
      </section>
    </BaseCard>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

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
    ...mapGetters({
      user: "Auth/user",
    }),
  },
});
</script>
