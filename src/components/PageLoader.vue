<script setup>
import { ref, onMounted } from "vue";

let isLoaded = ref(false);

onMounted(() => {
  document.onreadystatechange = () => {
    if (document.readyState == "complete") {
      isLoaded.value = true;
    }
  };
});
</script>

<template>
  <div class="page-loader" v-if="!isLoaded">
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
  </div>
</template>

<style lang="scss" scoped>
$colors: #8cc271, #69beeb, #f5aa39, #e9643b;

.page-loader {
  @apply flex justify-center items-center fixed top-0 left-0 w-screen h-screen bg-charcoal-black z-50;
}

.cube {
  @apply mr-3 rounded-md;
  width: 40px;
  height: 40px;

  @for $i from 1 through length($colors) {
    &:nth-child(#{$i}) {
      background-color: nth($colors, $i);
    }
  }

  &:first-child {
    animation: left 1s infinite;
  }
  &:last-child {
    animation: right 1s infinite 0.5s;
  }
}

@keyframes left {
  40% {
    transform: translateX(-60px);
  }
  50% {
    transform: translateX(0);
  }
}
@keyframes right {
  40% {
    transform: translateX(60px);
  }
  50% {
    transform: translateX(0);
  }
}
</style>
