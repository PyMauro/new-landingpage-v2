<template>
        <!-- About Us Section -->
        <StructureBasicBlock extra-borders="bottom-border" class="bg-neutral-100 rounded-3xl">
                <template #no-padding>
                        <StructurePaddingContainer padding="padding">
                                <structure-basic-block extra-borders="bottom-border" padding="padding">
                                        <h2 class="font-semibold text-black text-7xl font-heading"><span
                                                        class="text-stone-700 pr-8">2.</span>Hermes, es mas que un
                                                estudio de
                                                diseño.</h2>
                                </structure-basic-block>
                                <structure-basic-block padding="padding">

                                        <div class="w-2/3 flex flex-col gap-4 h-fit py-16 relative">
                                                <p class="text-stone-700 text-xl">Cuando cree hermes lo hice mirando de
                                                        cerca en redes como negocios Estadounidenses o europeos tenían
                                                        marcas tan atrapantes y nosotros, latinos, lleno de cultura y
                                                        diversidad, estábamos rodeados de negocios sin alma y sin
                                                        estética. </p class="text-stone-700 text-xl">
                                                <p class="text-stone-700 text-xl font-bold">De ahi me pregunte, ¿Que
                                                        puedo hacer para cambiar esto?. </p
                                                        class="text-stone-700 text-xl">
                                                <p class="text-stone-700 text-xl">
                                                        Ahi entendí que la realidad es que como emprendedores
                                                        supervivientes, no tenemos el tiempo para aprender todas las
                                                        herramientas, seguir las tendencias, manejar las redes, y
                                                        dedicarle tiempo a promocionar nuestro negocio. Ya todo nuestro
                                                        tiempo se lo lleva el hacer que funcione, o bueno, eso se cree.
                                                </p>
                                                <p class="text-stone-700 text-xl">Es ahi donde <span
                                                                class="font-bold">mi misión se volvió clara, ayudar a
                                                                instituciones, negocios y emprendedores a destacar en
                                                                esta nueva era digital </span> y brindarles todas las
                                                        herramientas necesarias para que puedan, no solo sobrevivir a
                                                        este avance cada vez mas veloz, sino crecer a la velocidad del
                                                        cambio.</p class="text-stone-700 text-xl">
                                                <img src="Me.png"
                                                        alt="Primera plana de Mauro sentado sobre un sofa futon, imagen con ruido vectorial."
                                                        class="absolute -right-3/4 -top-32 w-4/5 z-10"></img>
                                        </div>

                                </structure-basic-block>
                        </StructurePaddingContainer>
                </template>
        </StructureBasicBlock>
</template>

<script setup>
import StructureBasicBlock from "../_structure/basicBlock.vue";
import StructurePaddingContainer from "../_structure/paddingContainer.vue";
</script>