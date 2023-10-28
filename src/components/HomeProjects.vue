<script setup>
import { reactive } from "vue";
import vue3HorizontalList from "vue3-horizontal-list";

const items = reactive(
  [...Array(20).keys()].map((i) => {
    return { i, title: `Responsive`, content: `Content` };
  })
);

const projects = reactive([
  {
    id: 1,
    title: "Golobe",
    link: "https://world-golobe.netlify.app/",
    image: "project-1.jpeg",
    description: ""
  },
  {
    id: 2,
    title: "VietnamfactoryB2B",
    link: "https://vietnamfactoryb2b.com/",
    image: "project-2.jpeg",
    description: ""
  },
  {
    id: 3,
    title: "Tunifi Music",
    link: "https://tunifi.netlify.app/",
    image: "project-3.jpeg",
    description: ""
  },
  {
    id: 4,
    title: "Eshop",
    link: "https://eshop-it00.onrender.com/",
    image: "project-4.jpeg",
    description: ""
  },
  {
    id: 5,
    title: "Urbancribs API",
    link: "https://urbancribs.onrender.com/",
    image: "project-5.jpeg",
    description: ""
  },
  {
    id: 6,
    title: "Hotel UI",
    link: "https://bahariresort.netlify.app/",
    image: "project-6.jpeg",
    description: ""
  },
  {
    id: 7,
    title: "Electronics store",
    link: "https://r-electronics.netlify.app/",
    image: "project-7.jpeg",
    description: ""
  }
]);
</script>

<template>
  <section class="p-3 mx-auto bg-white md:p-10">
    <div class="container w-full px-5 py-10 bg-white rounded-none md:px-16 pb-0">
      <h2 class="text-black text-xl md:text-3xl mb-5 flex items-center gap-3">
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
        featured projects.
      </h2>
      <p class="text-sm font-light text-black md:text-normal">Some of my recent works.</p>
      <div class="">
        <vue3-horizontal-list
          :items="projects"
          :options="{
            responsive: [{ end: 576, size: 1 }, { start: 576, end: 768, size: 2 }, { size: 3 }]
          }"
        >
          <template v-slot:default="{ item }">
            <div class="p-5 bg-white">
              <div class="relative z-10 w-full overflow-hidden bg-white rounded-md h-64">
                <img class="object-cover w-full h-full" :src="`/${item.image}`" alt="" />
                <div class="z-20 overlay"></div>
                <div class="absolute z-30 flex items-center justify-center w-full gap-3 bottom-16">
                  <a
                    :href="item.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-10 h-10 p-3 bg-white rounded-full hover:bg-charcoal-black hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                      />
                    </svg>
                  </a>

                  <span
                    class="w-10 h-10 p-3 bg-white rounded-full cursor-pointer hover:bg-charcoal-black hover:shadow-md hover:text-white"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                      />
                    </svg>
                  </span>
                </div>
                <p
                  class="absolute z-30 flex items-center justify-center w-full text-sm font-medium text-white shadow-md bottom-8"
                >
                  {{ item.title }}
                </p>
              </div>
            </div>
          </template>
        </vue3-horizontal-list>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.overlay {
  @apply absolute top-0 left-0 w-full h-full;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.4) 60%,
    rgba(0, 0, 0, 0.7) 100%
  );
}
</style>
