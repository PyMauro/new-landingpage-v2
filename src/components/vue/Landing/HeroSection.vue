<script setup>
import StructureBasicBlock from "../_structure/basicBlock.vue";
import {initAllAnimations} from '@animations/initAnimations.js'
import BrandButton from "../Brand/Button.vue";
import {scrollTo} from '../../../utils/gsapClient'
import { onMounted } from "vue";
onMounted(() => {
        window.addEventListener('finishedPreloader',() => {
    setTimeout(() => {
            initAllAnimations()
        },1000)
        })
})
</script>

<template>
<section id="heroSection" class="w-full h-full">
            <StructureBasicBlock extra-borders="bottom-border" class="py-12">
                
            </StructureBasicBlock>
        <StructureBasicBlock extra-borders="bottom-border" class="py-8">
        <StructureBasicBlock padding="padding">
            <div class="flex flex-col gap-4">
                <h1 text-split words-slide-up class="font-heading  text-white font-semibold  tracking-[-1.2%] md:max-w-5/6 text-balance">
                  <span class="text-amber-400">No existe segunda ocasion, <br class="hidden sm:block"> </span>para causar una buena primera impresión.
                </h1>
                <div class="flex flex-col gap-4">
                    <p text-split words-slide-up class="font-body text-lg text-neutral-300 text-balance">Es por eso que debe dejar marca en la mente del consumidor. Esa es mi Especialidad. Asegurarte que tu negocio enamore a primera vista.</p>
                    <div  data-animate="from-bottom" class="flex gap-4 flex-col sm:flex-row">
                        <BrandButton text="Agendar Cita" bgColor="bg-amber-400 text-stone-800 px-4" :action="() => scrollTo('#contactSection')" />
                        <BrandButton text="Ver Servicios" bgColor="bg-violet-400 text-stone-800 px-4" :action="() => scrollTo('#our-services')"/>
                    </div>
                </div>
            </div>
        </StructureBasicBlock>
    </StructureBasicBlock>
</section>
</template>