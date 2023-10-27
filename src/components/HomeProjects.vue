<script setup>
import { reactive } from "vue"
import vue3HorizontalList from "vue3-horizontal-list"

const items = reactive(
  [...Array(20).keys()].map((i) => {
    return { i, title: `Responsive`, content: `Content` }
  })
)

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
    image: "project-2.png",
    description: ""
  },
  {
    id: 3,
    title: "Tunifi Music",
    link: "https://tunifi.netlify.app/",
    image: "project-3.png",
    description: ""
  },
  {
    id: 4,
    title: "Eshop",
    link: "https://eshop-it00.onrender.com/",
    image: "project-4.png",
    description: ""
  },
  {
    id: 5,
    title: "Urbancribs API",
    link: "https://urbancribs.onrender.com/",
    image: "project-5.png",
    description: ""
  },
  {
    id: 6,
    title: "Hotel UI",
    link: "https://bahariresort.netlify.app/",
    image: "project-6.png",
    description: ""
  },
  {
    id: 7,
    title: "Electronics store",
    link: "https://r-electronics.netlify.app/",
    image: "project-7.jpeg",
    description: ""
  }
])
</script>

<template>
  <section class="bg-white p-3 md:p-10 mx-auto">
    <div class="bg-white rounded-none w-full px-5 md:px-16 py-24 container">
      <h2 class="text-black font-normal text-2xl md:text-5xl tracking-wide mb-7">
        /featured projects.
      </h2>
      <p class="text-black font-light text-sm md:text-normal">Some of my recent works.</p>
      <div class="">
        <vue3-horizontal-list
          :items="projects"
          :options="{
            responsive: [{ end: 576, size: 1 }, { start: 576, end: 768, size: 2 }, { size: 3 }]
          }"
        >
          <template v-slot:default="{ item }">
            <div class="bg-white p-5">
              <div class="bg-white h-52 w-full relative z-10 overflow-hidden rounded-md">
                <img class="w-full h-full object-cover" :src="`/${item.image}`" alt="" />
                <div class="overlay z-20"></div>
                <div class="w-full flex gap-3 absolute bottom-16 justify-center items-center z-30">
                  <a
                    :href="item.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="bg-white hover:bg-black hover:text-white p-3 rounded-full w-10 h-10"
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
                    class="bg-white hover:bg-black hover:shadow-md hover:text-white p-3 rounded-full w-10 h-10 cursor-pointer"
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
                  class="flex w-full items-center justify-center absolute bottom-5 text-white text-sm font-medium z-30 shadow-md"
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
