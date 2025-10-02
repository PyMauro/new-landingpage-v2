<script setup>
import StructureBasicBlock from "../../vue/_structure/basicBlock.vue";
import BrandButton from "../Brand/Button.vue";
</script>

<template>
    <StructureBasicBlock extra-borders="bottom-border"  padding="padding">
        <nav class="flex justify-between items-center w-full h-fit">
            <span class="flex gap-1 justify-center items-center"><p class="text-white">Menu</p></span>
            <img src="logo/hermes-logo.svg" alt="Estudio Hermes Logo" class="w-24 h-full"/>
            <BrandButton text="Agendar Cita" bgColor="bg-amber-300 text-stone-800"/>
        </nav>
    </StructureBasicBlock>
</template>