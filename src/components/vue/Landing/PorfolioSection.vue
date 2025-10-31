<template>
<section id="portfolioSection" class="w-full h-full">
    <StructureBasicBlock extra-borders="bottom-border" class="bg-neutral-100 rounded-3xl">
        <template #no-padding>
            <StructurePaddingContainer padding="padding">
                <structure-basic-block extra-borders="bottom-border" padding="padding">
                    <h2 text-split words-slide-up class="font-semibold text-black font-heading"><span
                            class="text-stone-700 pr-2 md:pr-8">4.</span>Nuestro Trabajo Habla por Si Solo</h2>
                </structure-basic-block>
                <structure-basic-block padding="padding">

                            <div class="w-full flex flex-col gap-2">

                            
                            <PortafolioCard 
                                data-animate="from-bottom"
                                title='Identidad Visual: SinGlu, comida casera, sin gluten y 100% organica.'
                                serviceType='Identidad Visual' 
                                :url-image="singluPortada"
                            />
                            <PortafolioCard 
                                data-animate="from-bottom"
                                title='Branding: Femenina, un negocio amado por sus clientes.'
                                serviceType='Branding, Desarollo Web, Consultoria'
                                :url-image="femeninaPortada"
                                />


                            
                            <PortafolioCard 
                                data-animate="from-bottom"
                                title='Identidad Visual: Romina Macri, expandiendo la cardiología al publico.'
                                serviceType='Desarollo Web, Gestion de Redes'
                                :url-image="rominaPortada"
                                />
                            
                            <PortafolioCard 
                                data-animate="from-bottom"
                                title='Desarollo Web: Click Informativo, la voz de la sociedad.'
                                serviceType='Identidad Visual, Desarollo Web'
                                :url-image="clickInformativoPortada"
                            />
                            
                            

                            </div>


                </structure-basic-block>
            </StructurePaddingContainer>
        </template>
    </StructureBasicBlock>
</section>

</template>
<script setup>
import StructurePaddingContainer from "../_structure/paddingContainer.vue";
import StructureBasicBlock from "../_structure/basicBlock.vue";
import PortafolioCard from "../../vue/content/PorfolioCard.vue";
import {initAllAnimations} from '@animations/initAnimations.js'


// rutas seguras para build y deploy
const rominaPortada = new URL("../../../assets/portfolio/romina-macri.png", import.meta.url).href;
const femeninaPortada = new URL("../../../assets/portfolio/femenina.png", import.meta.url).href;
const clickInformativoPortada = new URL("../../../assets/portfolio/clickInformativo.png", import.meta.url).href;
const singluPortada = new URL("../../../assets/portfolio/singlu.png", import.meta.url).href;

window.addEventListener('finishedPreloader', () => {
        initAllAnimations()
})

</script>
