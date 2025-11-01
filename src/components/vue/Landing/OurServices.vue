<template>
        <section id="our-services" class="w-full h-full">

                <!-- Our Services -->
                <structure-basic-block extra-borders="bottom-border" padding="padding">
                        <template #no-padding>
                                <structure-basic-block extra-borders="bottom-border">
                                        <h2 text-split words-slide-up class="font-semibold text-neutral-100 font-heading py-4"><span
                                                        class="text-stone-700 pr-2 md:pr-8">3.</span>Nuestros Servicios
                                        </h2>
                                </structure-basic-block>
                                <div class="w-full h-fit flex flex-col gap-2 p-4 md:p-8">
                                        <ServiceCard data-animate="from-bottom" service-title="Identidad Visual"
                                                :url-image="identidadVisual" />
                                        <ServiceCard data-animate="from-bottom" service-title="Branding" bg-color="bg-orange-300"
                                                :url-image="branding" />
                                        <ServiceCard data-animate="from-bottom" service-title="Edicion de Video" bg-color="bg-amber-300"
                                                :url-image="edicionVideo" />
                                        <ServiceCard data-animate="from-bottom" service-title="Diseño Grafico" bg-color="bg-emerald-300"
                                                :url-image="disenoGrafico" />
                                        <ServiceCard data-animate="from-bottom" service-title="Desarollo Web" bg-color="bg-violet-300"
                                                :url-image="desarrolloWeb" />
                                        <ServiceCard data-animate="from-bottom" service-title="Gestion de Redes" bg-color="bg-stone-950"
                                                :url-image="gestionRedes" />
                                </div>
                        </template>
                </structure-basic-block>
        </section>
</template>
<script setup>
import StructureBasicBlock from "../_structure/basicBlock.vue";
import ServiceCard from "../../vue/content/ServiceCard.vue";
import {initAllAnimations} from '@animations/initAnimations.js'

const identidadVisual = new URL("../../../assets/services/branding-portada.webp", import.meta.url).href;
const branding = new URL("../../../assets/services/branding-portada.webp", import.meta.url).href;
const edicionVideo = new URL("../../../assets/services/edicion-de-video-portada.webp", import.meta.url).href;
const disenoGrafico = new URL("../../../assets/services/diseño-grafico-portada.webp", import.meta.url).href;
const desarrolloWeb = new URL("../../../assets/services/desarollo-web-portada.webp", import.meta.url).href;
const gestionRedes = new URL("../../../assets/services/gestion-de-redes-portada.webp", import.meta.url).href;



window.addEventListener('finishedPreloader', () => {
        initAllAnimations()
})

</script>