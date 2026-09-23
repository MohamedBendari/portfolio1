<script setup>
defineProps({
  links: {
    type: Array,
    required: true,
  },

  activeSection: {
    type: String,
    default: "",
  },

  scrollToSection: {
    type: Function,
    required: true,
  },
})
</script>

<template>
  <nav class="hidden items-center gap-8 lg:flex">
    <button
      v-for="link in links"
      :key="link.id"
      @click="scrollToSection(link.id)"
      :class="[
        'group relative text-sm font-medium transition-all duration-300',
        activeSection === link.id
          ? 'text-violet-400'
          : 'text-gray-300 hover:text-white',
      ]"
    >
      {{ link.label }}

      <span
        class="absolute -bottom-2 left-0 h-0.5 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 transition-all duration-300"
        :class="
          activeSection === link.id
            ? 'w-full'
            : 'w-0 group-hover:w-full'
        "
      ></span>
    </button>
  </nav>
</template>