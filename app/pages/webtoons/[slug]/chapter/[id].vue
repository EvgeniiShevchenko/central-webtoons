<script setup lang="ts">
const route = useRoute();

const { getWebtoon, getChapter } = useWebtoons();

const webtoon = getWebtoon(route.params.slug as string);
const chapter = getChapter(
  route.params.slug as string,
  Number(route.params.id)
);

if (!webtoon || !chapter) {
  throw createError({
    statusCode: 404,
    statusMessage: "Chapter not found",
  });
}
</script>

<template>
  <main
    class="webtoon-reader min-h-screen overflow-x-hidden bg-black text-white"
  >
    <header class="mx-auto max-w-[1080px] px-4 py-4">
      <NuxtLink
        :to="`/webtoons/${webtoon.slug}`"
        class="text-neutral-400 transition hover:text-white"
      >
        ← Назад
      </NuxtLink>

      <h1 class="mt-3 text-xl font-semibold">
        {{ chapter.title }}
      </h1>
    </header>

    <img
      :src="chapter.image"
      :alt="chapter.title"
      draggable="false"
      class="mx-auto block w-full max-w-[1080px] select-none"
    />

    <section class="mx-auto max-w-[768px] px-4 py-12 text-center">
      <h2 class="text-2xl font-bold">Підтримати автора</h2>

      <p class="mt-3 text-neutral-300">
        Якщо сподобалась глава — підтримай створення наступної.
      </p>

      <!-- <img
        src="/assets/qr/monobank.webp"
        alt="QR код для донату"
        class="mx-auto mt-6 w-52 rounded-xl"
      /> -->
    </section>
  </main>
</template>

<style scoped>
.webtoon-reader {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.webtoon-reader::-webkit-scrollbar {
  display: none;
}
</style>
