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
    }
});
</script>
<template>
    <article class="w-full h-fit flex flex-col gap-4 rounded-3xl p-3 border border-neutral-700">
        <div class="h-96 w-full aspect-video rounded-xl bg-slate-600">
        </div>
        <div class="flex w-full flex-col gap-2 justify-center items-start">
            <div class="flex gap-1 py-2 w-full flex-wrap">
                <Badge v-for="service in props.serviceType.split(',')" :key="service">
                    {{ service }}
                </Badge>
            </div>
            <h3 class="font-semibold w-full  text-5xl font-heading text-neutral-700">
                {{ props.title }}
            </h3>
            <BrandButton text="Explorar Proyecto" bg-color="bg-amber-300" />
        </div>
    </article>
</template>