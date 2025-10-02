<template>

    <StructureBasicBlock extra-borders="bottom-border" class="bg-neutral-100 rounded-3xl">
        <template #no-padding>
            <StructurePaddingContainer padding="padding">
                <structure-basic-block extra-borders="bottom-border" padding="padding">
                    <h2 class="font-semibold text-black text-7xl font-heading"><span
                            class="text-stone-700 pr-8">4.</span>Nuestro Trabajo Habla por Si Solo</h2>
                </structure-basic-block>
                <structure-basic-block padding="padding">
                    <StructureBasicBlock extra-borders="bottom-border" class="bg-neutral-100 rounded-3xl">
                        <template #no-padding>
                                <PortafolioCard
                                    title='Identidad Visual: Romina Macri, expandiendo la cardiología al publico.'
                                    serviceType='Desarollo Web' />
                        </template>
                    </StructureBasicBlock>

                </structure-basic-block>
            </StructurePaddingContainer>
        </template>
    </StructureBasicBlock>


</template>
<script setup>
import StructureBasicBlock from "../_structure/basicBlock.vue";
import StructurePaddingContainer from "../_structure/paddingContainer.vue";
import PortafolioCard from "../../vue/content/PorfolioCard.vue";
</script>