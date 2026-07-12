<script setup lang="ts">
const route = useRoute();

const { getWebtoon } = useWebtoons();

const webtoon = computed(() => getWebtoon(route.params.slug as string));

if (!webtoon.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Webtoon not found",
  });
}
</script>

<template>
  <main class="min-h-screen bg-black p-4 text-white">
    <section class="mx-auto max-w-[768px]">
      <NuxtLink
        to="/"
        class="mb-6 inline-flex items-center gap-2 text-neutral-400 transition hover:text-white"
      >
        <span>←</span>
        <span>Назад</span>
      </NuxtLink>

      <img
        :src="webtoon!.cover"
        :alt="webtoon!.title"
        class="mb-6 w-full rounded-2xl"
      />

      <h1 class="text-3xl font-bold">
        {{ webtoon!.title }}
      </h1>

      <p class="mt-3 text-neutral-300">
        {{ webtoon!.description }}
      </p>

      <div class="mt-6 flex flex-wrap gap-2">
        <span
          v-for="genre in webtoon!.genres"
          :key="genre"
          class="rounded-full bg-neutral-800 px-3 py-1 text-sm text-neutral-300"
        >
          {{ genre }}
        </span>
      </div>

      <h2 class="mb-4 mt-10 text-xl font-semibold">Глави</h2>

      <div class="grid gap-3">
        <NuxtLink
          v-for="chapter in webtoon!.chapters"
          :key="chapter.id"
          :to="`/webtoons/${webtoon!.slug}/chapter/${chapter.id}`"
          class="rounded-xl bg-neutral-900 p-4 transition hover:bg-neutral-800"
        >
          <div class="flex items-center justify-between">
            <span>{{ chapter.title }}</span>

            <span class="text-sm text-neutral-500"> #{{ chapter.id }} </span>
          </div>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>
