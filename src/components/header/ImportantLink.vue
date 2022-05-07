<template>
  <span class="px-5">Important Link</span>

  <BaseCard>
    <ul class="list-navbar">
      <li @click="changePath('https://elearning.ju.edu.jo/moodle10/')">
        Elearning
      </li>
      <li
        @click="
          changePath('https://regweb3.ju.edu.jo:4443/selfregapp/home.xhtml')
        "
      >
        Student Registration
      </li>
      <li @click="changePath('https://juexams.com/moodle/')">Juexams</li>
      <li @click="changePath('http://www.ju.edu.jo/ar/arabic/home.aspx')">
        Jordan University
      </li>
    </ul>
  </BaseCard>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    changePath(link: string) {
      window.open(link);
    },
  },
});
</script>
