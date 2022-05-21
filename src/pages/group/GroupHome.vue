<template>
  <div class="col-12 col-md-6 px-2">
    <CreatePost />
    <GroupPost />
  </div>
  <div class="col-12 col-md-3 px-5">
    <GerenralEventSide />
    <ImportantLink></ImportantLink>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import GroupPost from "@/components/base/GroupPost.vue";
import CreatePost from "@/components/base/CreatePost.vue";
import GerenralEventSide from "@/components/header/GerenralEventSide.vue";
import ImportantLink from "@/components/header/ImportantLink.vue";

export default defineComponent({
  components: { GroupPost, CreatePost, GerenralEventSide, ImportantLink },

  data() {
    return {
      idNo: "" as any,
    };
  },
  computed: {
    id(): any {
      this.idNo = this.$route.params.id;
      return this.idNo;
    },
  },
  //   created() {
  //     this.$watch(
  //       () => this.$route.query.id,
  //       () => {
  //         this.idNo = this.$route.query.id;
  //       }
  //     );
  //   },
});
</script>
