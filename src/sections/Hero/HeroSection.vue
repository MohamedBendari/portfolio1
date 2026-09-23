<template>
  <section
    id="home"
    aria-label="Introduction"
    class="relative flex min-h-screen items-center overflow-hidden bg-slate-950 pb-20 pt-36"
  >
    <!-- Background layer: grid + blur circles -->
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <div
        class="absolute inset-0 opacity-[0.05]
               bg-[linear-gradient(to_right,rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.6)_1px,transparent_1px)]
               bg-[size:56px_56px]"
      />
      <div class="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-purple-600/25 blur-3xl" />
      <div class="absolute -right-32 top-1/3 h-[28rem] w-[28rem] rounded-full bg-blue-600/15 blur-3xl" />
      <div class="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
    </div>

    <div class="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-12">
      <!-- Left column: content -->
      <div class="flex flex-col items-start text-left">
        <p
  class="hero-fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-white/10
         bg-white/5 px-4 py-1.5 text-sm text-white/80 backdrop-blur-sm"
>
  <span class="relative flex h-2 w-2" aria-hidden="true">
    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
    <span class="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
  </span>
  Software Engineer
</p>

        <p class="hero-fade-in hero-delay-1 text-lg text-white/70 sm:text-xl">Hi, I'm</p>

        <h1 class="hero-fade-in hero-delay-2 mt-1 text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
          <span class="block">Mohamed</span>
          <span class="block bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Bendary
          </span>
        </h1>

        <p
          class="hero-fade-in hero-delay-3 mt-4 flex h-8 items-center text-xl font-semibold text-purple-300 sm:text-2xl"
          :aria-label="rolesForScreenReader"
        >
          <span aria-hidden="true">{{ displayText }}</span>
          <span class="typing-cursor" aria-hidden="true">|</span>
        </p>

        <p class="hero-fade-in hero-delay-4 mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
          I build responsive and scalable web applications using
<strong class="font-semibold text-white/80">modern frontend</strong>
and
<strong class="font-semibold text-white/80">backend technologies</strong>,
with a focus on
<strong class="font-semibold text-white/80">REST APIs</strong>,
database design, and reliable software solutions.
        </p>

        <ul class="hero-fade-in hero-delay-5 mt-8 flex flex-wrap gap-2" aria-label="Technology stack">
          <li v-for="tech in techStack" :key="tech.label">
            <TechBadge :label="tech.label" :dot-color="tech.dotColor" />
          </li>
        </ul>

        <div class="hero-fade-in hero-delay-6 mt-10 flex flex-wrap items-center gap-4">
          <BaseButton tag="a" href="#projects" variant="primary">
            View Projects
            <template #icon-right>
              <ArrowRight :size="18" class="transition-transform duration-300 group-hover:translate-x-1" />
            </template>
          </BaseButton>

          <BaseButton tag="a" href="/resume-ahsan-ali.pdf" download variant="secondary">
            <template #icon-left>
              <Download :size="18" />
            </template>
            Download CV
          </BaseButton>
        </div>
      </div>

      <!-- Right column: profile photo -->
      <div
        class="hero-fade-in hero-delay-3 relative mx-auto flex h-[360px] w-full max-w-[440px] items-center justify-center sm:h-[400px] lg:h-[440px]"
      >
        <div
          class="pointer-events-none absolute h-72 w-72 rounded-full bg-gradient-to-br from-purple-600/40 via-blue-600/30 to-transparent blur-3xl sm:h-80 sm:w-80"
          aria-hidden="true"
        />
        <span class="absolute left-[12%] top-[27%] z-20 h-2 w-2 rounded-full bg-purple-300 shadow-[0_0_14px_4px_rgba(192,132,252,0.45)]" aria-hidden="true" />
        <span class="absolute bottom-[22%] left-[18%] z-20 h-1.5 w-1.5 rounded-full bg-blue-300 shadow-[0_0_12px_4px_rgba(147,197,253,0.4)]" aria-hidden="true" />
        <span class="absolute right-[15%] top-[25%] z-20 h-1.5 w-1.5 rounded-full bg-violet-200 shadow-[0_0_12px_4px_rgba(196,181,253,0.45)]" aria-hidden="true" />

        <div class="relative z-10 aspect-square w-[min(76vw,300px)] rounded-full bg-gradient-to-br from-purple-400 via-violet-500 to-blue-500 p-[3px] shadow-[0_0_34px_rgba(139,92,246,0.2)] sm:w-[320px] lg:w-[340px]">
          <img
            :src="profilePhoto"
            alt="Mohamed Bendary"
            class="h-full w-full rounded-full object-cover object-[center_27%]"
          />
        </div>

        <span class="absolute right-0 top-[17%] z-20 rounded-lg border border-white/10 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-white/85 shadow-lg backdrop-blur-md sm:right-1">
          Django
        </span>
        <span class="absolute right-0 top-[46%] z-20 rounded-lg border border-white/10 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-white/85 shadow-lg backdrop-blur-md sm:right-1">
          Vue.js
        </span>
        <span class="absolute bottom-[17%] right-0 z-20 rounded-lg border border-white/10 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-white/85 shadow-lg backdrop-blur-md sm:right-1">
          REST API
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { ArrowRight, Download } from 'lucide-vue-next'
import BaseButton from '@/components/ui/BaseButton.vue'
import TechBadge from '@/components/ui/TechBadge.vue'
import profilePhoto from '@/assets/profile.jpg'
import { roles, techStack } from '@/data/heroData'
import { useTypingEffect } from '@/composables/useTypingEffect'

const { displayText } = useTypingEffect(roles)

// Static accessible label so screen readers get the full list once,
// instead of the rapidly changing animated text.
const rolesForScreenReader = computed(() => roles.join(', '))
</script>

<style scoped>
@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-fade-in {
  animation: fadeSlideUp 0.7s ease-out both;
}

.hero-delay-1 { animation-delay: 0.08s; }
.hero-delay-2 { animation-delay: 0.16s; }
.hero-delay-3 { animation-delay: 0.24s; }
.hero-delay-4 { animation-delay: 0.32s; }
.hero-delay-5 { animation-delay: 0.4s; }
.hero-delay-6 { animation-delay: 0.48s; }

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-14px); }
}

.float-slow { animation: float 6s ease-in-out infinite; }
.float-medium { animation: float 4.5s ease-in-out infinite; }
.float-fast { animation: float 3s ease-in-out infinite; }

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.typing-cursor {
  display: inline-block;
  margin-left: 2px;
  animation: blink 1s step-end infinite;
}

@media (prefers-reduced-motion: reduce) {
  .hero-fade-in,
  .float-slow,
  .float-medium,
  .float-fast,
  .typing-cursor {
    animation: none !important;
  }
}
</style>
