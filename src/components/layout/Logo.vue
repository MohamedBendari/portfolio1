<template>
  <a
    href="#home"
    class="group flex items-center gap-2.5"
    aria-label="Mohamed Bendary Portfolio"
  >
    <img
      :src="profilePhoto"
      alt=""
      class="h-10 w-10 shrink-0 rounded-full object-cover shadow-lg ring-1 ring-white/20 transition duration-300 group-hover:scale-105"
    />

    <div class="leading-tight">
      <h1
        class="text-sm font-bold text-white transition-colors duration-300 group-hover:text-violet-400 sm:text-base"
      >
        Mohamed Bendary
      </h1>

      <p class="mt-0.5 text-[11px] text-gray-400 sm:text-xs">
        Software Engineer
      </p>
    </div>
  </a>
</template>

<script setup>
import profilePhoto from '@/assets/profile.jpg'
</script>
