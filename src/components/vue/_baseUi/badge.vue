<template>
    <span class="inline-flex items-center rounded-3xl  px-4 py-1 text-xs font-medium  text-neutral-700 inset-ring inset-black">
        <slot></slot>
    </span>
</template>
<script setup>
const props = defineProps({
    bgColor: {
        type: String,
        required: false,
        default: "bg-neutral-700"
    }
});
</script>