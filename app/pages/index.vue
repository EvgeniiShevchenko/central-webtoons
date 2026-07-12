<script setup lang="ts">
import TheHeader from "@/components/layouts/TheHeader.vue";
import TheFooter from "@/components/layouts/TheFooter.vue";
import BaseLabel from "@/components/base/BaseLabel.vue";

const { getWebtoons } = useWebtoons();

const webtoons = getWebtoons();
</script>

<template>
  <main class="min-h-screen bg-black px-4 text-white">
    <TheHeader />

    <section class="mx-auto max-w-6xl">
      <h1 class="mb-2 text-3xl font-bold">Central Webtoons</h1>

      <p class="mb-8 text-neutral-400">
        Авторські вебтуни, темні історії та експериментальні світи.
      </p>

      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="webtoon in webtoons"
          :key="webtoon.slug"
          :to="`/webtoons/${webtoon.slug}`"
          class="group flex flex-col overflow-hidden rounded-2xl bg-neutral-900 transition hover:bg-neutral-800"
        >
          <div class="relative">
            <img
              :src="webtoon.cover"
              :alt="webtoon.title"
              class="aspect-[3/4] w-full object-cover transition duration-300 group-hover:scale-105"
            />

            <BaseLabel
              :text="webtoon.ageRating"
              class="absolute right-3 top-3"
            />
          </div>

          <div class="flex flex-1 flex-col p-4">
            <h2 class="text-xl font-semibold">
              {{ webtoon.title }}
            </h2>

            <p class="mt-2 line-clamp-2 text-sm text-neutral-400">
              {{ webtoon.description }}
            </p>

            <div class="mt-auto flex w-full flex-col gap-2">
              <p class="text-sm text-neutral-400">
                {{ webtoon.author }}
              </p>

              <div class="flex flex-wrap gap-2">
                <span
                  v-for="genre in webtoon.genres"
                  :key="genre"
                  class="rounded-full bg-neutral-800 px-2 py-1 text-xs text-neutral-300"
                >
                  {{ genre }}
                </span>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </section>

    <TheFooter />
  </main>
</template>
