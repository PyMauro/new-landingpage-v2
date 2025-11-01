<script setup>
import Badge from "../_baseUi/badge.vue";
import BrandButton from "../Brand/Button.vue";
const props = defineProps({
    title: {
        type: String,
        required: false,
        default: "Proyecto Ejemplo"
    },
    serviceType: {
        type: String,
        required: false,
        default: "Servicio1,Servicio2,Servicio3"
    },
    urlImage: {
        type: String,
        default: ""
    }

    
});
function redirectTo(path) {
  window.location.href = path
}
</script>
<template>
    <article class="relative w-full bg-neutral-200 h-fit flex flex-col gap-4 overflow-hidden rounded-3xl p-3 border border-neutral-700">
        <div class="absolute add-dots left-0 top-0 opacity-70 rounded-full w-full h-full"></div>
        <div class="w-full h-full z-20">
            <img loading="lazy" :src="urlImage" :alt="' Portada de' + props.title" v-if="urlImage" class="h-96 w-full max-w-[1089px] aspect-video rounded-xl object-cover"/>
            <div v-else class="h-96 w-full aspect-video rounded-xl bg-slate-600">
            </div>
            <div class="flex w-full flex-col gap-4 sm:gap-2 justify-center items-start">
                <div class="flex gap-1 py-2 w-full flex-wrap">
                    <Badge v-for="service in props.serviceType.split(',')" :key="service">
                        {{ service }}
                    </Badge>
                </div>
                <h3 class="font-semibold w-full font-heading text-neutral-700">
                    {{ props.title }}
                </h3>
                <BrandButton text="Explorar Proyecto" bg-color="bg-amber-300" @click="() => redirectTo('/404')"/>
            </div>
        </div>
    </article>
</template>