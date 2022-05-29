<template>
  <div v-if="isLoading" class="col-12 col-md-6 px-2">loading...</div>
  <div class="col-12 col-md-6 px-2" v-else>
    <CreatePost :groupId="id" :postId="groupData.id" />
    <GroupPost :posts="groupData.posts" />
  </div>

  <div class="col-12 col-md-3 px-5" v-if="!isLoading">
    <GerenralEventSide :events="groupData.events" />
    <ImportantLink></ImportantLink>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import GroupPost from "@/components/base/GroupPost.vue";
import CreatePost from "@/components/base/CreatePost.vue";
import GerenralEventSide from "@/components/header/GerenralEventSide.vue";
import ImportantLink from "@/components/header/ImportantLink.vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  components: { GroupPost, CreatePost, GerenralEventSide, ImportantLink },

  data() {
    return {
      idNo: "" as any,
      isLoading: false,
    };
  },
  methods: {
    ...mapActions({
      getGroup: "Group/getGroup",
    }),
  },
  computed: {
    ...mapGetters({
      group: "Group/group",
    }),
    id(): any {
      this.idNo = this.$route.params.id;
      return this.idNo;
    },
    groupData() {
      return this.group;
    },
  },

  async created() {
    this.isLoading = true;

    await this.getGroup(this.$route.params.id);

    this.isLoading = false;

    this.$watch(
      () => this.$route.params.id,
      () => {
        this.isLoading = true;

        this.idNo = this.$route.params.id;

        this.getGroup(this.$route.params.id);
        this.isLoading = false;
      }
    );
  },
});
</script>
