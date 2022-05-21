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
  box-sizing: border-box;
  .list-navbar {
    list-style: none;
    padding-block: 10px;
    a {
      text-decoration: none;
    }
    li,
    li a,
    a li {
      color: $gray;
      text-decoration: none;
      font-size: 18px;
      padding-inline: 14px;
      margin-block: 10px;
      height: 30px;
      display: flex;
      flex-direction: row;
      align-content: center;
      align-items: center;
      cursor: pointer;
      line-height: 1.3rem;
    }
    li a:hover,
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

    .list-home {
      a {
        &::before {
          content: "";
          background-image: url("@/assets/img/search-.svg");
          background-position: center;
          background-size: cover;
          width: 20px;
          height: 20px;
          margin-right: 9px;
        }
      }
    }
    .list-home {
      .active-list {
        color: $color-button !important;
        border-left: 3px solid $color-button !important;
        &::before {
          content: "";
          background-image: url("@/assets/img/search- filled.svg") !important;
        }
      }
    }
  }
}
</style>
