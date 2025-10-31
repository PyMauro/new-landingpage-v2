<template>
  <nav class="fixed top-0 left-0 w-full h-screen pointer-events-none z-100 overflow-x-hidden">
    <div class="menu-bar fixed top-0 left-0 w-full py-4 sm:px-8 md:px-16 lg:px-36 flex justify-between items-center pointer-events-auto z-[2]">
      <div class="menu-logo w-32 h-14">
        <a href="/" class="block w-full h-full">
          <img src="/hermes-logo.svg" alt="menu logo" class="w-full h-full object-contain" />
        </a>
      </div>

      <div class="menu-toggle-btn flex items-center gap-1 md:gap-4 cursor-pointer">
        <div class="menu-toggle-label overflow-hidden">
          <p class="relative transform translate-y-0 text-[0.95rem] font-medium text-[#5f5f5f] will-change-transform">
            Menu
          </p>
        </div>
        <div
          class="menu-hamburger-icon relative w-12 h-12 flex flex-col justify-center items-center border border-white/10 rounded-full">
          <span
            class="absolute w-[15px] h-[1.25px] bg-white transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] origin-center will-change-transform -translate-y-[3px]"></span>
          <span
            class="absolute w-[15px] h-[1.25px] bg-white transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] origin-center will-change-transform translate-y-[3px]"></span>
        </div>
      </div>
    </div>

    <div
      class="menu-overlay fixed top-0 left-0 w-full h-screen text-white overflow-hidden z-[1] bg-[#0f0f0f] will-change-[clip-path]"
      style="clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)">
      <div
        class="menu-overlay-content fixed top-0 left-0 w-full h-screen flex transform -translate-y-1/2 will-change-transform pointer-events-auto">
        <div class="menu-media-wrapper flex-[2] opacity-0 will-change-opacity">
          <img
            src="/menu-media.png"
            alt="estudio hermes mascot"
            class="w-full h-full object-cover rounded-xl opacity-25" />
        </div>

        <div class="menu-content-wrapper flex-[3] relative flex flex-col">
          <div
            class="menu-content-main absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 p-8 flex items-end gap-8">
            <div class="menu-col flex flex-col gap-[0.1rem] flex-[3]">
              <div><a href="/" class="menu-link text-white md:text-[2.5rem] font-body text-[1.5rem] font-medium leading-[1.2]">Home</a></div>
              <div><a href="/portafolio" class="menu-link text-white md:text-[2.5rem] font-body text-[1.5rem] font-medium leading-[1.2]">Portafolio</a></div>
              <div><a href="#aboutUsSection" class="menu-link text-white md:text-[2.5rem] font-body text-[1.5rem] font-medium leading-[1.2]">Sobre Nosotros</a></div>
              <div><a href="#our-services" class="menu-link text-white md:text-[2.5rem] font-body text-[1.5rem] font-medium leading-[1.2]">Servicios</a></div>
              <div><a href="#contactSection" class="menu-link text-white md:text-[2.5rem] font-body text-[1.5rem] font-medium leading-[1.2]">Contactar</a></div>
            </div>
<!-- 
            <div class="menu-col flex flex-col justify-center gap-[0.1rem] flex-[2]">
              <div class="menu-tag"><a href="#" class="text-[#5f5f5f] text-[1.5rem] font-medium">Edición</a></div>
              <div class="menu-tag"><a href="#" class="text-[#5f5f5f] text-[1.5rem] font-medium">Desarrollo Web</a></div>
              <div class="menu-tag"><a href="#" class="text-[#5f5f5f] text-[1.5rem] font-medium">Diseño de Marca</a></div>
              <div class="menu-tag"><a href="#" class="text-[#5f5f5f] text-[1.5rem] font-medium">Animación</a></div>
              <div class="menu-tag"><a href="#" class="text-[#5f5f5f] text-[1.5rem] font-medium">Publicidad</a></div>
            </div> -->
          </div>

          <div class="menu-footer mx-auto w-3/4 p-4 flex flex-col items-start gap-8 mt-auto">
            <div class="menu-col flex flex-col gap-[0.1rem] flex-[3]">
              <p class="text-[0.95rem] font-medium text-[#5f5f5f]"><span class="whitespace-nowrap">Colón, Entre Ríos</span>, Argentina</p>
            </div>
            <div class="menu-col flex flex-col pb-4 gap-[0.1rem] flex-[2]">
              <p class="text-[0.95rem] font-medium text-[#5f5f5f]">+54 3447 40-2668</p>
              <p class="text-[0.95rem] font-medium text-[#5f5f5f]">hermesagenciaweb@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <div class="theContainer relative bg-brandBlack-500 text-white w-[100vw] max-w-[100vw]" :style="`height: ${containerHeight}`">
    <slot />
  </div>
</template>

<script setup>
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { SplitText } from "gsap/SplitText";
import { onMounted } from "vue";
const props = defineProps({
  containerHeight: {
    type: String,
    default: "max-content",
  },
});

onMounted(() => {
  gsap.registerPlugin(CustomEase, SplitText);
  CustomEase.create("hop", ".87, 0, .13, 1");

  const splitTextByContainer = [];

  document.fonts.ready.then(() => {
    const textContainers = document.querySelectorAll(".menu-col");
    textContainers.forEach((container) => {
      const textElements = container.querySelectorAll("a, p");
      const containerSplits = [];
      textElements.forEach((element) => {
        const split = SplitText.create(element, {
          type: "lines",
          mask: "lines",
          linesClass: "line",
        });
        containerSplits.push(split);
        gsap.set(split.lines, { y: "-110%" });
      });
      splitTextByContainer.push(containerSplits);
    });
  });

  const menuToggleBtn = document.querySelector(".menu-toggle-btn");
  const menuOverlay = document.querySelector(".menu-overlay");
  const menuOverlayContainer = document.querySelector(".menu-overlay-content");
  const menuMediaWrapper = document.querySelector(".menu-media-wrapper");
  const copyContainers = document.querySelectorAll(".menu-col");
  const menuToggleLabel = document.querySelector(".menu-toggle-label p");
  const hamburgerIcon = document.querySelector(".menu-hamburger-icon");

  let isMenuOpen = false;
  let isAnimating = false;

  menuToggleBtn.addEventListener("click", () => {
    if (isAnimating) return;

    if (!isMenuOpen) {
      isAnimating = true;
      document.body.style.overflow = "hidden"; // bloquea scroll

      const tl = gsap.timeline();

      tl.to(menuToggleLabel, { y: "-110%", duration: 1, ease: "hop" })
        .to(menuOverlay, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1, ease: "hop" }, "<")
        .to(menuOverlayContainer, { yPercent: 0, duration: 1, ease: "hop" }, "<")
        .to(menuMediaWrapper, { opacity: 1, duration: 0.75, ease: "power2.out", delay: 0.5 }, "<");

      splitTextByContainer.forEach((containerSplits) => {
        const copyLines = containerSplits.flatMap((split) => split.lines);
        tl.to(copyLines, { y: "0%", duration: 2, ease: "hop", stagger: -0.075 }, -0.15);
      });

      hamburgerIcon?.classList.add("active");

      tl.call(() => {
        isAnimating = false;
      });

      isMenuOpen = true;
    } else {
      isAnimating = true;
      hamburgerIcon?.classList.remove("active");

      const tl = gsap.timeline();
      tl.to(menuOverlay, { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", duration: 1, ease: "hop" }, "<")
        .to(menuOverlayContainer, { yPercent: -50, duration: 1, ease: "hop" }, "<")
        .to(menuToggleLabel, { y: "0%", duration: 1, ease: "hop" }, "<")
        .to(copyContainers, { opacity: 0.25, duration: 1, ease: "hop" }, "<");

      tl.call(() => {
        splitTextByContainer.forEach((containerSplits) => {
          const copyLines = containerSplits.flatMap((split) => split.lines);
          gsap.set(copyLines, { y: "-110%" });
        });

        gsap.set(copyContainers, { opacity: 1 });
        gsap.set(menuMediaWrapper, { opacity: 0 });
        document.body.style.overflow = ""; // restablece scroll
        isAnimating = false;
      });

      isMenuOpen = false;
    }
  });
});
</script>

<style scoped>
.menu-hamburger-icon.active span:nth-child(1) {
  transform: translateY(-2px) translateX(1px) rotate(45deg) scale(1.05);
  transform-origin: 0%;
}

.menu-hamburger-icon.active span:nth-child(2) {
  transform: translateY(-2px) rotate(-45deg) scale(1.05);
}

.line {
  position: relative;
  will-change: transform;
}

@media (max-width: 1000px) {
  .menu-logo {
    width: 8rem;
    height: 2.3rem;
  }

  .menu-content-main {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .menu-link {
    font-size: 2rem !important;
  }

  .menu-tag a {
    font-size: 1.25rem !important;
  }
}
</style>
