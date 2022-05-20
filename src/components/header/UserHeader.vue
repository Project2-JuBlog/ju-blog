<template>
  <BaseCard>
    <ul class="list-navbar">
      <li
        class="list-feed"
        v-if="user.role == 'student' || user.role == 'doctor'"
      >
        <router-link :to="{ name: 'Feed' }" active-class="active-list">
          <!-- <img src="@/assets/img/feed-fill.svg" /> -->
          Feed</router-link
        >
      </li>
      <li class="list-home" v-if="user.role == 'company'">
        <router-link :to="{ name: 'HomeCompany' }" active-class="active-list"
          >Home</router-link
        >
      </li>
      <li class="list-friend">
        <router-link :to="{ name: 'Friends' }" active-class="active-list"
          >Friends</router-link
        >
      </li>
      <li
        class="list-event"
        v-if="user.role == 'student' || user.role == 'doctor'"
      >
        <router-link :to="{ name: 'Events' }" active-class="active-list"
          >Events</router-link
        >
      </li>
      <li
        class="list-saved"
        v-if="user.role == 'student' || user.role == 'doctor'"
      >
        <router-link :to="{ name: 'Saved' }" active-class="active-list"
          >Saved</router-link
        >
      </li>
      <li class="list-chat">
        <router-link :to="{ name: 'PrivateChat' }" active-class="active-list"
          >Private Chat</router-link
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
      user: "Auth/user",
    }),
  },
});
</script>
