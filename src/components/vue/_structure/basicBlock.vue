<template>
  <!-- 
   :class="{
      'border-t border-b border-t-stone-700 border-b-stone-700': props.extraBorders === 'full-borders',
      'border-t border-t-stone-700': props.extraBorders === 'top-border',
      'border-b border-b-stone-700': props.extraBorders === 'bottom-border',
    }" -->

    <!-- border-l border-r border-l-stone-700 border-r-stone-700 -->
  <div
    class="w-full" 
  >
    <slot name="no-padding" />

    <div
      class="w-full "
      :class="{
        'p-4 py-8': props.padding === 'padding',
      }"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
    extraBorders: {
        type: String,
        default: 'no-extra-borders',
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