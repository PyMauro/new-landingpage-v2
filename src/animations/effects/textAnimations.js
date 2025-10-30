import { gsap, SplitType } from "../core/gsapSetup.js";
import { createScrollTrigger } from "../core/createScrollTrigger.js";

export function initTextAnimations() {
  document.querySelectorAll("[text-split]").forEach((el) => {
    new SplitType(el, { types: "words, chars", tagName: "span" });
    gsap.set(el, { opacity: 1 });
  });

  document.querySelectorAll("[words-slide-from-right]").forEach((element) => {
    const tl = gsap.timeline({ paused: true });
    const words = element.querySelectorAll(".word");

    tl.from(words, {
      opacity: 0,
      x: "1em",
      duration: 0.6,
      ease: "power2.out",
      stagger: { amount: 0.2 },
    });

    createScrollTrigger(element, tl);
  });

  document.querySelectorAll("[words-slide-up]").forEach((element) => {
    const tl = gsap.timeline({ paused: true });
    new SplitType(element, { types: "words", tagName: "span" });
    const words = element.querySelectorAll(".word");
    tl.from(words, {
      opacity: 0,
      y: 20,
      scale: 0.98,
      stagger: 0.02,
      ease: "power3.out",
      duration: 1.2,
    });
    createScrollTrigger(element, tl);
  });
}
