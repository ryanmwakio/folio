<script setup>
import PageLoader from "./components/PageLoader.vue";
import { SocialChat } from "vue-social-chat";

const attendants = [
  {
    app: "whatsapp",
    label: "Software Developer",
    name: "Ryan Mwakio",
    number: "254742040327",
    avatar: {
      src: "https://avatars.githubusercontent.com/u/73101551?v=4",
      alt: "Ryan Mwakio"
    }
  }
  // ...
];
</script>

<template>
  <PageLoader />
  <RouterView />
  <SocialChat icon :attendants="attendants">
    <template #header>
      <p>Click to chat on WhatsApp.</p>
    </template>
    <template #button>
      <div class="vsc-popup-button">
        <img
          src="https://raw.githubusercontent.com/ktquez/vue-social-chat/master/src/icons/whatsapp.svg"
          alt="icon whatsapp"
          aria-hidden="true"
        />
      </div>
    </template>
    <template #footer>
      <small>Available hours: 8am to 6pm</small>
    </template>
  </SocialChat>
</template>

<style>
.vsc-popup-button {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  width: 100%;
  height: 100%;
  background-color: #333333 !important;
}
</style>
