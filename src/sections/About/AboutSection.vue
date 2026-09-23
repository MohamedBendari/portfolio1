<script setup>
import {
  Code2,
  GraduationCap,
  Briefcase,
  Layers,
  LayoutTemplate,
  Zap,
  ShieldCheck,
  Database,
  KeyRound,
} from 'lucide-vue-next'

// Quick stats — data-driven since all 4 cards share the same shape
const quickStats = [
  { label: 'Graduation', value: '2026' },
  { label: 'Main Focus', value: 'Full-Stack' },
  { label: 'Backend', value: 'Django' },
  { label: 'APIs', value: 'REST' },
]

// "Why Work With Me" — data-driven since all 3 cards share the same shape
const features = [
  {
    icon: Layers,
    title: 'Clean & Maintainable Code',
    description:
      'I focus on writing structured code that is easy to understand, maintain, and extend.',
  },
  {
    icon: LayoutTemplate,
    title: 'Full-Stack Mindset',
    description:
      'I understand how frontend, backend, APIs and databases work together as one system.',
  },
  {
    icon: Zap,
    title: 'Problem Solving',
    description:
      'I approach technical problems step by step and focus on practical, reliable solutions.',
  },
]

// Skills mentioned in the internship experience card
const experienceSkills = [
  { icon: Code2, label: 'Django & Python' },
  { icon: Database, label: 'REST API Development' },
  { icon: KeyRound, label: 'JWT Authentication' },
  { icon: ShieldCheck, label: 'Database Design' },
]
</script>

<template>
  <section
    id="about"
    aria-labelledby="about-heading"
    class="relative bg-neutral-950 py-24 sm:py-28 lg:py-32"
  >
    <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-16 lg:grid-cols-5 lg:gap-12">
        <!-- ============ LEFT: Profile Card (40%) ============ -->
        <div class="lg:col-span-2">
          <div class="lg:sticky lg:top-28">
            <div
              class="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-md sm:p-10"
            >
              <!-- Avatar placeholder -->
              <div class="relative mx-auto mb-6 flex h-40 w-40 items-center justify-center">
                <!-- Floating glow -->
                <div
                  class="glow-float absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/40 to-fuchsia-500/40 blur-2xl"
                  aria-hidden="true"
                ></div>
                <!-- Gradient circle -->
                <div
                  class="relative flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 via-violet-500 to-fuchsia-500 shadow-lg shadow-indigo-500/30"
                >
                  <Code2
                    class="h-11 w-11 text-white"
                    stroke-width="1.75"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <h3 class="text-xl font-bold text-white sm:text-2xl">
  Mohamed Bendary Saber
</h3>

<p class="mt-1 text-sm font-medium text-indigo-400 sm:text-base">
  Software Engineer
</p>

<p class="mt-1 text-sm text-neutral-500">
  Django · Vue.js · REST APIs
</p>

              <!-- Experience badge -->
              <div
                class="mx-auto mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2"
              >
                <Code2
  class="h-4 w-4 text-amber-400"
  aria-hidden="true"
/>
                <span class="text-xs font-medium text-neutral-300 sm:text-sm">
                  Building Real-World Applications
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- ============ RIGHT: Content (60%) ============ -->
        <div class="lg:col-span-3">
          <!-- Badge -->
          <span
            class="fade-up inline-block text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400"
            style="animation-delay: 0ms"
          >
            About Me
          </span>

          <!-- Heading -->
          <h2
            id="about-heading"
            class="fade-up mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
            style="animation-delay: 60ms"
          >
            Building Practical & Scalable Software
          </h2>

          <!-- Description -->
          <div
            class="fade-up mt-6 space-y-4 text-base leading-relaxed text-neutral-400 sm:text-lg"
            style="animation-delay: 120ms"
          >
            
              <p>
  I'm a Software Engineer focused on building full-stack web applications
  with modern frontend and backend technologies. My main experience includes
  developing REST APIs, working with databases, implementing authentication,
  and connecting backend services with responsive frontend applications.
</p>

<p>
  I enjoy working across the different parts of an application, from
  designing database structures and backend logic to building clean user
  interfaces and integrating APIs. I focus on writing maintainable code and
  understanding how each part of the system works together.
</p>

<p>
  My graduation project, <strong class="text-neutral-200 font-medium">ANCS</strong>,
  gave me practical experience building a complete system using
  <strong class="text-neutral-200 font-medium">Django REST Framework</strong>,
  <strong class="text-neutral-200 font-medium">Vue.js</strong>,
  PostgreSQL, JWT authentication, and Python-based network automation.
</p>
          </div>

          <!-- Quick Stats -->
          <ul
            role="list"
            class="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4"
          >
            <li
              v-for="(stat, index) in quickStats"
              :key="stat.label"
              tabindex="0"
              class="stat-card fade-up rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/20 focus-visible:-translate-y-1 focus-visible:border-white/20 focus-visible:outline-none"
              :style="{ animationDelay: `${180 + index * 60}ms` }"
            >
              <div class="flex items-center justify-center gap-1.5">
                <span
                  v-if="stat.live"
                  class="h-2 w-2 animate-pulse rounded-full bg-emerald-400"
                  aria-hidden="true"
                ></span>
                <h3 class="text-lg font-bold text-white sm:text-xl">
                  {{ stat.value }}
                </h3>
              </div>
              <p class="mt-1 text-xs font-medium text-neutral-500 sm:text-sm">
                {{ stat.label }}
              </p>
            </li>
          </ul>

          <!-- Education + Experience -->
          <div class="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <!-- Education Card -->
            <div
              tabindex="0"
              class="info-card fade-up rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/20 focus-visible:-translate-y-1 focus-visible:border-white/20 focus-visible:outline-none"
              style="animation-delay: 420ms"
            >
              <div
                class="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10"
              >
                <GraduationCap
                  class="h-5.5 w-5.5 text-indigo-400"
                  stroke-width="1.75"
                  aria-hidden="true"
                />
              </div>
              <h3 class="mt-4 text-base font-semibold text-white">
                  Bachelor of Technology in Software Engineering

              </h3>
              <p class="mt-1 text-sm text-neutral-500">   New Cairo Technological University · 2026
</p>
            </div>

            <!-- Experience Card -->
            <div
              tabindex="0"
              class="info-card fade-up rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/20 focus-visible:-translate-y-1 focus-visible:border-white/20 focus-visible:outline-none"
              style="animation-delay: 480ms"
            >
              <div
                class="flex h-11 w-11 items-center justify-center rounded-xl bg-fuchsia-500/10"
              >
                <Briefcase
                  class="h-5.5 w-5.5 text-fuchsia-400"
                  stroke-width="1.75"
                  aria-hidden="true"
                />
              </div>
              <h3 class="mt-4 text-base font-semibold text-white">
                 Full-Stack Development
              </h3>
              <p class="mt-1 text-sm text-neutral-500">
              Practical experience building complete web applications and backend APIs.</p>
              <ul role="list" class="mt-4 space-y-2">
                <li
                  v-for="skill in experienceSkills"
                  :key="skill.label"
                  class="flex items-center gap-2 text-xs text-neutral-400 sm:text-sm"
                >
                  <component
                    :is="skill.icon"
                    class="h-3.5 w-3.5 shrink-0 text-neutral-500"
                    aria-hidden="true"
                  />
                  {{ skill.label }}
                </li>
              </ul>
            </div>
          </div>

          <!-- Why Work With Me -->
          <div class="mt-10">
            <h3
              class="fade-up text-lg font-semibold text-white sm:text-xl"
              style="animation-delay: 540ms"
            >
              Why Work With Me
            </h3>
            <ul
              role="list"
              class="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3"
            >
              <li
                v-for="(feature, index) in features"
                :key="feature.title"
                tabindex="0"
                class="feature-card fade-up rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/20 focus-visible:-translate-y-1 focus-visible:border-white/20 focus-visible:outline-none"
                :style="{ animationDelay: `${600 + index * 60}ms` }"
              >
                <component
                  :is="feature.icon"
                  class="h-6 w-6 text-indigo-400"
                  stroke-width="1.75"
                  aria-hidden="true"
                />
                <h4 class="mt-3 text-sm font-semibold text-white sm:text-base">
                  {{ feature.title }}
                </h4>
                <p class="mt-1 text-xs text-neutral-500 sm:text-sm">
                  {{ feature.description }}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-up,
.stat-card,
.info-card,
.feature-card {
  opacity: 0;
  animation: fadeUp 0.6s ease-out forwards;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.glow-float {
  animation: floatGlow 4s ease-in-out infinite;
}

@keyframes floatGlow {
  0%,
  100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-8px) scale(1.05);
  }
}

@media (prefers-reduced-motion: reduce) {
  .fade-up,
  .stat-card,
  .info-card,
  .feature-card {
    animation: none;
    opacity: 1;
  }
  .glow-float {
    animation: none;
  }
}
</style>