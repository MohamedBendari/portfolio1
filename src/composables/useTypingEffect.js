import { ref, onMounted, onUnmounted } from 'vue'

export function useTypingEffect(words, options = {}) {
  const {
    typingSpeed = 90,
    deletingSpeed = 45,
    pauseDuration = 1600,
    startDelay = 500,
  } = options

  const displayText = ref('')
  let wordIndex = 0
  let charIndex = 0
  let isDeleting = false
  let timeoutId = null

  const tick = () => {
    const currentWord = words[wordIndex]

    charIndex += isDeleting ? -1 : 1
    displayText.value = currentWord.slice(0, charIndex)

    let delay = isDeleting ? deletingSpeed : typingSpeed

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true
      delay = pauseDuration
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false
      wordIndex = (wordIndex + 1) % words.length
      delay = 300
    }

    timeoutId = setTimeout(tick, delay)
  }

  onMounted(() => {
    timeoutId = setTimeout(tick, startDelay)
  })

  onUnmounted(() => {
    clearTimeout(timeoutId)
  })

  return { displayText }
}