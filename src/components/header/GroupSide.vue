<template>
  <span class="px-5">Your Groups</span>
  <BaseCard>
    <ul class="list-navbar">
      <li v-for="group in groups" :key="group.id">
        <router-link
          :to="{ name: 'group', params: { id: group.id } }"
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

export default defineComponent({
  data() {
    return {
      groups: [
        { id: 1, name: "KASIT" },
        { id: 2, name: "CIS" },
      ],
    };
  },
});
</script>
