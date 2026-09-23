<script setup>
import { ref } from "vue"
import { Menu } from "lucide-vue-next"

import Logo from "./Logo.vue"
import NavLinks from "./NavLinks.vue"
import MobileMenu from "./MobileMenu.vue"
import HireMeButton from "./HireMeButton.vue"

import { navLinks } from "@/data/navLinks"
import { useScrollSpy } from "@/composables/useScrollSpy"

const mobileOpen = ref(false)

const { activeSection, scrollToSection } = useScrollSpy([
  "home",
  "about",
  "Services",
  "projects",
  "experience",
  "contact",
])

const toggleMenu = () => {
  mobileOpen.value = !mobileOpen.value
}
</script>

<template>
  <header
    class="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/75 shadow-lg shadow-black/10 backdrop-blur-xl transition-all duration-300"
  >
    <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">

      <Logo />

      <NavLinks
        :links="navLinks"
        :active-section="activeSection"
        :scroll-to-section="scrollToSection"
      />

      <div class="flex items-center gap-4">

        <HireMeButton />

        <button
          class="text-white lg:hidden"
          @click="toggleMenu"
          aria-label="Open Menu"
        >
          <Menu :size="28" />
        </button>

      </div>

    </div>

    <MobileMenu
      :is-open="mobileOpen"
      :links="navLinks"
      :active-section="activeSection"
      :scroll-to-section="scrollToSection"
      @close="mobileOpen = false"
    />

  </header>
</template>
