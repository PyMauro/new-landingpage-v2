<template>
    <span class="inline-flex items-center rounded-3xl border-amber-600 px-4 py-3  text-neutral-500 inset-ring inset-ring-amber-300/40">
        <p class="caption">
            <slot></slot>
        </p>
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