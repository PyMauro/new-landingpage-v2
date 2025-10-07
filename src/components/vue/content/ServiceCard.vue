<script setup>
import BrandButton from "../Brand/Button.vue";
const props = defineProps({
    serviceTitle: {
        type: String,
        default: "Servicio de Ejemplo"
    },
    bgColor: {
        type: String,
        default: "bg-neutral-100"
    }
});
</script>
<template>
    <article class="w-full h-fit flex flex-col gap-4 md:flex-row rounded-3xl p-3" :class="props.bgColor">
        <div class="w-full h-64 max-w-none sm:max-w-3/4 aspect-video rounded-xl bg-slate-600">
        </div>
        <div class="flex flex-col gap-4 sm:gap-2 justify-center items-start w-full max-w-none md:max-w-1/3">
            <h3 class="font-semibold font-heading" :class="props.bgColor === 'bg-black' ? 'text-white' : 'text-stone-800'"> 
                {{ props.serviceTitle }}
            </h3>
            <BrandButton class="w-full md:w-fit" text="Conocer Servicio" bg-color="bg-stone-200" />
        </div>
    </article>
</template>