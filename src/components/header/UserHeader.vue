<template>
  <BaseCard>
    <ul class="list-navbar">
      <li
        class="list-feed"
        v-if="user.role == 'student' || user.role == 'doctor'"
      >
        <router-link
          :to="{ name: 'Feed', params: { id: user.id } }"
          active-class="active-list"
        >
          <!-- <img src="@/assets/img/feed-fill.svg" /> -->
          Feed</router-link
        >
      </li>
      <li
        class="list-home"
        v-if="user.role == 'company' || user.role == 'doctor'"
      >
        <router-link :to="{ name: 'HomeCompany' }" active-class="active-list"
          >Search</router-link
        >
      </li>
      <li class="list-friend">
        <router-link
          v-if="user.id"
          :to="{ name: 'Friends', params: { id: user.id } }"
          active-class="active-list"
          >Friends</router-link
        >
      </li>
      <li
        class="list-event"
        v-if="user.role == 'student' || user.role == 'doctor'"
      >
        <router-link
          :to="{ name: 'Events', params: { id: user.id } }"
          active-class="active-list"
          >Events</router-link
        >
      </li>
      <li
        class="list-saved"
        v-if="user.role == 'student' || user.role == 'doctor'"
      >
        <router-link
          :to="{ name: 'Saved', params: { id: user.id } }"
          active-class="active-list"
          >Saved</router-link
        >
      </li>
    </ul>
  </BaseCard>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  computed: {
    ...mapGetters({
      user: "Auth/userInfo",
    }),
  },
});
</script>
