<template>
<section id="portfolioSection" class="w-full h-full py-16 lg:py-32 px-6 lg:px-0">
    <StructureBasicBlock extra-borders="bottom-border" class="bg-neutral-100 rounded-3xl">
        <template #no-padding>
            <StructurePaddingContainer padding="padding">
                <structure-basic-block extra-borders="bottom-border" padding="padding">
                    <h2 class="font-semibold text-black font-heading"><span
                            class="text-stone-700 pr-8">4.</span>Nuestro Trabajo Habla por Si Solo</h2>
                </structure-basic-block>
                <structure-basic-block padding="padding">

                            <div class="w-full flex flex-col gap-2">
                            <PortafolioCard
                                title='Identidad Visual: Romina Macri, expandiendo la cardiología al publico.'
                                serviceType='Desarollo Web, Gestion de Redes' />
                            <PortafolioCard
                                title='Branding: Femenina, un negocio amado por sus clientes.'
                                serviceType='Branding, Desarollo Web, Consultoria' />

                            <PortafolioCard
                                title='Desarollo Web: Click Informativo, la voz de la sociedad.'
                                serviceType='Identidad Visual, Desarollo Web' />

                            <PortafolioCard
                                title='Identidad Visual: SinGlu, comida casera, sin gluten y 100% organica.'
                                serviceType='Identidad Visual' />
                            </div>


                </structure-basic-block>
            </StructurePaddingContainer>
        </template>
    </StructureBasicBlock>
</section>

</template>
<script setup>
import StructureBasicBlock from "../_structure/basicBlock.vue";
import StructurePaddingContainer from "../_structure/paddingContainer.vue";
import PortafolioCard from "../../vue/content/PorfolioCard.vue";
</script>