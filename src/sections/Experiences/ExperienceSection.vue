<script setup>
import { GraduationCap, BriefcaseBusiness, Code2, Rocket } from 'lucide-vue-next'

// Single source of truth for the timeline
const timeline = [
  {
    icon: GraduationCap,
    year: '2026',
    title: 'Bachelor of Technology in Software Engineering',
    subtitle: 'New Cairo Technological University',
    description:
      'Graduated with a focus on software engineering, web development, programming and database systems.',
    accent: '#6366f1',
    current: false,
  },

  {
    icon: BriefcaseBusiness,
    year: 'Training',
    title: 'WE Summer Training',
    subtitle: 'Technical Training',
    description:
      'Completed practical technical training and gained additional exposure to software development and professional IT environments.',
    accent: '#ec4899',
    current: false,
  },

  {
    icon: Code2,
    year: 'Training',
    title: 'ITI Summer Training',
    subtitle: 'Information Technology Institute',
    description:
      'Completed technical training focused on developing practical software engineering and programming skills.',
    accent: '#22c55e',
    current: false,
  },

  {
    icon: Rocket,
    year: '2026',
    title: 'Full-Stack Development',
    subtitle: 'Building Real-World Projects',
    description:
      'Developing full-stack applications using Vue.js, Django REST Framework, PostgreSQL and modern web technologies, including the ANCS graduation project.',
    accent: '#f59e0b',
    current: true,
  },
]
</script>

<template>
  <section
    id="experience"
    aria-labelledby="experience-heading"
    class="relative overflow-hidden bg-neutral-950 py-24 sm:py-28 lg:py-32"
  >
    <div class="relative mx-auto max-w-6xl px-6 lg:px-8">
      <!-- Section header -->
      <div class="mx-auto max-w-2xl text-center">
        <span
          class="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400"
        >
          My Journey
        </span>
        <h2
          id="experience-heading"
          class="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          My Education &amp; Development Journey
        </h2>
        <p class="mt-4 text-base leading-relaxed text-neutral-400 sm:text-lg">
          A timeline highlighting my education, technical training and
growth through hands-on software development projects.
        </p>
      </div>

      <!-- Timeline -->
      <ol role="list" class="relative mt-20">
        <!-- Vertical gradient line -->
        <div
          class="timeline-line absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b from-indigo-500 via-fuchsia-500 to-amber-500/40 md:left-6 lg:left-1/2"
          aria-hidden="true"
        ></div>

        <li
          v-for="(item, index) in timeline"
          :key="item.title"
          class="relative pl-16 md:pl-16 lg:pl-0"
          :class="index !== timeline.length - 1 ? 'pb-12 sm:pb-14' : ''"
        >
          <div
            class="lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-12"
          >
            <!-- Spacer for alternating desktop layout -->
            <div
              class="hidden lg:block"
              :class="index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'"
              aria-hidden="true"
            ></div>

            <!-- Card -->
            <div
              class="timeline-card fade-up group relative"
              :class="index % 2 === 0 ? 'lg:order-1 lg:pr-12 lg:text-right' : 'lg:order-2 lg:pl-12'"
              :style="{ animationDelay: `${index * 120}ms`, '--accent': item.accent }"
            >
              <article
                tabindex="0"
                class="card-glow relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/20 focus-visible:-translate-y-1 focus-visible:border-white/20 focus-visible:outline-none sm:p-7"
              >
                <span
                  class="inline-block rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-neutral-300"
                >
                  {{ item.year }}
                </span>

                <h3 class="mt-3 text-lg font-bold text-white sm:text-xl">
                  {{ item.title }}
                </h3>
                <p
                  v-if="item.subtitle"
                  class="mt-1 text-sm font-medium"
                  :style="{ color: item.accent }"
                >
                  {{ item.subtitle }}
                </p>

                <p class="mt-3 text-sm leading-relaxed text-neutral-400 sm:text-base">
                  {{ item.description }}
                </p>
              </article>
            </div>
          </div>

          <!-- Dot marker on the line -->
          <div
            class="absolute left-6 top-1 -translate-x-1/2 lg:left-1/2"
            aria-hidden="true"
          >
            <span
              v-if="item.current"
              class="absolute inset-0 -m-1.5 animate-ping rounded-full opacity-40"
              :style="{ backgroundColor: item.accent }"
            ></span>
            <span
              class="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-neutral-950 shadow-lg"
              :style="{ boxShadow: `0 0 16px -2px ${item.accent}` }"
            >
              <component
                :is="item.icon"
                class="h-4 w-4"
                :style="{ color: item.accent }"
                stroke-width="1.75"
              />
            </span>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.fade-up {
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

.timeline-line {
  transform: scaleY(0);
  transform-origin: top;
  animation: growLine 1.4s ease-out forwards;
  animation-delay: 0.1s;
}

@keyframes growLine {
  to {
    transform: scaleY(1);
  }
}

/* Gradient-border glow on hover/focus, color driven by --accent */
.card-glow::before {
  content: '';
  position: absolute;
  inset: -1px;
  z-index: -1;
  border-radius: 1rem;
  padding: 1px;
  background: linear-gradient(135deg, var(--accent), transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease-out;
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

.timeline-card:hover .card-glow::before,
.timeline-card:focus-within .card-glow::before {
  opacity: 0.7;
}

.timeline-card:hover .card-glow,
.timeline-card:focus-within .card-glow {
  box-shadow: 0 0 40px -14px var(--accent);
}

@media (prefers-reduced-motion: reduce) {
  .fade-up {
    animation: none;
    opacity: 1;
  }
  .timeline-line {
    animation: none;
    transform: scaleY(1);
  }
}
</style>