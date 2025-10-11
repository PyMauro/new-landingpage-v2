<template>
<section id="portfolioSection" class="w-full h-full">
    <StructureBasicBlock extra-borders="bottom-border" class="bg-neutral-100 rounded-3xl">
        <template #no-padding>
            <StructurePaddingContainer padding="padding">
                <structure-basic-block extra-borders="bottom-border" padding="padding">
                    <h2 class="font-semibold text-black font-heading"><span
                            class="text-stone-700 pr-2 md:pr-8">4.</span>Nuestro Trabajo Habla por Si Solo</h2>
                </structure-basic-block>
                <structure-basic-block padding="padding">

                            <div class="w-full flex flex-col gap-2">
                            <PortafolioCard
                                title='Identidad Visual: Romina Macri, expandiendo la cardiología al publico.'
                                serviceType='Desarollo Web, Gestion de Redes'
                                :url-image="rominaPortada.src"
                                />
                            <PortafolioCard
                                title='Branding: Femenina, un negocio amado por sus clientes.'
                                serviceType='Branding, Desarollo Web, Consultoria'
                                :url-image="femeninaPortada.src"
                                />

                            <PortafolioCard
                                title='Desarollo Web: Click Informativo, la voz de la sociedad.'
                                serviceType='Identidad Visual, Desarollo Web'
                                :url-image="clickInformativoPortada.src"
                            />

                            <PortafolioCard
                                title='Identidad Visual: SinGlu, comida casera, sin gluten y 100% organica.'
                                serviceType='Identidad Visual' 
                                :url-image="singluPortada.src"
                            />
                            </div>


                </structure-basic-block>
            </StructurePaddingContainer>
        </template>
    </StructureBasicBlock>
</section>

</template>
<script setup>
import StructureBasicBlock from "../_structure/basicBlock.vue";
import rominaPortada from '../../../assets/portfolio/romina-macri.png'
import femeninaPortada from '../../../assets/portfolio/femenina.png'
import clickInformativoPortada from '../../../assets/portfolio/click-informativo.png'
import singluPortada from '../../../assets/portfolio/singlu.png'
import StructurePaddingContainer from "../_structure/paddingContainer.vue";
import PortafolioCard from "../../vue/content/PorfolioCard.vue";


</script>
