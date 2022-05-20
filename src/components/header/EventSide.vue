<template>
  <div v-if="user.role !== 'company'">
    <span class="px-5"> Your Events</span>

    <BaseCard>
      <section class="py-4">
        <div class="text-center px-5">
          <p class="p-0 m-0">{{ day }}</p>
          <p>{{ date }}</p>
        </div>
        <div class="border-top py-2">
          <ul v-if="events.length > 0">
            <li v-for="event in events" :key="event.name">
              {{ event.name }} in {{ event.date }}
            </li>
          </ul>
          <div v-else>
            <p class="text-center">No Events to do</p>
          </div>
        </div>
      </section>
    </BaseCard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import moment from "moment";
import { mapGetters } from "vuex";

export default defineComponent({
  data() {
    return {
      day: "",
      date: "",
      events: [{ name: "Learn React", date: "01/05/2022" }],
    };
  },
  computed: {
    ...mapGetters({
      user: "Auth/user",
    }),
  },
  created() {
    const day = moment().format("dddd");
    const date = moment().format("DD/MM/yyyy");
    this.day = day;
    this.date = date;
  },
});
</script>
