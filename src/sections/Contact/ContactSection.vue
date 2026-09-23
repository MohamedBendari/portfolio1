<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'
import {
  Mail,
  MapPin,
  BadgeCheck,
  Clock3,
  Github,
  Linkedin,
  Download,
  Send,
} from 'lucide-vue-next'

// Info cards — data-driven since all 4 share the same shape
const infoCards = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mohamedsharkawy078@gmail.com',
    accent: '#6366f1',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Cairo, Egypt',
    accent: '#0ea5e9',
  },
  {
    icon: BadgeCheck,
    label: 'Role',
    value: 'Software Engineer',
    accent: '#22c55e',
  },
  {
    icon: Clock3,
    label: 'Focus',
    value: 'Full-Stack Development',
    accent: '#f59e0b',
  },
]

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const isSubmitting = ref(false)
const statusMessage = ref('')
const statusType = ref('')

const resetForm = () => {
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
}

async function sendEmail() {
  if (isSubmitting.value) return

  const name = form.value.name.trim()
  const email = form.value.email.trim()
  const subject = form.value.subject.trim()
  const message = form.value.message.trim()

  if (!name || !email || !subject || !message) {
    statusType.value = 'error'
    statusMessage.value = 'Please fill in all fields before sending your message.'
    return
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(email)) {
    statusType.value = 'error'
    statusMessage.value = 'Please enter a valid email address.'
    return
  }

  isSubmitting.value = true
  statusMessage.value = ''
  statusType.value = ''

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: name,
        from_email: email,
        subject,
        message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )

    statusType.value = 'success'
    statusMessage.value = 'Thanks! Your message was sent successfully.'
    resetForm()
  } catch (error) {
    statusType.value = 'error'
    statusMessage.value = 'Sorry, your message could not be sent right now. Please try again later.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section
    id="contact"
    aria-labelledby="contact-heading"
    class="relative bg-neutral-950 py-24 sm:py-28 lg:py-32"
  >
    <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Section header -->
      <div class="mx-auto max-w-2xl text-center">
        <span
          class="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400"
        >
          Contact
        </span>
        <h2
          id="contact-heading"
          class="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Let's Work Together
        </h2>
        <p class="mt-4 text-base leading-relaxed text-neutral-400 sm:text-lg">
          Have a project, collaboration or opportunity in mind?
Feel free to get in touch.
        </p>
      </div>

      <!-- Two-column layout -->
      <div class="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
        <!-- ============ LEFT: Contact Info ============ -->
        <div class="flex flex-col">
          <ul role="list" class="grid grid-cols-2 gap-4 sm:gap-5">
            <li
              v-for="(card, index) in infoCards"
              :key="card.label"
              tabindex="0"
              class="info-card fade-up rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/20 focus-visible:-translate-y-1 focus-visible:border-white/20 focus-visible:outline-none"
              :style="{ animationDelay: `${index * 80}ms` }"
            >
              <div
                class="flex h-10 w-10 items-center justify-center rounded-xl"
                :style="{
                  background: `linear-gradient(135deg, ${card.accent}33, ${card.accent}11)`,
                }"
                aria-hidden="true"
              >
                <component
                  :is="card.icon"
                  class="h-5 w-5"
                  :style="{ color: card.accent }"
                  stroke-width="1.75"
                />
              </div>
              <p class="mt-3 text-xs font-medium text-neutral-500">
                {{ card.label }}
              </p>
              <p class="mt-0.5 text-sm font-semibold text-white sm:text-base">
                {{ card.value }}
              </p>
            </li>
          </ul>

          <!-- Social links + resume -->
          <div
            class="fade-up mt-6 flex flex-wrap items-center gap-3 sm:mt-8"
            style="animation-delay: 340ms"
          >
            <a
              href="https://github.com/MohamedBendari"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
              class="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-neutral-300 backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/20 hover:text-white focus-visible:-translate-y-1 focus-visible:border-white/20 focus-visible:outline-none"
            >
              <Github class="h-5 w-5" aria-hidden="true" />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/mohamedbendarysaber"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
              class="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-neutral-300 backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/20 hover:text-white focus-visible:-translate-y-1 focus-visible:border-white/20 focus-visible:outline-none"
            >
              <Linkedin class="h-5 w-5" aria-hidden="true" />
            </a>

            <a
  href="/Mohamed_Bendary_Saber_CV.pdf"
  download="Mohamed_Bendary_Saber_CV.pdf"
  target="_blank"
  rel="noopener"
  aria-label="Download my resume"
  class="ml-auto inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.08] focus-visible:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
>
  <Download class="h-4 w-4" aria-hidden="true" />
  Download Resume
</a>
          </div>
        </div>

        <!-- ============ RIGHT: Contact Form ============ -->
        <div
          class="form-card fade-up relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-300 ease-out sm:p-8"
          style="animation-delay: 160ms; --accent: #6366f1"
        >
          <form class="space-y-5" novalidate @submit.prevent="sendEmail">
            <div>
              <label for="contact-name" class="mb-1.5 block text-sm font-medium text-neutral-300">
                Name
              </label>
              <input
                id="contact-name"
                v-model="form.name"
                type="text"
                name="name"
                autocomplete="name"
                placeholder="Your name"
                class="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-neutral-600 transition-colors duration-300 focus:border-indigo-400/50 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
              />
            </div>

            <div>
              <label for="contact-email" class="mb-1.5 block text-sm font-medium text-neutral-300">
                Email
              </label>
              <input
                id="contact-email"
                v-model="form.email"
                type="email"
                name="email"
                autocomplete="email"
                placeholder="you@example.com"
                class="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-neutral-600 transition-colors duration-300 focus:border-indigo-400/50 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
              />
            </div>

            <div>
              <label for="contact-subject" class="mb-1.5 block text-sm font-medium text-neutral-300">
                Subject
              </label>
              <input
                id="contact-subject"
                v-model="form.subject"
                type="text"
                name="subject"
                placeholder="What's this about?"
                class="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-neutral-600 transition-colors duration-300 focus:border-indigo-400/50 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
              />
            </div>

            <div>
              <label for="contact-message" class="mb-1.5 block text-sm font-medium text-neutral-300">
                Message
              </label>
              <textarea
                id="contact-message"
                v-model="form.message"
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                class="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-neutral-600 transition-colors duration-300 focus:border-indigo-400/50 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 sm:w-auto"
            >
              <Send class="h-4 w-4" aria-hidden="true" />
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>

            <p
              v-if="statusMessage"
              class="text-sm"
              :class="statusType === 'success' ? 'text-emerald-400' : 'text-rose-400'"
              aria-live="polite"
            >
              {{ statusMessage }}
            </p>
          </form>
        </div>
      </div>
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

/* Info card glow on hover/focus */
.info-card:hover,
.info-card:focus-visible {
  box-shadow: 0 0 30px -14px rgba(99, 102, 241, 0.35);
}

/* Form card: gradient border + glow on hover OR focus-within (keyboard users tabbing into fields) */
.form-card::before {
  content: '';
  position: absolute;
  inset: -1px;
  z-index: -1;
  border-radius: 1.5rem;
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

.form-card:hover::before,
.form-card:focus-within::before {
  opacity: 0.6;
}

.form-card:hover,
.form-card:focus-within {
  box-shadow: 0 0 50px -16px var(--accent);
}

@media (prefers-reduced-motion: reduce) {
  .fade-up {
    animation: none;
    opacity: 1;
  }
}
</style>