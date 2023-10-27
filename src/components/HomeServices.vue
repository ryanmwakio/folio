<script setup>
import { ref } from "vue"

const active = ref(1)

const handleActive = (currentVal) => {
  active.value = currentVal
}
</script>

<template>
  <section class="bg-white p-3 md:p-10 mx-auto">
    <div class="bg-white rounded-none w-full px-5 md:px-16 pt-32 container">
      <h2 class="text-black font-normal text-2xl md:text-5xl tracking-wide mb-14">/what I do.</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          class="py-20 px-7 rounded-xl border"
          :class="{
            'bg-charcoal-black': active == 1,
            'bg-white': active !== 1
          }"
          @mouseover="handleActive(1)"
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
              :class="{ 'text-white bg-black': active !== 1, 'text-black bg-white': active === 1 }"
              >Javascript</span
            >
            <span
              class="rounded-xl py-1 px-3 text-xs"
              :class="{ 'text-white bg-black': active !== 1, 'text-black bg-white': active === 1 }"
              >Vue Js</span
            >
            <span
              class="rounded-xl py-1 px-3 text-xs"
              :class="{ 'text-white bg-black': active !== 1, 'text-black bg-white': active === 1 }"
              >Nuxt Js</span
            >
            <span
              class="rounded-xl py-1 px-3 text-xs"
              :class="{ 'text-white bg-black': active !== 1, 'text-black bg-white': active === 1 }"
              >React Js</span
            >
            <span
              class="rounded-xl py-1 px-3 text-xs"
              :class="{ 'text-white bg-black': active !== 1, 'text-black bg-white': active === 1 }"
              >Tailwind</span
            >
            <span
              class="rounded-xl py-1 px-3 text-xs"
              :class="{ 'text-white bg-black': active !== 1, 'text-black bg-white': active === 1 }"
              >Firebase</span
            >
            <span
              class="rounded-xl py-1 px-3 text-xs"
              :class="{ 'text-white bg-black': active !== 1, 'text-black bg-white': active === 1 }"
              >Vite</span
            >
            <span
              class="rounded-xl py-1 px-3 text-xs"
              :class="{ 'text-white bg-black': active !== 1, 'text-black bg-white': active === 1 }"
              >Bootstrap</span
            >
            <span
              class="rounded-xl py-1 px-3 text-xs"
              :class="{ 'text-white bg-black': active !== 1, 'text-black bg-white': active === 1 }"
              >jquery</span
            >
          </div>
        </div>

        <div
          class="py-20 px-7 rounded-xl border"
          :class="{
            'bg-charcoal-black': active == 2,
            'bg-white': active !== 2
          }"
          @mouseover="handleActive(2)"
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
              :class="{ 'text-white bg-black': active !== 2, 'text-black bg-white': active === 2 }"
              >Php</span
            >
            <span
              class="rounded-xl py-1 px-3 text-xs"
              :class="{ 'text-white bg-black': active !== 2, 'text-black bg-white': active === 2 }"
              >Laravel</span
            >
            <span
              class="rounded-xl py-1 px-3 text-xs"
              :class="{ 'text-white bg-black': active !== 2, 'text-black bg-white': active === 2 }"
              >Node</span
            >
            <span
              class="rounded-xl py-1 px-3 text-xs"
              :class="{ 'text-white bg-black': active !== 2, 'text-black bg-white': active === 2 }"
              >Express</span
            >
            <span
              class="rounded-xl py-1 px-3 text-xs"
              :class="{ 'text-white bg-black': active !== 2, 'text-black bg-white': active === 2 }"
              >Python</span
            >
            <span
              class="rounded-xl py-1 px-3 text-xs"
              :class="{ 'text-white bg-black': active !== 2, 'text-black bg-white': active === 2 }"
              >MySQL</span
            >
            <span
              class="rounded-xl py-1 px-3 text-xs"
              :class="{ 'text-white bg-black': active !== 2, 'text-black bg-white': active === 2 }"
              >Postgres</span
            >
            <span
              class="rounded-xl py-1 px-3 text-xs"
              :class="{ 'text-white bg-black': active !== 2, 'text-black bg-white': active === 2 }"
              >Mongo DB</span
            >
          </div>
        </div>

        <div
          class="py-20 px-7 rounded-xl border"
          :class="{
            'bg-charcoal-black': active == 3,
            'bg-white': active !== 3
          }"
          @mouseover="handleActive(3)"
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
              :class="{ 'text-white bg-black': active !== 3, 'text-black bg-white': active === 3 }"
              >Git</span
            >
            <span
              class="rounded-xl py-1 px-3 text-xs"
              :class="{ 'text-white bg-black': active !== 3, 'text-black bg-white': active === 3 }"
              >Github</span
            >
            <span
              class="rounded-xl py-1 px-3 text-xs"
              :class="{ 'text-white bg-black': active !== 3, 'text-black bg-white': active === 3 }"
              >Postman</span
            >
            <span
              class="rounded-xl py-1 px-3 text-xs"
              :class="{ 'text-white bg-black': active !== 3, 'text-black bg-white': active === 3 }"
              >Docker</span
            >
            <span
              class="rounded-xl py-1 px-3 text-xs"
              :class="{ 'text-white bg-black': active !== 3, 'text-black bg-white': active === 3 }"
              >Redis</span
            >
            <span
              class="rounded-xl py-1 px-3 text-xs"
              :class="{ 'text-white bg-black': active !== 3, 'text-black bg-white': active === 3 }"
              >Linux</span
            >
            <span
              class="rounded-xl py-1 px-3 text-xs"
              :class="{ 'text-white bg-black': active !== 3, 'text-black bg-white': active === 3 }"
              >Cpanel</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
