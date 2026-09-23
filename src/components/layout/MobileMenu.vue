<script setup>
import { X } from 'lucide-vue-next'

defineProps({
  isOpen: Boolean,
  links: Array,
  activeSection: String,
  scrollToSection: Function,
})

const emit = defineEmits(['close'])

const handleClick = (id) => {
  scrollToSection(id)
  emit('close')
}
</script>

<template>
  <Transition name="fade">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
      @click="$emit('close')"
    >
      <div
        class="absolute right-0 top-0 h-full w-80 bg-[#0F172A] border-l border-white/10 shadow-2xl"
        @click.stop
      >
        <div class="flex items-center justify-between p-6 border-b border-white/10">
          <div>
            <h2 class="text-xl font-bold text-white">Mohamed Bendary</h2>
            <p class="text-sm text-gray-400">Software Engineer</p>
          </div>

          <button
            @click="$emit('close')"
            class="text-gray-300 hover:text-white"
          >
            <X :size="24" />
          </button>
        </div>

        <nav class="flex flex-col p-6 space-y-5">
          <button
            v-for="link in links"
            :key="link.id"
            @click="handleClick(link.id)"
            :class="[
              'text-left text-lg transition',
              activeSection === link.id
                ? 'text-violet-400'
                : 'text-gray-300 hover:text-white',
            ]"
          >
            {{ link.label }}
          </button>

          <a
            href="#contact"
            @click="$emit('close')"
            class="mt-8 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 py-3 text-center font-semibold text-white transition hover:scale-105"
          >
            Hire Me
          </a>
        </nav>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: .3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>