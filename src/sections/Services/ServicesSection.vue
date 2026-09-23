<script setup>
import {
  Layers3,
  MonitorSmartphone,
  Server,
  ShieldCheck,
  Database,
  Workflow,
} from 'lucide-vue-next'
// Single source of truth for the service cards
const services = [
  {
    icon: Layers3,
    title: 'Full-Stack Web Development',
    description:
      'Build responsive web applications that connect modern frontend interfaces with reliable backend services.',
    accent: '#6366f1',
  },
  {
    icon: MonitorSmartphone,
    title: 'Vue.js Frontend',
    description:
      'Create responsive and user-friendly interfaces using Vue.js, JavaScript, HTML5 and CSS3.',
    accent: '#0ea5e9',
  },
  {
    icon: Server,
    title: 'Backend Development',
    description:
      'Develop backend applications and business logic using Python, Django and Django REST Framework.',
    accent: '#22c55e',
  },
  {
    icon: Workflow,
    title: 'REST API Development',
    description:
      'Design and integrate RESTful APIs to connect frontend applications with backend services.',
    accent: '#a855f7',
  },
  {
    icon: Database,
    title: 'Database Design',
    description:
      'Design and work with structured databases using PostgreSQL, MySQL and SQLite.',
    accent: '#f59e0b',
  },
  {
    icon: ShieldCheck,
    title: 'Authentication & Security',
    description:
      'Implement secure authentication flows using JWT and integrate protected API endpoints.',
    accent: '#ec4899',
  },
]
</script>

<template>
  <section
    id="services"
    aria-labelledby="services-heading"
    class="relative bg-neutral-950 py-24 sm:py-28 lg:py-32"
  >
    <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Section header -->
      <div class="mx-auto max-w-2xl text-center">
        <span
          class="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400"
        >
          Services
        </span>
        <h2
          id="services-heading"
          class="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          What I Can Build For You
        </h2>
        <p class="mt-4 text-base leading-relaxed text-neutral-400 sm:text-lg">
          I build practical web solutions across the frontend and backend,
          with a focus on APIs, authentication, database design and
          reliable application architecture.
        </p>
      </div>

      <!-- Services grid -->
      <ul
        role="list"
        class="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <li
          v-for="(service, index) in services"
          :key="service.title"
          class="service-card fade-up"
          :style="{ animationDelay: `${index * 80}ms`, '--accent': service.accent }"
        >
          <article
            tabindex="0"
            class="card-glow group relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-white/20 focus-visible:-translate-y-1.5 focus-visible:border-white/20 focus-visible:outline-none"
            :aria-label="`${service.title}: ${service.description}`"
          >
            <div
              class="flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 ease-out group-hover:scale-110"
              :style="{
                background: `linear-gradient(135deg, ${service.accent}33, ${service.accent}11)`,
              }"
              aria-hidden="true"
            >
              <component
                :is="service.icon"
                class="h-6 w-6"
                :style="{ color: service.accent }"
                stroke-width="1.75"
              />
            </div>

            <h3 class="mt-5 text-lg font-semibold text-white sm:text-xl">
              {{ service.title }}
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-neutral-400 sm:text-base">
              {{ service.description }}
            </p>
          </article>
        </li>
      </ul>
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

/* Gradient-border + glow on hover/focus, color driven by --accent */
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

.card-glow:hover::before,
.card-glow:focus-visible::before {
  opacity: 0.7;
}

.card-glow:hover,
.card-glow:focus-visible {
  box-shadow: 0 0 40px -14px var(--accent);
}

@media (prefers-reduced-motion: reduce) {
  .fade-up {
    animation: none;
    opacity: 1;
  }
}
</style>