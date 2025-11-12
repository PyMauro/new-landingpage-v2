<script setup>
import StructureBasicBlock from "../_structure/basicBlock.vue";
import portadaDeFondo from '@assets/Portada-de-fondo.webp'
import StructurePaddingContainer from "../_structure/paddingContainer.vue";
import BrandButton from "../Brand/Button.vue";
import { scrollTo } from '../../../utils/gsapClient'
import gsap from "gsap";
import { onMounted } from "vue";

onMounted(() => {
  // Carga diferida de animaciones generales (sin tocar)
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() =>
      import('@animations/initAnimations.js').then(m => m.initAllAnimations())
    );
  } else {
    setTimeout(() =>
      import('@animations/initAnimations.js').then(m => m.initAllAnimations()), 500
    );
  }

  // ⚡ Escuchar el evento del preloader
  const handlePreloaderEnd = () => {
    setTimeout(
      requestAnimationFrame(() => {
        const heroContent = document.querySelector('.hero-content-block');
        const mask = document.querySelector('.hero-mask');
  
        const tl = gsap.timeline();
  
        // 1️⃣ Portada (mask-portada) aparece
        tl.from(".mask-portada", { 
          scale: 2, 
          opacity: 0,
          duration: 1.6,
          ease: "power3.out"
        })
  
        // 2️⃣ Cierre de máscara
        .to(mask, { 
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          scale: 0.95,
          duration: 1.4,
          ease: "power4.out"
        }, "-=0.6")
  
        // 3️⃣ Entrada del contenido (texto y botones)
        .from(heroContent, { 
          opacity: 0, 
          y: 80, 
          scale: 0.95, 
          duration: 1.4, 
          ease: "power2.out" 
        }, "-=1");
      })
    ,400)
  };

  // Si el preloader ya terminó antes del mount (por recarga), disparamos igual
  if (window.preloaderFinished) {
    handlePreloaderEnd();
  } else {
    // Escuchamos el evento global
    window.addEventListener('finishedPreloader', handlePreloaderEnd, { once: true });
  }
});
</script>
<template>
  <section id="heroSection" class="w-full overflow-hidden">
    <StructureBasicBlock
      padding="no-padding"
      extra-borders="no-extra-borders"
      class="bg-black h-full py-0"
    >
      <div slot="no-padding" class="py-0 my-0">
        <div class="w-full h-screen bg-black py-0 relative rounded-b-5xl overflow-hidden">
          <div class="hero-mask absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <img 
              :src="portadaDeFondo.src" 
              alt="" 
              class="mask-portada w-full h-full object-cover object-center"
            />
          </div>

          <div class="hero-content-block z-10 w-full h-full flex justify-center flex-col items-center">
            <h1 class="z-10 text-center text-gray-50 leading-[-1.2%]">
              HACEMOS QUE TU MARCA <span class="text-amber-200">VENDA</span>
            </h1>
            <p class="w-full px-4 md:px-0 z-10 text-center md:w-2/3 md:text-balance text-neutral-300">
              Identidad, web y contenido diseñados para convertir clientes de verdad, Basta de verte Amateur.
            </p>
            <div class="px-6 md:px-0 flex flex-col md:flex-row justify-center gap-4 w-full py-4 font-light">
              <BrandButton text="Agendar Cita" bgColor="bg-amber-400 text-stone-800 px-4" href="#contactSection" />
              <BrandButton text="Ver Servicios" bgColor="bg-violet-400 text-stone-800 px-4" href="#our-services" />
            </div>
          </div>
        </div>
      </div>
    </StructureBasicBlock>
  </section>
</template>

<style scoped>
.hero-mask {
  width: 100%;
  height: 100%;
  overflow: hidden;
  clip-path: polygon(30% 30%, 70% 30%, 70% 70%, 30% 70%);
}

.mask-portada {
  width: 100%;
  height: 100%;
  object-fit: cover;   /* se adapta al contenedor */
  object-position: center; /* centrada */
}
</style>
