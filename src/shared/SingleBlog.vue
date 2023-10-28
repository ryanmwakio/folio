<script setup>
import { RouterLink } from "vue-router";
import { defineProps } from "vue";

const props = defineProps(["blog"]);
</script>

<template>
  <div class="bg-white p-3 border rounded-xl">
    <div class="rounded-md w-full object-contain overflow-hidden">
      <img :src="blog.image" alt="" class="object-contain h-full w-full rounded-md" />
    </div>

    <div class="flex w-full my-3 gap-3 items-center">
      <span class="bg-gray-200 py-1 px-3 rounded-2xl text-xs">{{ blog.category }}</span>
      <span class="text-xs">{{ blog.mins }} min read</span>
    </div>

    <router-link to="/#" class="text-base font-semibold">{{ blog.title }}</router-link>
    <p class="text-xs text-slate-500 my-4">{{ blog.description }} ....</p>
  </div>
</template>

<style lang="scss" scoped></style>
