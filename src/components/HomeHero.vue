<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const viewportWidth = ref(window.innerWidth);

const japaneseText = "オタクになりましょう";
const japaneseLetters = japaneseText.split("");

const englishText = "Portfolio";
const englishLetters = englishText.split("");

const handleResize = () => {
  viewportWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

let image1 =
  "https://images.unsplash.com/photo-1527607976958-7cbb4a6d0131?auto=format&fit=crop&q=80&w=1394&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
let image2 =
  "https://images.unsplash.com/photo-1585241645927-c7a8e5840c42?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
</script>

<template>
  <section
    class="container relative flex items-center justify-center h-screen p-2 mx-auto bg-bottom md:bg-center bg-contain md:bg-cover"
    :style="{
      background: viewportWidth > 768 ? `url(${image1})` : `url(${image2})`,
      maxWidth: '1536px'
    }"
  >
    <div class="text-center md:text-end">
      <h1 class="text-5xl font-medium text-white md:text-8xl" data-portfolio>Portfolio</h1>
      <h3 class="my-2 text-sm font-normal text-white md:text-xl">Software Developer</h3>
      <h3 class="text-sm font-normal text-white md:text-xl">Ryan Mwakio</h3>
    </div>

    <p class="absolute text-xs text-white bottom-5 right-10 font-extralight">
      Welcome to the abyss.
    </p>
  </section>
</template>

<style lang="scss" scoped>
@keyframes xspin {
  50% {
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
  }
}

.text-transition {
  animation: xspin 2s; // Adjust the animation duration as needed
  animation-fill-mode: forwards;
}
</style>
