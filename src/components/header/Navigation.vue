<template>
  <nav class="header">
    <div class="container header__navbar">
      <div class="row py-3">
        <div
          class="d-flex justify-content-md-between justify-content-between align-items-center"
        >
          <div><img src="@/assets/img/navbar-img.png" width="150" /></div>

          <div @click.prevent="logoutHandler" class="cursor">
            <img src="@/assets/img/log-out.svg" width="30" height="30" />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  methods: {
    ...mapActions({
      logOut: "Auth/logOut",
    }),
    logoutHandler() {
      this.logOut();
    },
  },
});
</script>

<style scoped lang="scss">
.header {
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  width: 100%;
  .header__navbar {
    .search-bar {
      position: relative;
      .search-icon {
        position: absolute;
        left: 10px;
        top: 8px;
      }
      .form-control {
        border-radius: 20px;
        padding-left: 30px;
        width: 300px;
      }
      .form-control:focus {
        outline: none;
        box-shadow: none;
      }
    }
  }
  .cursor {
    cursor: pointer;
  }
}
</style>
