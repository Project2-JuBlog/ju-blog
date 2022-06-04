<template>
  <section v-if="user.role !== 'company' && events.length > 0">
    <span class="px-5"> General Events</span>
    <BaseCard>
      <section class="py-2">
        <div>
          <ul v-if="events" class="list-navbar">
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
  props: ["events"],

  computed: {
    id(): any {
      return this.$route.params.id;
    },

    ...mapGetters({
      user: "Auth/userInfo",
    }),
  },
});
</script>
