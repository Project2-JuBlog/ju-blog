<template>
  <div v-if="isLoading">loading</div>
  <div v-else>
    <h4>Friend Requests</h4>
    <BaseCard2>
      <div v-for="i in request" :key="i" class="row mb-4">
        <div class="col-sm-2 col-xl-1 col-12">
          <router-link :to="'/home/profile/' + i.id">
            <!-- <img src="@/assets/img/rawanimage.png" width="55" height="55" /> -->
            <p class="text-center rounded-circle name-sections p-1">
              {{ i.fname }}
            </p>
          </router-link>
        </div>
        <div
          class="col-sm-10 col-xl-11 col-12 ps-3 border-bottom border-2 pb-3"
        >
          <div
            class="d-flex justify-content-between align-content-center align-items-center"
          >
            <div>
              <h5 class="p-0 m-0 fw-bold">{{ i.fname }} {{ i.lname }}</h5>
            </div>
            <div class="d-flex flex-column gap-2">
              <button class="btn d-block rounded-pill color-button">
                Accept
              </button>
              <button class="btn d-block btn-sm btn-danger rounded-pill">
                Delay
              </button>
            </div>
          </div>
        </div>
      </div>
    </BaseCard2>
    <h4>My Friend</h4>
    <BaseCard2>
      <div v-for="i in friends" :key="i" class="row mb-4">
        <div class="col-sm-2 col-xl-1 col-12">
          <img src="@/assets/img/rawanimage.png" width="55" height="55" />
        </div>
        <div
          class="col-sm-10 col-xl-11 col-12 ps-3 border-bottom border-2 pb-3"
        >
          <div class="d-flex justify-content-between">
            <div>
              <p class="p-0 m-0 fw-bold">Rawan Abdullah</p>
              <p class="p-0 m-0"><span>KASIT - CS</span></p>
              <p class="p-0 m-0">Frontend Developer</p>
            </div>
            <div class="d-flex flex-column gap-2">
              <button class="btn d-block rounded-pill color-button">
                Message
              </button>
              <button class="btn d-block btn-sm btn-danger rounded-pill">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </BaseCard2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    ...mapGetters({
      user: "Auth/userInfo",
      friends: "Friend/friends",
      request: "Friend/request",
    }),
  },
  methods: {
    ...mapActions({ getFreindData: "Friend/getFreindData" }),
  },
  async created() {
    this.isLoading = true;
    console.log(this.user);

    await this.getFreindData(this.user.id);
    this.isLoading = false;
  },
});
</script>
<style lang="scss">
@import "@/assets/sass/main";
.color-button {
  background-color: $color-button;
  color: white;
}
.cursor {
  cursor: pointer;
}
.name-sections {
  color: white;
  background-color: $color-button;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
  word-break: break-all;
  text-decoration: none;
}
</style>
