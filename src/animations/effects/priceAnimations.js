import { gsap } from "../core/gsapSetup.js";
import { createScrollTrigger } from "../core/createScrollTrigger.js";
import { SplitType } from "../core/gsapSetup.js";

export function initPriceAnimation() {
  document.querySelectorAll(".price-block").forEach((block) => {
    const oldPrice = block.querySelector(".old-price");
    const newPrice = block.querySelector(".new-price");
    const description = block.querySelector("[words-slide-up]");
    if (!oldPrice || !newPrice || !description) return;

    const tl = gsap.timeline({ paused: true });
    tl.from(description, { opacity: 0, y: 20, duration: 0.8, ease: "power3.out" })
      .fromTo(
        oldPrice,
        { opacity: 0, scale: 1.6, y: 60, color: "#000" },
        { opacity: 1, scale: 1, y: 0, color: "#6B7280", duration: 1.2, ease: "power3.out" },
        "-=0.3"
      )
      .to(oldPrice, { textDecoration: "line-through", scale: 0.8, y: -5, duration: 0.6 })
      .fromTo(
        newPrice,
        { opacity: 0, scale: 1.2, y: 15 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.3"
      );

    createScrollTrigger(block, tl);
  });

  document.querySelectorAll(".price-container").forEach((el) => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
    });

    tl.from(el, { opacity: 0, y: 30, scale: 0.95, duration: 0.6, ease: "power3.out" });

    el.querySelectorAll("[words-slide-up]").forEach((text) => {
      const split = new SplitType(text, { types: "words", tagName: "span" });
      tl.from(split.words, {
        opacity: 0,
        y: 20,
        scale: 0.98,
        stagger: 0.02,
        duration: 0.6,
        ease: "power3.out",
      }, "-=0.3");
    });
  });
}
