import { gsap, ScrollTrigger } from "../core/gsapSetup.js";

export function initImageAnimations() {
  const animations = {
    "from-bottom": (el) =>
      gsap.fromTo(el,
        { opacity: 0, y: 80, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" }),
    "blur-up": (el) =>
      gsap.fromTo(
        el,
        { opacity: 0, y: 40, filter: "blur(2px)" },
        { opacity: 1, y: 0, filter: "blur(0)", duration: 1, ease: "power2.out" }
      ),
    "zoom-rotate": (el) =>
      gsap.from(el, { opacity: 0, scale: 0.8, rotation: -3, y: 30, duration: 1, ease: "power3.out" }),
  };

  document.querySelectorAll("[data-animate]").forEach((el) => {
    const type = el.dataset.animate;
    if (!animations[type]) return;

    const tl = gsap.timeline({ paused: true });
    tl.add(animations[type](el));

    ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      onEnter: () => tl.play(),
    });
  });
}
