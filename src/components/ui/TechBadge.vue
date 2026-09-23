<template>
  <span
    class="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5
           text-xs font-medium text-white/80 backdrop-blur-sm transition-all duration-300
           hover:-translate-y-0.5 hover:border-purple-400/40 hover:bg-white/10 hover:text-white sm:text-sm"
  >
    <span class="h-1.5 w-1.5 rounded-full" :class="dotColor" aria-hidden="true" />
    {{ label }}
  </span>
</template>

<script setup>
defineProps({
  label: { type: String, required: true },
  dotColor: { type: String, default: 'bg-purple-400' },
})
</script>