<template>
     <button
  class="relative font-medium text-stone-800 bg-stone-800 text-lg font-body leading-none p-[1px] rounded-full outline-2 outline-transparent outline-offset-[5px] transform -translate-x-1 -translate-y-1 transition-transform ease-in-out text-center shadow-[0.5px_0.5px_0_0_#292524,1px_1px_0_0_#292524,1.5px_1.5px_0_0_#292524,2px_2px_0_0_#292524,2.5px_2.5px_0_0_#292524,3px_3px_0_0_#292524,0_0_0_2px_#fafaf9,0.5px_0.5px_0_2px_#fafaf9,1px_1px_0_2px_#fafaf9,1.5px_1.5px_0_2px_#fafaf9,2px_2px_0_2px_#fafaf9,2.5px_2.5px_0_2px_#fafaf9,3px_3px_0_2px_#fafaf9,3.5px_3.5px_0_2px_#fafaf9,4px_4px_0_2px_#fafaf9] duration-200 hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 hover:shadow-[0_0_0_2px_#fafaf9] focus-visible:outline-dashed focus-visible:outline-yellow-400"
>
  <div
    :class="btnClassWithBg"
  >
    <span
      class="relative flex text-lg font-body items-center justify-center py-2 px-5 gap-1 drop-shadow-[0_-1px_0_rgba(255,255,255,0.25)] active:translate-y-[2px]"
    >
      {{props.text}}
    </span>
  </div>
</button>
</template>
<script setup>
const props = defineProps({
  href: {
    type: String,
    default: '',
    required: false,
  },
  text: {
    type: String,
    default: 'Conocer mas',
  },
  bgColor: {
    type: String,
    default: 'bg-ambar-300',
  },
});

const btnClassWithBg = `${props.bgColor} relative pointer-events-none border border-white/30 rounded-full before:content-[''] before:absolute before:inset-0 before:rounded-full before:opacity-25 before:bg-[radial-gradient(rgb(255_255_255/_80%)_20%,transparent_20%),radial-gradient(rgb(255_255_255/_100%)_20%,transparent_20%)] before:bg-[length:8px_8px] before:[background-position:0_0,4px_4px] before:mix-blend-hard-light before:animate-[dots_0.5s_linear_infinite]`
</script>