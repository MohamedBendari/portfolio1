import { ref, onMounted, onUnmounted } from "vue"

export function useScrollSpy(sectionIds = []) {
  const normalizedIds = sectionIds.map((id) => id.toLowerCase())
  const activeSection = ref(normalizedIds[0] || "")
  const isScrolled = ref(false)

  let observer = null

  const updateScroll = () => {
    isScrolled.value = window.scrollY > 30
  }

  onMounted(() => {
    updateScroll()

    window.addEventListener("scroll", updateScroll)

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id.toLowerCase()
          }
        })
      },
      {
        threshold: 0.5,
        rootMargin: "-80px 0px -40% 0px",
      }
    )

    normalizedIds.forEach((id) => {
      const section = document.getElementById(id)

      if (section) {
        observer.observe(section)
      }
    })
  })

  onUnmounted(() => {
    window.removeEventListener("scroll", updateScroll)

    if (observer) {
      observer.disconnect()
    }
  })

  const scrollToSection = (id) => {
    const section = document.getElementById(id.toLowerCase())

    if (!section) return

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return {
    activeSection,
    isScrolled,
    scrollToSection,
  }
}