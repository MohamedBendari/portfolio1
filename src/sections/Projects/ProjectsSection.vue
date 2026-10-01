<script setup>
import {
  Github,
  ExternalLink,
  Check,
  Network,
  CalendarDays,
  Smartphone,
  Car,
} from 'lucide-vue-next'
import ancsImage from '@/assets/ANCS.jpg'
import doctorsImage from '@/assets/doctors.jpg'

const projects = [
  {
    title: 'ANCS — Auto Network Configuration System',
    image: ancsImage,
    type: 'Network',
    icon: Network,


    description:
      'An AI-powered network automation platform designed to simplify network configuration, deployment, monitoring, and troubleshooting.',

    features: [
      'Automated Network Configuration',
      'Secure Remote Device Management',
      'AI-Assisted Troubleshooting',
      'GNS3 Network Simulation Integration',
    ],

    techs: [
      'Python',
      'Vue.js',
      'Vite',
      'Django REST Framework',
      'PostgreSQL',
      'JWT',
    ],

    githubUrl: 'https://github.com/MohamedBendari/ANCS-website-Front',
    liveDemoUrl: 'https://ancs-website-frontend-jp3a.vercel.app/',

    liveUrl: 'https://ancs-website-frontend-jp3a.vercel.app/',

    gradient: {
      from: '#6366f1',
      to: '#0ea5e9',
    },
  },

  {
    title: 'Doctor Appointment Booking System',
    image: doctorsImage,
    type: 'Web App',
    icon: CalendarDays,


    description:
      'A responsive web application for doctor appointment booking with a user-friendly interface and organized booking experience.',

    features: [
      'Doctor Appointment Booking',
      'Responsive User Interface',
      'Organized Appointment Management',
    ],

    techs: [
      'Vue.js',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Bootstrap 5',
    ],

    githubUrl: 'https://github.com/MohamedBendari/Doctor-Appointment-Booking-System',
    liveUrl: 'https://doctor-appointment-booking-system-hazel.vercel.app/',

    gradient: {
      from: '#22c55e',
      to: '#0ea5e9',
    },
  },

  {
    title: 'Hedayati Mobile App',
    type: 'Mobile App',
    icon: Smartphone,


    description:
      'A cross-platform Flutter mobile application built with a clean and responsive user interface.',

    features: [
      'Cross-Platform Mobile Application',
      'Responsive Mobile Interface',
      'Flutter-Based Development',
    ],

    techs: [
      'Flutter',
      'Dart',
    ],

    githubUrl: '#',
    liveUrl: '#',

    gradient: {
      from: '#a855f7',
      to: '#6366f1',
    },
  },

  {
    title: 'Garage Smart System',
    type: 'IoT',
    icon: Car,


    description:
      'An IoT-based smart parking system designed to monitor parking availability and support vehicle management.',

    features: [
      'Smart Parking Management',
      'Parking Availability Monitoring',
      'Vehicle Management',
      'IoT Integration',
    ],

    techs: [
      'IoT',
      'Embedded Systems',
    ],

    githubUrl: '#',
    liveUrl: '#',

    gradient: {
      from: '#f97316',
      to: '#ec4899',
    },
  },
]
</script>

<template>
  <section
    id="projects"
    aria-labelledby="projects-heading"
    class="relative overflow-hidden bg-neutral-950 py-24 sm:py-28 lg:py-32"
  >
    <!-- Background glow -->
    <div
      class="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        class="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2
               rounded-full bg-indigo-500/10 blur-3xl"
      />

      <div
        class="absolute bottom-0 left-0 h-80 w-80
               rounded-full bg-purple-500/5 blur-3xl"
      />

      <div
        class="absolute right-0 top-1/3 h-80 w-80
               rounded-full bg-blue-500/5 blur-3xl"
      />
    </div>

    <div class="relative mx-auto max-w-7xl px-6 lg:px-8">

      <!-- Section Header -->
      <div class="mx-auto max-w-3xl text-center">

        <span
          class="inline-flex items-center rounded-full border
                 border-indigo-400/20 bg-indigo-400/5 px-5 py-2
                 text-xs font-semibold uppercase tracking-[0.22em]
                 text-indigo-400"
        >
          Featured Projects
        </span>

        <h2
          id="projects-heading"
          class="mt-5 text-3xl font-extrabold tracking-tight text-white
                 sm:text-4xl lg:text-5xl"
        >
          Projects That
          <span
            class="bg-gradient-to-r from-purple-400 via-blue-400
                   to-purple-400 bg-clip-text text-transparent"
          >
            Showcase My Skills
          </span>
        </h2>

        <p
          class="mx-auto mt-5 max-w-3xl text-base leading-relaxed
                 text-neutral-400 sm:text-lg"
        >
          A selection of projects that reflect my experience across
          full-stack web development, backend systems, APIs, databases,
          mobile development and IoT solutions.
        </p>
      </div>

      <!-- Projects -->
      <div class="mt-16 grid grid-cols-1 gap-6 xl:grid-cols-2">

        <article
          v-for="(project, index) in projects"
          :key="project.title"
          class="project-card group relative overflow-hidden rounded-3xl
                 border border-white/10 bg-white/[0.025]
                 transition-all duration-500
                 hover:-translate-y-1
                 hover:border-white/20"
          :style="{
            '--glow-from': project.gradient.from,
            '--glow-to': project.gradient.to,
            animationDelay: `${index * 100}ms`,
          }"
        >

          <!-- Gradient border -->
          <div
            class="pointer-events-none absolute inset-0 rounded-3xl
                   opacity-0 transition-opacity duration-500
                   group-hover:opacity-100"
            :style="{
              background: `linear-gradient(135deg,
                ${project.gradient.from}22,
                transparent 45%,
                ${project.gradient.to}18
              )`,
            }"
            aria-hidden="true"
          />

          <div class="relative flex h-full flex-col md:flex-row">

            <!-- ================= IMAGE ================= -->
            <div
              class="relative h-64 shrink-0 overflow-hidden md:h-auto
                     md:w-[47%]"
              :style="!project.image ? { background: `linear-gradient(135deg, ${project.gradient.from}33, ${project.gradient.to}33)` } : undefined"
            >

              <!-- Image -->
              <img
                v-if="project.image"
                :src="project.image"
                :alt="`${project.title} screenshot`"
                class="h-full w-full object-cover object-center
                       transition-transform duration-700
                       group-hover:scale-105"
              />

              <div
                v-else
                class="absolute inset-0 flex items-center justify-center"
                aria-hidden="true"
              >
                <component
                  :is="project.icon"
                  class="h-20 w-20 text-white/80"
                  stroke-width="1.25"
                />
              </div>

              <!-- Image overlay -->
              <div
                class="absolute inset-0 bg-gradient-to-t
                       from-neutral-950/80 via-transparent
                       to-transparent"
              />

              <div
                class="absolute inset-0 bg-gradient-to-r
                       from-transparent to-neutral-950/20"
              />

              <!-- Type badge -->
              <div
                class="absolute left-4 top-4 inline-flex items-center
                       gap-2 rounded-full border border-white/15
                       bg-neutral-950/75 px-4 py-2 text-xs
                       font-semibold text-white backdrop-blur-md"
              >
                <component
                  :is="project.icon"
                  class="h-4 w-4"
                  :style="{ color: project.gradient.from }"
                  aria-hidden="true"
                />

                {{ project.type }}
              </div>

            </div>

            <!-- ================= CONTENT ================= -->
            <div class="flex min-w-0 flex-1 flex-col p-6 sm:p-7">

              <!-- Title -->
              <h3
                class="text-xl font-bold leading-tight text-white
                       sm:text-2xl"
              >
                {{ project.title }}
              </h3>

              <!-- Description -->
              <p
                class="mt-3 text-sm leading-relaxed text-neutral-400
                       sm:text-[15px]"
              >
                {{ project.description }}
              </p>

              <!-- Features -->
              <ul
                role="list"
                class="mt-5 space-y-2"
              >
                <li
                  v-for="feature in project.features"
                  :key="feature"
                  class="flex items-start gap-2 text-sm text-neutral-300"
                >
                  <span
                    class="mt-0.5 flex h-4 w-4 shrink-0 items-center
                           justify-center rounded-full"
                    :style="{
                      backgroundColor: `${project.gradient.from}22`,
                    }"
                  >
                    <Check
                      class="h-3 w-3"
                      :style="{ color: project.gradient.from }"
                      stroke-width="3"
                      aria-hidden="true"
                    />
                  </span>

                  <span>
                    {{ feature }}
                  </span>
                </li>
              </ul>

              <!-- Technologies -->
              <div class="mt-5 flex flex-wrap gap-2">

                <span
                  v-for="tech in project.techs"
                  :key="tech"
                  class="rounded-full border border-white/10
                         bg-white/[0.04] px-3 py-1.5
                         text-[11px] font-medium text-neutral-300
                         transition-colors duration-300
                         group-hover:border-white/15"
                >
                  {{ tech }}
                </span>

              </div>

              <!-- Actions -->
              <div
                class="mt-auto flex flex-wrap gap-3 pt-7"
              >

                <!-- GitHub -->
                <a
                  v-if="project.githubUrl && project.githubUrl !== '#'"
                  :href="project.githubUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  :aria-label="`View ${project.title} source code on GitHub`"
                  class="inline-flex items-center gap-2 rounded-xl
                         border border-white/15 bg-white/[0.04]
                         px-4 py-2.5 text-sm font-semibold text-white
                         transition-all duration-300
                         hover:border-white/30 hover:bg-white/[0.09]"
                >
                  <Github
                    class="h-4 w-4"
                    aria-hidden="true"
                  />

                  GitHub
                </a>

                <!-- Live Demo -->
                <a
                  v-if="project.liveUrl && project.liveUrl !== '#'"
                  :href="project.liveUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  :aria-label="`Open live demo of ${project.title}`"
                  class="inline-flex items-center gap-2 rounded-xl
                         px-4 py-2.5 text-sm font-semibold text-white
                         transition-all duration-300
                         hover:-translate-y-0.5"
                  :style="{
                    background: `linear-gradient(135deg,
                      ${project.gradient.from},
                      ${project.gradient.to}
                    )`,
                    boxShadow: `0 10px 30px -12px
                      ${project.gradient.from}`,
                  }"
                >
                  <ExternalLink
                    class="h-4 w-4"
                    aria-hidden="true"
                  />

                  Live Demo
                </a>

              </div>

            </div>
          </div>
        </article>

      </div>
    </div>
  </section>
</template>

<style scoped>
.project-card {
  opacity: 0;
  animation: projectFadeUp 0.7s ease-out forwards;
}

@keyframes projectFadeUp {
  from {
    opacity: 0;
    transform: translateY(18px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.project-card::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  border-radius: 1.5rem;
  border: 1px solid transparent;
  background:
    linear-gradient(#0a0a0a, #0a0a0a) padding-box,
    linear-gradient(
      135deg,
      var(--glow-from),
      transparent 45%,
      var(--glow-to)
    ) border-box;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.project-card:hover::after {
  opacity: 0.35;
}

@media (prefers-reduced-motion: reduce) {
  .project-card {
    animation: none;
    opacity: 1;
  }

  .project-card img {
    transition: none;
  }
}
</style>
