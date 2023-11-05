<script setup>
import { reactive } from "vue";
import SingleBlog from "../shared/SingleBlog.vue";

const blogs = reactive([
  {
    id: 1,
    title: "Libuv Threading and synchronization primitives",
    category: "Development",
    mins: "8",
    description:
      "Behind the scenes, Libuv employs threading and synchronization primitives to manage concurrent tasks, making it a crucial part of its architecture. In this blog, we'll delve into the world of Libuv's threading and synchronization primitives and understand how they contribute to its robustness and performance",
    image:
      "https://images.unsplash.com/photo-1683384546413-d207b5677dc0?auto=format&fit=crop&q=80&w=1476&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    title: "php-fpm vs fastcgi",
    category: "Development",
    mins: "3",
    description:
      "When it comes to serving PHP applications, two popular options are PHP-FPM (FastCGI Process Manager) and the FastCGI protocol itself. Both play essential roles in web hosting environments and offer distinct advantages and use cases. In this blog, we will explore the differences and similarities between PHP-FPM",
    image:
      "https://images.unsplash.com/photo-1556792189-55769c8dfbac?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    title: "Teleport vs v-on:emit",
    category: "Development",
    mins: "5",
    description:
      "Teleport: Efficient Component Rendering teleport is a feature introduced in Vue 3. It allows you to render a component or a part of a component at a different location in the DOM, typically outside of its parent or ancestor components. Here are some of the key aspects of teleport:Render Location: You can render content at a different location",
    image:
      "https://images.unsplash.com/photo-1617042375876-a13e36732a04?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    title: "60:30:10 color combo design",
    category: "Development",
    mins: "6",
    description:
      "Color plays a fundamental role in design, and choosing the right color combinations is essential for creating visually appealing and harmonious compositions. One popular and effective color combination strategy is the 60:30:10 rule. In this blog, we will explore the concept of the 60:30:10 color combo, its significance",
    image:
      "https://images.unsplash.com/photo-1600832331197-ad575931911b?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
]);
</script>

<template>
  <section class="bg-white px-3 md:px-10 md:py-0 mx-auto">
    <div class="bg-white w-full px-5 md:px-16 pt-0 container pb-10 rounded-xl">
      <h2 class="text-black text-xl md:text-3xl mb-7 flex items-center gap-3">
        <i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
            />
          </svg>
        </i>
        recent blogs
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 px-5" v-motion-slide-visible-once-bottom>
        <single-blog v-for="blog in blogs" :key="blog.id" :blog="blog"></single-blog>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
