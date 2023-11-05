<script setup>
import { ref } from "vue";

const active = ref(1);

const handleActive = (currentVal) => {
  active.value = currentVal;
};
</script>

<template>
  <section class="bg-charcoal-black p-3 md:p-10 mx-auto">
    <div class="bg-white w-full px-5 md:px-16 pt-32 container pb-10 rounded-xl">
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
        what I do.
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          class="py-20 px-7 rounded-xl border cursor-pointer"
          :class="{
            'bg-charcoal-black': active == 1,
            'bg-white': active !== 1
          }"
          @mouseover="handleActive(1)"
          v-wave
        >
          <h1
            class="text-xl md:text-3xl mb-4 w-11/12"
            :class="{ 'text-white': active == 1, 'text-black': active !== 1 }"
          >
            frontend development
          </h1>
          <p
            class="text-xs mb-5"
            :class="{
              'text-white': active == 1,
              'text-black': active !== 1
            }"
          >
            Creating and designing user interfaces of websites and applications ensuring a seamless
            and visually appealing user experience.
          </p>
          <div class="flex flex-wrap gap-3">
            <span
              class="rounded-xl py-1 px-3 text-xs"
              :class="{
                'text-white bg-charcoal-black': active !== 1,
                'text-black bg-white': active === 1
              }"
              >Javascript</span
            >
            <span
              class="rounded-xl py-1 px-3 text-xs"
              :class="{
                'text-white bg-charcoal-black': active !== 1,
                'text-black bg-white': active === 1
              }"
              >Vue Js</span
            >
            <span
              class="rounded-xl py-1 px-3 text-xs"
              :class="{
                'text-white bg-charcoal-black': active !== 1,
                'text-black bg-white': active === 1
              }"
              >Nuxt Js</span
            >
            <span
              class="rounded-xl py-1 px-3 text-xs"
              :class="{
                'text-white bg-charcoal-black': active !== 1,
                'text-black bg-white': active === 1
              }"
              >React Js</span
            >
            <span
              class="rounded-xl py-1 px-3 text-xs"
              :class="{
                'text-white bg-charcoal-black': active !== 1,
                'text-black bg-white': active === 1
              }"
              >Tailwind</span
            >
            <span
              class="rounded-xl py-1 px-3 text-xs"
              :class="{
                'text-white bg-charcoal-black': active !== 1,
                'text-black bg-white': active === 1
              }"
              >Firebase</span
            >
            <span
              class="rounded-xl py-1 px-3 text-xs"
              :class="{
                'text-white bg-charcoal-black': active !== 1,
                'text-black bg-white': active === 1
              }"
              >Vite</span
            >
            <span
              class="rounded-xl py-1 px-3 text-xs"
              :class="{
                'text-white bg-charcoal-black': active !== 1,
                'text-black bg-white': active === 1
              }"
              >Bootstrap</span
            >
            <span
              class="rounded-xl py-1 px-3 text-xs"
              :class="{
                'text-white bg-charcoal-black': active !== 1,
                'text-black bg-white': active === 1
              }"
              >jquery</span
            >
          </div>
        </div>

        <div
          class="py-20 px-7 rounded-xl border cursor-pointer"
          :class="{
            'bg-charcoal-black': active == 2,
            'bg-white': active !== 2
          }"
          @mouseover="handleActive(2)"
          v-wave
        >
          <h1
            :class="{ 'text-black': active !== 2, 'text-white': active === 2 }"
            class="text-xl md:text-3xl mb-4 w-11/12"
          >
            backend development
          </h1>
          <p
            class="text-xs mb-5"
            :class="{ 'text-black': active !== 2, 'text-white': active === 2 }"
          >
            Building and maintaining the server-side of a website, systems or application, handling
            data, logic, and infrastructure
          </p>
          <div class="flex flex-wrap gap-3">
            <span
              class="rounded-xl py-1 px-3 text-xs"
              :class="{
                'text-white bg-charcoal-black': active !== 2,
                'text-black bg-white': active === 2
              }"
              >Php</span
            >
            <span
              class="rounded-xl py-1 px-3 text-xs"
              :class="{
                'text-white bg-charcoal-black': active !== 2,
                'text-black bg-white': active === 2
              }"
              >Laravel</span
            >
            <span
              class="rounded-xl py-1 px-3 text-xs"
              :class="{
                'text-white bg-charcoal-black': active !== 2,
                'text-black bg-white': active === 2
              }"
              >Node</span
            >
            <span
              class="rounded-xl py-1 px-3 text-xs"
              :class="{
                'text-white bg-charcoal-black': active !== 2,
                'text-black bg-white': active === 2
              }"
              >Express</span
            >
            <span
              class="rounded-xl py-1 px-3 text-xs"
              :class="{
                'text-white bg-charcoal-black': active !== 2,
                'text-black bg-white': active === 2
              }"
              >Python</span
            >
            <span
              class="rounded-xl py-1 px-3 text-xs"
              :class="{
                'text-white bg-charcoal-black': active !== 2,
                'text-black bg-white': active === 2
              }"
              >MySQL</span
            >
            <span
              class="rounded-xl py-1 px-3 text-xs"
              :class="{
                'text-white bg-charcoal-black': active !== 2,
                'text-black bg-white': active === 2
              }"
              >Postgres</span
            >
            <span
              class="rounded-xl py-1 px-3 text-xs"
              :class="{
                'text-white bg-charcoal-black': active !== 2,
                'text-black bg-white': active === 2
              }"
              >Mongo DB</span
            >
          </div>
        </div>

        <div
          class="py-20 px-7 rounded-xl border cursor-pointer"
          :class="{
            'bg-charcoal-black': active == 3,
            'bg-white': active !== 3
          }"
          @mouseover="handleActive(3)"
          v-wave
        >
          <h1
            class="text-xl md:text-3xl mb-4 w-11/12"
            :class="{
              'text-black': active !== 3,
              'text-white': active == 3
            }"
          >
            devops, testing & tooling
          </h1>
          <p
            class="text-xs mb-5"
            :class="{
              'text-black': active !== 3,
              'text-white': active == 3
            }"
          >
            Streamlining software delivery and improving system reliability.
          </p>
          <div class="flex flex-wrap gap-3">
            <span
              class="rounded-xl py-1 px-3 text-xs"
              :class="{
                'text-white bg-charcoal-black': active !== 3,
                'text-black bg-white': active === 3
              }"
              >Git</span
            >
            <span
              class="rounded-xl py-1 px-3 text-xs"
              :class="{
                'text-white bg-charcoal-black': active !== 3,
                'text-black bg-white': active === 3
              }"
              >Github</span
            >
            <span
              class="rounded-xl py-1 px-3 text-xs"
              :class="{
                'text-white bg-charcoal-black': active !== 3,
                'text-black bg-white': active === 3
              }"
              >Postman</span
            >
            <span
              class="rounded-xl py-1 px-3 text-xs"
              :class="{
                'text-white bg-charcoal-black': active !== 3,
                'text-black bg-white': active === 3
              }"
              >Docker</span
            >
            <span
              class="rounded-xl py-1 px-3 text-xs"
              :class="{
                'text-white bg-charcoal-black': active !== 3,
                'text-black bg-white': active === 3
              }"
              >Redis</span
            >
            <span
              class="rounded-xl py-1 px-3 text-xs"
              :class="{
                'text-white bg-charcoal-black': active !== 3,
                'text-black bg-white': active === 3
              }"
              >Linux</span
            >
            <span
              class="rounded-xl py-1 px-3 text-xs"
              :class="{
                'text-white bg-charcoal-black': active !== 3,
                'text-black bg-white': active === 3
              }"
              >Cpanel</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
