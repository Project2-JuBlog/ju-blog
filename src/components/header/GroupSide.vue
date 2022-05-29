<template>
  <span class="px-5">Your Groups</span>
  <BaseCard>
    <ul class="list-navbar">
      <li v-for="group in groupsList" :key="group.id">
        <router-link
          :to="{ name: 'general', params: { id: group.id } }"
          active-class="active-list"
        >
          {{ group.name }}</router-link
        >
      </li>
    </ul>
  </BaseCard>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  data() {
    return {
      groups: [
        { id: 1, name: "KASIT" },
        { id: 2, name: "CIS" },
      ],
    };
  },
  methods: {
    ...mapActions({ getUser: "Auth/getUser" }),
  },
  computed: {
    ...mapGetters({
      userGroups: "Auth/userGroup",
    }),
    groupsList(): any {
      return this.userGroups;
    },
  },
  created() {
    this.getUser();
  },
});
</script>
