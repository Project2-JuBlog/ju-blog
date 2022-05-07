<template>
  <section class="px-5 mx-4">
    <div>
      <NameSection></NameSection>
    </div>

    <div>
      <UserHeader></UserHeader>
    </div>

    <div>
      <GroupSide></GroupSide>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import UserHeader from "./UserHeader.vue";
import NameSection from "./NameSection.vue";
import GroupSide from "./GroupSide.vue";
export default defineComponent({
  components: { UserHeader, NameSection, GroupSide },
});
</script>
