<script setup>
import { ref, onMounted } from 'vue'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-vue-next'

/* ------------------------------------------------------------------ */
/* Data (single source of truth — rendered via v-for, no duplication) */
/* ------------------------------------------------------------------ */

const quickLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
]

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/MohamedBendari',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mohamedbendarysaber',
    icon: Linkedin,
  },
  {
    label: 'Email',
    href: 'mailto:mohamedsharkawy078@gmail.com',
    icon: Mail,
  },
]

/* ------------------------------------------------------------------ */
/* Smooth scroll helper (shared by Quick Links + Back to Top button)  */
/* ------------------------------------------------------------------ */

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

/* Simple mount fade-up (CSS-only, no scroll libraries) */
const isVisible = ref(false)
onMounted(() => {
  requestAnimationFrame(() => {
    isVisible.value = true
  })
})
</script>

<template>
  <footer
    role="contentinfo"
    class="relative overflow-hidden bg-neutral-950 text-neutral-300"
  >
    <!-- Gradient top border -->
    <div
      class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
      aria-hidden="true"
    ></div>

    <!-- Soft background glow blobs -->
    <div
      class="pointer-events-none absolute -left-32 -top-32 -z-10 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl"
      aria-hidden="true"
    ></div>
    <div
      class="pointer-events-none absolute -bottom-32 -right-32 -z-10 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-3xl"
      aria-hidden="true"
    ></div>

    <!-- Back to Top button -->
    <button
      type="button"
      aria-label="Back to top"
      @click="scrollToSection('home')"
      class="group absolute right-6 top-0 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-indigo-400/50 hover:shadow-[0_0_25px_rgba(99,102,241,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
    >
      <ArrowUp
        class="h-5 w-5 text-neutral-300 transition-colors duration-300 group-hover:text-indigo-300"
        aria-hidden="true"
      />
    </button>

    <div
      class="mx-auto max-w-6xl px-6 py-16 transition-all duration-700 ease-out"
      :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
    >
      <div
        class="grid grid-cols-1 gap-12 rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl sm:p-10 md:grid-cols-2 md:text-left lg:grid-cols-3"
      >
        <!-- Brand -->
        <div class="flex flex-col items-center md:items-start">
          <h2 class="text-xl font-semibold tracking-tight text-white">
            Mohamed Bendary 
          </h2>
          <p class="mt-1 text-sm font-medium text-indigo-400">
            Full Stack Developer
          </p>
          <p class="mt-4 max-w-xs text-sm leading-relaxed text-neutral-400">
              Building practical web applications with a focus on full-stack
  development, REST APIs and database-driven solutions.
          </p>
        </div>

        <!-- Quick Links -->
        <nav aria-label="Footer Quick Links" class="flex flex-col items-center md:items-start">
          <h3 class="text-sm font-semibold uppercase tracking-wider text-white">
            Quick Links
          </h3>
          <ul class="mt-4 flex flex-col items-center gap-3 md:items-start">
            <li v-for="link in quickLinks" :key="link.id">
              <button
                type="button"
                @click="scrollToSection(link.id)"
                class="inline-block text-sm text-neutral-400 transition-all duration-300 hover:-translate-y-0.5 hover:text-indigo-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded"
              >
                {{ link.label }}
              </button>
            </li>
          </ul>
        </nav>

        <!-- Social -->
        <div class="flex flex-col items-center md:items-start">
          <h3 class="text-sm font-semibold uppercase tracking-wider text-white">
            Connect
          </h3>
          <ul class="mt-4 flex items-center gap-3">
            <li v-for="social in socialLinks" :key="social.label">
              <a
                :href="social.href"
                :aria-label="social.label"
                target="_blank"
                rel="noopener noreferrer"
                class="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:border-indigo-400/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                <component
                  :is="social.icon"
                  class="h-4 w-4 text-neutral-300 transition-colors duration-300 group-hover:text-indigo-300"
                  aria-hidden="true"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Area -->
      <div class="mt-10 flex flex-col items-center gap-2 text-center text-xs text-neutral-500">
        <p>&copy; 2026 Mohamed Bendary .</p>
        <p>Built with Vue 3 + Tailwind CSS.</p>
      </div>
    </div>
  </footer>
</template>