<script setup>
import hermesLogo from '@assets/logo/hermes-logo.svg'
import gsap from 'gsap'
import { onMounted } from 'vue'

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } })

  const hermesLogoSvg = document.getElementById('hermesLogo')
  const estudioHermesTextSvg = document.getElementById('estudioHermesText')
  const preloaderContent = document.getElementById('preloader-content')
  const preloaderContainer = document.getElementById('preloader-container')
  
  // Estado inicial
  gsap.set(hermesLogoSvg, { opacity: 0,scale: 3 })
  gsap.set(estudioHermesTextSvg, { display: 'none',opacity:0, x: '-20%' })
  gsap.set(preloaderContent, { y: 0 })

  // Secuencia con Timeline
  tl.to(hermesLogoSvg, { opacity: 1, duration: 0.8 })
    .to(hermesLogoSvg, { scale: 1.5, duration: 1 }, "+=1") // "+=1" = esperar 1s
    .to(estudioHermesTextSvg, { display:'block', x: 0, duration: 1 }, "-=0.5") // empieza medio segundo antes de terminar la anterior
    .to(estudioHermesTextSvg, { opacity:1, x: 0, duration: 2,ease:'power2.inOut' }, "-=0.2").then(() => {
      window.scrollTo(0, 0); // nos aseguramos de que la página esté en la parte superior
       const fallback = document.getElementById('preloader-fallback')
      if (fallback) fallback.remove()
    }).finally(() => {
      tl.to(preloaderContent, { y: '-150%', duration: 1,ease:'power4.out' }, "+=1")
      .to(preloaderContainer, { opacity: 0, duration: 0.8 }, "-=1")
      .set(preloaderContainer, { display: 'none' })
    }).finally(() => {
      window.dispatchEvent(new CustomEvent('finishedPreloader'))
    })
    
})
</script>

<template>
  <div class="w-full h-full" id="preloader-container">
    <div class="h-screen w-full fixed top-0 left-0 bg-black flex justify-center items-center z-[9999]">
      <div class="w-1/2 h-1/2 flex justify-center items-center gap-2" id="preloader-content">
        <img fetchpriority="high" id="hermesLogo" :src="hermesLogo.src" alt="Hermes Logo" class="w-24" />
        <div class="flex flex-col w-56 ml-6" id="estudioHermesText">
          <p class="font-body leading-[90px] font-light text-[58.84px] text-white">Estudio</p>
          <p class="font-body text-[60.65px] leading-1 text-white font-semibold relative -left-7">Hermes</p>
        </div>
      </div>
    </div>
  </div>
</template>
