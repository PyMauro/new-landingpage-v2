<script setup>
const shadow = "relative border border-white/30 rounded-3xl  shadow-[2px_2px_4px_0px_rgba(0,0,0,1.00)] shadow-[6px_6px_0px_0px_rgba(0,0,0,1.00)] outline-2 outline-offset-[-2px] outline-neutral-900"
const props = defineProps({
  inputType: {
    type: String,
    default: 'text',
    required: true
  },
  inputId: {
    type: String,
    default: 'nameInput',
    required: true
  },
    placeholderText: {
        type: String,
        default: 'Nombre y Apellido',
        required: true
    },
    placeholderTitle: {
        type: String,
        default: 'Nombre y Apellido',
        required: true
    },  
});

const spanId = props.inputId + "Span"
</script>
<template>
    <span :id=spanId class="w-full h-fit px-2 py-2 flex flex-col gap-1 overflow-clip" >
        <label :for='props.inputId' class="pl-4 text-lg font-body">{{ props.placeholderTitle }}</label>
        <input type="tel" :id="props.inputId" :placeholder="props.placeholderText"
          class="w-full h-full pl-5 px-2 py-4 placeholder:pl-2 bg-violet-200" :class="shadow" />
      </span>
</template>