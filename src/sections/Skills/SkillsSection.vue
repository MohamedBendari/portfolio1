<script setup>
import {
  Code2,
  Monitor,
  Server,
  Database,
  Wrench,
  CheckCircle2,
} from "lucide-vue-next"

const skillGroups = [
  {
    title: "Programming Languages",
    description: "Languages used for software and web development.",
    icon: Code2,
    skills: [
      "C#",
      "Python",
      "JavaScript",
      "C++",
      "Java",
    ],
  },
  {
    title: "Frontend Development",
    description: "Technologies used to build responsive web interfaces.",
    icon: Monitor,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Vue.js",
      "Vite",
      "Bootstrap 5",
    ],
  },
  {
    title: "Backend Development",
    description: "Technologies used for APIs and server-side applications.",
    icon: Server,
    skills: [
      ".NET",
      "ASP.NET Core",
      "Django",
      "Django REST Framework",
      "RESTful APIs",
      "JWT Authentication",
    ],
  },
  {
    title: "Databases",
    description: "Database technologies used in application development.",
    icon: Database,
    skills: [
      "SQL Server",
      "PostgreSQL",
      "MySQL",
      "SQLite",
    ],
  },
  {
    title: "Tools & Platforms",
    description: "Development and productivity tools used in projects.",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Visual Studio",
      "Visual Studio Code",
      "Docker",
    ],
  },
]

const coreSkills = [
  "Full-Stack Web Development",
  "API Development",
  "Database Design",
  "Responsive Web Development",
  "Authentication",
  "API Integration",
]
</script>

<template>
  <section
    id="skills"
    class="relative overflow-hidden bg-slate-950 py-24 sm:py-28"
  >
    <!-- Background -->
    <div
      class="pointer-events-none absolute inset-0"
      aria-hidden="true"
    >
      <div
        class="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full
               bg-purple-500/10 blur-3xl"
      />
      <div
        class="absolute bottom-0 left-0 h-64 w-64 rounded-full
               bg-blue-500/5 blur-3xl"
      />
    </div>

    <div class="relative mx-auto max-w-7xl px-6 lg:px-8">

      <!-- Section Header -->
      <div class="mx-auto max-w-3xl text-center">
        <span
          class="inline-flex items-center gap-2 rounded-full border border-purple-400/20
                 bg-purple-400/5 px-4 py-1.5 text-xs font-semibold uppercase
                 tracking-[0.2em] text-purple-300"
        >
          Skills
        </span>

        <h2
          class="mt-5 text-3xl font-extrabold tracking-tight text-white
                 sm:text-4xl lg:text-5xl"
        >
          My
          <span
            class="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400
                   bg-clip-text text-transparent"
          >
            Skills
          </span>
        </h2>

        <p class="mt-5 text-base leading-relaxed text-white/60 sm:text-lg">
          A collection of the technologies, development tools, and core
          capabilities I use to build modern web applications.
        </p>
      </div>

      <!-- Skill Groups -->
      <div
        class="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        <article
          v-for="group in skillGroups"
          :key="group.title"
          class="group rounded-2xl border border-white/10 bg-white/[0.03]
                 p-6 backdrop-blur-sm transition-all duration-300
                 hover:-translate-y-1 hover:border-purple-400/30
                 hover:bg-white/[0.05]"
        >
          <!-- Icon -->
          <div
            class="flex h-12 w-12 items-center justify-center rounded-xl
                   border border-purple-400/20 bg-purple-400/10
                   text-purple-300 transition-transform duration-300
                   group-hover:scale-110"
          >
            <component
              :is="group.icon"
              class="h-6 w-6"
              aria-hidden="true"
            />
          </div>

          <!-- Title -->
          <h3 class="mt-5 text-lg font-bold text-white">
            {{ group.title }}
          </h3>

          <!-- Description -->
          <p class="mt-2 text-sm leading-relaxed text-white/50">
            {{ group.description }}
          </p>

          <!-- Skills -->
          <div class="mt-5 flex flex-wrap gap-2">
            <span
              v-for="skill in group.skills"
              :key="skill"
              class="rounded-lg border border-white/10 bg-white/[0.04]
                     px-3 py-1.5 text-xs font-medium text-white/75
                     transition-colors duration-200
                     hover:border-purple-400/30
                     hover:text-purple-300"
            >
              {{ skill }}
            </span>
          </div>
        </article>
      </div>

      <!-- Core Skills -->
      <div class="mx-auto mt-10 max-w-5xl">
        <div
          class="rounded-2xl border border-white/10 bg-white/[0.03]
                 p-6 sm:p-8"
        >
          <div class="flex items-center gap-3">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-lg
                     bg-green-400/10 text-green-400"
            >
              <CheckCircle2
                class="h-5 w-5"
                aria-hidden="true"
              />
            </div>

            <div>
              <h3 class="text-lg font-bold text-white">
                Core Skills
              </h3>

              <p class="text-sm text-white/50">
                Core capabilities in software and web development.
              </p>
            </div>
          </div>

          <div class="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="skill in coreSkills"
              :key="skill"
              class="flex items-center gap-3 rounded-xl border border-white/10
                     bg-white/[0.02] px-4 py-3"
            >
              <CheckCircle2
                class="h-4 w-4 shrink-0 text-green-400"
                aria-hidden="true"
              />

              <span class="text-sm text-white/75">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>