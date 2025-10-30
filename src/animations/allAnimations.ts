//Hero animation
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

window.addEventListener("finishedPreloader", () => {

  gsap.from("#hero-image", {  
    y: 200,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "expo.inOut",
  });

  const heroTitle = document.querySelector("#hero-title");

  if (!heroTitle) return;

  const split = new SplitText(heroTitle, { type: "lines", linesClass: "line" });

  gsap.from(split.lines, {
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    ease: "expo.out",
    delay: 1.2,
  });
  // Función para crear un ScrollTrigger asociado a un timeline
  //@ts-ignore
  function createScrollTrigger(triggerElement, timeline) {
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

  // Inicializa SplitType en los elementos que tengan el atributo [text-split]
  document.querySelectorAll("[text-split]").forEach((el) => {
    //@ts-ignore
    new SplitType(el, {
      types: "words, chars",
      tagName: "span",
    });
  });

  // === Words Slide From Right Animation ===
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

  // === Letters Slide Up Animation ===
  document.querySelectorAll("[words-slide-up]").forEach((element) => {
    const tl = gsap.timeline({ paused: true });
    //@ts-ignore
    const split = new SplitType(element, { types: "words", tagName: "span" });
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

  // Asegura que el texto esté visible luego del split
  document.querySelectorAll("[text-split]").forEach((el) => {
    gsap.set(el, { opacity: 1 });
  });

  function initImageAnimations() {
    const animations: Record<string, (el: HTMLElement) => gsap.core.Tween> = {
      "from-bottom": (el) =>
        gsap.from(el, {
          opacity: 0,
          y: 80,
          scale: 0.95,
          duration: 1.2,
          ease: "power3.out",
        }),
      "blur-up": (el) =>
        gsap.fromTo(
          el,
          { opacity: 0, y: 40, filter: "blur(10px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            ease: "power2.out",
          }
        ),
      "zoom-rotate": (el) =>
        gsap.from(el, {
          opacity: 0,
          scale: 0.8,
          rotation: -3,
          y: 30,
          duration: 1,
          ease: "power3.out",
        }),
    };

    document.querySelectorAll<HTMLElement>("[data-animate]").forEach((el) => {
      const style = el.getAttribute("data-animate");
      if (!style || !animations[style]) return;

      const tl = gsap.timeline({ paused: true });
      tl.add(animations[style](el));

      ScrollTrigger.create({
        trigger: el,
        scrub: 1.2,
        start: "top 85%",
        onEnter: () => tl.play(),
      });
    });
  }

  initImageAnimations();

  // PRICE BLOCK ANIMATION
  function initPriceAnimation() {
    document.querySelectorAll(".price-block").forEach((block) => {
      const oldPrice = block.querySelector(".old-price");
      const newPrice = block.querySelector(".new-price");
      const description = block.querySelector("[words-slide-up]");

      if (!oldPrice || !newPrice || !description) return;

      // Creamos timeline pausado
      const tl = gsap.timeline({ paused: true });

      // Etapa 1: aparece el texto descriptivo
      tl.from(description, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
      });

      // Etapa 2: aparece el precio viejo, grande
      tl.fromTo(
        oldPrice,
        { opacity: 0, scale: 1.6, y: 60, color: "#000000" }, // empieza más abajo y negro
        {
          opacity: 1,
          scale: 1,
          y: 0,
          color: "#6B7280",
          duration: 1.2,
          ease: "power3.out",
        }, // color final text-neutral-500
        "-=0.3"
      );

      // Etapa 3: se tacha, se achica y sube
      tl.to(oldPrice, {
        textDecoration: "line-through",
        scale: 0.8,
        y: -5,
        duration: 0.6,
        ease: "power2.inOut",
      });

      // Etapa 4: entra el nuevo precio con fuerza
      tl.fromTo(
        newPrice,
        { opacity: 0, scale: 1.2, y: 15 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.3"
      );

      // Conectamos el ScrollTrigger
      //@ts-ignore
      createScrollTrigger(block, tl, { start: "top 85%" });
    });
  }

  //Animacion elementos con texto dinamico dentro
document.querySelectorAll('.price-container').forEach((el) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });

  // Animación del contenedor
  tl.from(el, {
    opacity: 0,
    y: 30,
    scale: 0.95,
    duration: 0.6,
    ease: "power3.out",
  });

  // Animación del texto interno
  el.querySelectorAll("[words-slide-up]").forEach((text) => {
    const split = new SplitType(text, { types: "words", tagName: "span" });
    tl.from(
      split.words,
      {
        opacity: 0,
        y: 20,
        scale: 0.98,
        stagger: 0.02,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.3" // se superpone un poco con la animación del contenedor
    );
  });
});

  initPriceAnimation();
});
