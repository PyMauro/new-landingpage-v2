<template>    
            <!-- Our Services -->
    <structure-basic-block extra-borders="bottom-border"  padding="padding">
        <template #no-padding>
        <structure-basic-block extra-borders="bottom-border">
                <h2 class="font-semibold text-neutral-100 text-7xl font-heading py-4"><span class="text-stone-700 pr-8">3.</span>Nuestros Servicios</h2>
        </structure-basic-block>
                <div class="w-full h-fit flex flex-col gap-2 p-4 md:p-8">
                        <ServiceCard service-title="Identidad Visual / Branding"/>
                        <ServiceCard service-title="Edicion de Video" bg-color="bg-amber-300"/>
                        <ServiceCard service-title="Diseño Grafico" bg-color="bg-emerald-300"/>
                        <ServiceCard service-title="Desarollo Web" bg-color="bg-violet-300"/>
                        <ServiceCard service-title="Gestion de Redes" bg-color="bg-black" />
                </div>
        </template>
    </structure-basic-block>
</template>
<script setup>
import StructureBasicBlock from "../_structure/basicBlock.vue";
import ServiceCard from "../../vue/content/ServiceCard.vue";
</script>