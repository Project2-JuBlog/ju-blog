<template>
  <div class="base__card py-2 px-2 mb-5">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss">
@import "@/assets/sass/main";

.base__card {
  background: #fbfcfc;
  border: 2px solid #c6c7c7;
  border-radius: 30px;
  .list-navbar {
    list-style: none;
    padding-block: 10px;
    li,
    li a {
      color: $gray;
      text-decoration: none;
      font-size: 20px;
      padding-inline: 14px;
      margin-block: 10px;
      height: 30px;
      display: flex;
      flex-direction: row;
      align-content: center;
      align-items: center;
      cursor: pointer;
    }
    li:hover {
      color: $color-button;
    }
    .active-list {
      color: $color-button !important;
      border-left: 3px solid $color-button !important;
    }
    .list-feed {
      a {
        &::before {
          content: "";
          background-image: url("@/assets/img/feed.svg");
          background-position: center;
          background-size: cover;
          width: 20px;
          height: 20px;
          margin-right: 9px;
        }
      }
    }
    .list-feed {
      .active-list {
        color: $color-button !important;
        border-left: 3px solid $color-button !important;
        &::before {
          content: "";
          background-image: url("@/assets/img/feed-fill.svg") !important;
        }
      }
    }

    .list-friend {
      a {
        &::before {
          content: "";
          background-image: url("@/assets/img/friend.svg");
          background-position: center;
          background-size: cover;
          width: 20px;
          height: 20px;
          margin-right: 9px;
        }
      }
    }
    .list-friend {
      .active-list {
        color: $color-button !important;
        border-left: 3px solid $color-button !important;
        &::before {
          content: "";
          background-image: url("@/assets/img/friend-fill.svg") !important;
        }
      }
    }

    .list-event {
      a {
        &::before {
          content: "";
          background-image: url("@/assets/img/event.svg");
          background-position: center;
          background-size: cover;
          width: 20px;
          height: 20px;
          margin-right: 9px;
        }
      }
    }
    .list-event {
      .active-list {
        color: $color-button !important;
        border-left: 3px solid $color-button !important;
        &::before {
          content: "";
          background-image: url("@/assets/img/event-fill.svg") !important;
        }
      }
    }

    .list-saved {
      a {
        &::before {
          content: "";
          background-image: url("@/assets/img/saved.svg");
          background-position: center;
          background-size: cover;
          width: 20px;
          height: 20px;
          margin-right: 9px;
        }
      }
    }
    .list-saved {
      .active-list {
        color: $color-button !important;
        border-left: 3px solid $color-button !important;
        &::before {
          content: "";
          background-image: url("@/assets/img/saved-fill.svg") !important;
        }
      }
    }

    .list-chat {
      a {
        &::before {
          content: "";
          background-image: url("@/assets/img/chat.svg");
          background-position: center;
          background-size: cover;
          width: 20px;
          height: 20px;
          margin-right: 9px;
        }
      }
    }
    .list-chat {
      .active-list {
        color: $color-button !important;
        border-left: 3px solid $color-button !important;
        &::before {
          content: "";
          background-image: url("@/assets/img/chat-fill.svg") !important;
        }
      }
    }
  }
}
</style>
