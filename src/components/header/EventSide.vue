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
          <ul v-if="eventList.length > 0">
            <li v-for="event in eventList" :key="event.title">
              <span>
                {{ event.title }} in
                {{ moment(event.startDate).format("DD-MM-YYYY hh:mm") }}</span
              >
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
import { mapGetters, mapActions } from "vuex";

export default defineComponent({
  props: ["id"],
  data() {
    return {
      day: "",
      date: "",
      events: [{ name: "Learn React", date: "01/05/2022" }],
    };
  },
  computed: {
    ...mapGetters({
      user: "Auth/userInfo",
      eventTo: "Event/eventTo",
    }),
    eventList(): any {
      let result = [] as any;
      if (this.eventTo?.length > 0) {
        this.eventTo?.map((i: any) => {
          let day = new Date() as any;
          let day2 = new Date(i.startDate);
          if (day < day2) {
            result.push(i);
          }
        });
      }
      return result;
    },
  },
  methods: {
    ...mapActions({
      getEvent: "Event/getEvent",
    }),
  },
  async created() {
    setTimeout(async () => {
      await this.getEvent(this.user.id);
    }, 800);

    const day = moment().format("dddd");
    const date = moment().format("DD/MM/yyyy");
    this.day = day;
    this.date = date;
  },
});
</script>
