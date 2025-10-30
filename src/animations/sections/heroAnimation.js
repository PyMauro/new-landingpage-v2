import { gsap, SplitText } from "../core/gsapSetup.js";

export function initHeroAnimation() {
  const heroImage = document.querySelector("#hero-image");
  const heroTitle = document.querySelector("#hero-title");

  if (heroImage)
    gsap.from(heroImage, { y: 200, opacity: 0, duration: 1, delay: 0.5, ease: "expo.inOut" });

  if (heroTitle) {
    const split = new SplitText(heroTitle, { type: "lines", linesClass: "line" });
    gsap.from(split.lines, {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "expo.out",
      delay: 1.2,
    });
  }
}
