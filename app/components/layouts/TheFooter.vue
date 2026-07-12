<script setup lang="ts">
const instagramUrl =
  "https://www.instagram.com/central.kr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
const email = "centralcoffee27@gmail.com";
</script>

<template>
  <footer class="border-t border-white/5 bg-neutral-950">
    <div
      class="mx-auto flex max-w-[1280px] flex-col items-center px-4 py-14 text-center"
    >
      <img
        src="/images/logo/central.webp"
        alt="Central Webtoons"
        class="h-14 w-auto select-none"
        draggable="false"
      />

      <h2 class="mt-6 text-2xl font-bold text-white">
        Кавʼярня по мотивам серіалу «Друзі» | Кременчук
      </h2>

      <p class="mt-3 max-w-md text-sm leading-6 text-neutral-400">
        Місце, де зустрічаються друзі 💜💛 Варимо арабіку ☕️ Мішаємо б/а
        коктейлі Грилюємо круасани Доставка через Bolt💚 Будні: 09:00-19:30
        Вихідні: 10:00-20:00 2/34, Ivana Mazepy, street, Kremenchuk
      </p>

      <a
        :href="instagramUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-8 transition hover:scale-105"
      >
        <img
          src="/images/qr/instagram.webp"
          alt="Instagram QR"
          class="w-44 rounded-2xl border border-white/10 bg-neutral-900 p-3 shadow-xl shadow-black/40"
        />
      </a>

      <section
        class="mt-8 w-full max-w-3xl rounded-2xl border border-white/10 bg-neutral-900/60 p-8"
      >
        <h3 class="text-2xl font-bold text-white">
          Хочеш опублікувати свій вебтун?
        </h3>

        <p class="mt-4 text-neutral-400">
          Central Webtoons — це незалежна платформа для авторських вебтунів.
          Якщо ти створюєш власні історії та хочеш поділитися ними з читачами —
          ми будемо раді співпраці.
        </p>

        <a
          :href="`mailto:${email}?subject=Співпраця з Central Webtoons`"
          class="mt-6 inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-105"
        >
          Зв'язатися з нами
        </a>
      </section>

      <a
        :href="instagramUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-5 text-lg font-semibold text-white transition hover:text-green-400"
      >
        @central.kr
      </a>

      <div class="mt-10 h-px w-full bg-white/5" />

      <p class="mt-6 text-sm text-neutral-500">
        © {{ new Date().getFullYear() }} Central Webtoons
      </p>
    </div>
  </footer>
</template>
