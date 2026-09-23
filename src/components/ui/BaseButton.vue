<template>
  <component
    :is="tag"
    :href="href"
    :target="target"
    :rel="target === '_blank' ? 'noopener noreferrer' : undefined"
    :download="download"
    class="group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold
           outline-none transition-all duration-300 ease-out
           focus-visible:ring-2 focus-visible:ring-purple-400/70 sm:text-base"
    :class="variantClasses"
  >
    <slot name="icon-left" />
    <slot />
    <slot name="icon-right" />
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  tag: { type: String, default: 'a' },
  href: { type: String, default: undefined },
  target: { type: String, default: undefined },
  download: { type: [String, Boolean], default: undefined },
  variant: { type: String, default: 'primary' }, // 'primary' | 'secondary'
})

const variantClasses = computed(() =>
  props.variant === 'primary'
    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-[0_4px_14px_rgba(126,34,206,0.35)] hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(126,34,206,0.5),0_0_0_1px_rgba(96,165,250,0.25)]'
    : 'border border-white/15 bg-white/5 text-white/90 backdrop-blur-sm hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10'
)
</script>