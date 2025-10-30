import { ScrollTrigger } from "./gsapSetup.js";

export function createScrollTrigger(triggerElement, timeline) {
  ScrollTrigger.create({
    trigger: triggerElement,
    scrub: 1.2,
    start: "top bottom",
    onLeaveBack: () => {
      timeline.progress(0);
      timeline.pause();
    },
  });

  ScrollTrigger.create({
    trigger: triggerElement,
    scrub: 1.2,
    start: "top 80%",
    onEnter: () => timeline.play(),
  });
}
