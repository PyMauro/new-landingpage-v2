<template>
    <div class="w-full h-fit border-l border-r border-l-stone-700 border-r-stone-700" :class="{
  'border-l border-r border-l-stone-700 border-r-stone-700': true, // siempre
  'border border-t-stone-700 border-b-stone-700': props.extraBorders === 'full-borders',
  'border-t border-t-stone-700': props.extraBorders === 'top-border',
  'border-b border-b-stone-700': props.extraBorders === 'bottom-border',
}">
        <slot name="no-padding">
            <div class="w-full h-fit"></div>
        </slot>
        <div class="w-full h-fit" :class="{
            'p-4': props.padding === 'padding',}">
            <slot ></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    extraBorders: {
        type: String,
        default: 'no-extra-borders',
        validator: (value: string) => {
            return ['no-extra-borders', 'full-borders','top-border','bottom-border'].includes(value);
        },
    },
       padding: {
            type: String,
            default: 'no-padding',
            validator: (value: string) => {
                return ['no-padding', 'padding'].includes(value);
            },
    }
});
</script>