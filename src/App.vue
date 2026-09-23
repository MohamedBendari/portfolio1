<script setup>
import Navbar from "@/components/layout/Navbar.vue"

import HeroSection from "@/sections/Hero/HeroSection.vue"
import TechStackSection from "@/sections/TechStack/TechStackSection.vue"
import AboutSection from "@/sections/About/AboutSection.vue"
import ServicesSection from "@/sections/Services/ServicesSection.vue"
import ProjectsSection from "@/sections/Projects/ProjectsSection.vue"
import ExperienceSection from "@/sections/Experiences/ExperienceSection.vue"
import ContactSection from "@/sections/Contact/ContactSection.vue"
import FooterSection from "@/sections/Footer/FooterSection.vue"
</script>

<template>
  <Navbar />

  <main class="bg-slate-950">
    <!-- Hero -->
    <HeroSection />

    <!-- Tech Stack -->
    <TechStackSection />

    <!-- About -->
    <AboutSection />
    
    <!-- Services -->
    <ServicesSection />

    <!-- Projects -->
    <ProjectsSection />

    <!-- Experience -->
    <ExperienceSection />


    <!-- Contact -->
    <ContactSection />

    <!-- Footer -->
    <FooterSection />
  </main>
</template>