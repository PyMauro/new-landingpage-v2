import gsap from '@animations/core/gsapSetup.js'

export function scrollTo(selector, duration = 1.2) {
  if (typeof window === "undefined") return

  const target = document.querySelector(selector)
  if (!target) {
    console.warn("Scroll target not found:", selector)
    return
  }

  gsap.to(window, { duration, scrollTo: { y: target }, ease: "power2.inOut" })
}
