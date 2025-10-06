<template>
  <form
    class="z-10 w-full add-texture overflow-hidden h-fit bg-gradient-to-br from-violet-400 to-violet-500 max-w-[457px] px-4 py-8 rounded-2xl outline-2 outline-offset-[-2px] outline-neutral-900 inline-flex flex-col justify-start items-start gap-4"
    :class="shadow">
    <div class="h-full z-10 w-full flex flex-col justify-start items-start gap-0 ">
      <span id="nameInputSpan" class="w-full h-fit px-2 py-2 flex flex-col gap-1 overflow-clip ">
        <label for="nameInput" class="pl-4 text-lg font-body">Nombre:</label>
        <input type="text" id="nameInput" placeholder="Nombre y Apellido"
          class="w-full pl-5 h-full px-2 py-4 placeholder:pl-2 bg-violet-200" :class="shadow" />
      </span>
      <span id="busisnessInputSpan" class="w-full h-fit px-2 py-2 flex flex-col gap-1 overflow-clip ">
        <label for="busisnessInput" class="pl-4 text-lg font-body" :class="usePersonalName? 'text-neutral-500' : ''" >Nombre de negocio/emprendimiento:</label>
        <input type="text" id="busisnessInput" placeholder="Nombre de negocio" :disabled="usePersonalName"
          class="w-full h-full pl-5 px-2 py-4 placeholder:pl-2 bg-violet-200 disabled:bg-neutral-400 disabled:opacity-50 " :class="shadow" />
      </span>
      <div class="w-full h-fit py-2 flex flex-col gap-2">
        <!-- Checkbox -->
        <span class="w-full h-fit py-2 pl-6 flex gap-4">
          <label class="container">
            <input  v-model="usePersonalName" type="checkbox">
            <div class="checkmark"></div>
          </label>
          <p class="text-neutral-200 text-lg font-body w-full">Uso mi nombre como marca personal</p>
        </span>

        <!-- divider -->
        <p class="text-neutral-300 font-body w-full pl-8 text-base">Al tocar el switch podes rellenar solo la
          informacion que elegis como medio de contacto. Si queres contactar solo por email, toca el switcher debajo.
          Sino por defecto se usara whatsapp.
        </p>
        <span class="flex flex-row justify-between items-center gap-4 w-full">
          <p class="text-neutral-100 text-lg font-body flex-1 pl-8">Por Whatsapp</p>
          <!-- Contact method switcher -->
          <label class="custom-switch flex-shrink-0">
            <input type="checkbox" class="custom-switch-input" @click="preferEmail = !preferEmail"
              :checked="preferEmail">
            <span class="custom-switch-slider"></span>
          </label>

          <p class="text-neutral-100 text-lg font-body flex-1 pl-8">Por Email</p>
        </span>
      </div>
      <span id="PhoneInputSpan" class="w-full h-fit px-2 py-2 flex flex-col gap-1 overflow-clip " v-if="!preferEmail">
        <label for="phoneInput" class="pl-4 text-lg font-body">Telefono:</label>
        <input type="tel" id="phoneInput" placeholder="Numero de Telefono"
          class="w-full h-full pl-5 px-2 py-4 placeholder:pl-2 bg-violet-200" :class="shadow" />
      </span>

            <span id="emailInputSpan" class="w-full h-fit px-2 py-2 flex flex-col gap-1 overflow-clip " v-if="preferEmail">
        <label for="emailInput" class="pl-4 text-lg font-body">Correo electronico:</label>
        <input type="email" id="emailInput" placeholder="correo electronico"
          class="w-full h-full pl-5 px-2 py-4 placeholder:pl-2 bg-violet-200" :class="shadow" />
      </span>
      <span class="w-full h-fit py-4 px-2">
        <BrandBtn text="Reservar Cita Ahora" bg-color="bg-amber-300" class="w-full ml-2" />
      </span>
    </div>


  </form>

</template>
<script setup>
import BrandBtn from '../Brand/Button.vue'
import { ref } from 'vue'
const shadow = "relative border border-white/30 rounded-3xl  shadow-[2px_2px_4px_0px_rgba(0,0,0,1.00)] shadow-[6px_6px_0px_0px_rgba(0,0,0,1.00)] outline-2 outline-offset-[-2px] outline-neutral-900"

const preferEmail = ref(false)
const usePersonalName = ref(false)
</script>
<style>
.container {
  --input-focus: var(--color-amber-400);
  --input-out-of-focus: var(--color-violet-200);
  --bg-color: var(--color-neutral-200);
  --bg-color-alt: var(--color-neutral-900);
  --main-color: var(--color-neutral-900);
  width: 10%;
  position: relative;
  cursor: pointer;
}

.container input {
  position: absolute;
  opacity: 0;
}

.checkmark {
  width: 30px;
  height: 30px;
  position: relative;
  top: 0;
  left: 0;
  border: 2px solid var(--main-color);
  border-radius: 5px;
  box-shadow: 4px 4px var(--main-color);
  background-color: var(--input-out-of-focus);
  transition: all 0.3s;
}

.container input:checked~.checkmark {
  background-color: var(--input-focus);
}

.checkmark:after {
  content: "";
  width: 8px;
  height: 15px;
  position: absolute;
  top: 4px;
  left: 8px;
  display: none;
  border: solid var(--color-white);
  border-width: 0 2.5px 2.5px 0;
  transform: rotate(45deg);
}

.container input:checked~.checkmark:after {
  display: block;
}



/* SWITCHER */
/* CUSTOM SWITCHER */
.custom-switch {
  /* Variables */
  --switch_width: 2em;
  --switch_height: 1em;
  --thumb_color: lightgreen;
  --track_color: #e8e8e8;
  --track_active_color: #888;
  --outline_color: #000;
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: var(--switch_width);
  height: var(--switch_height);
}

/* Hide default HTML checkbox */
.custom-switch-input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.custom-switch-slider {
  box-sizing: border-box;
  border: 2px solid var(--outline_color);
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: .15s;
  border-radius: var(--switch_height);
}

.custom-switch-slider::before {
  box-sizing: border-box;
  position: absolute;
  content: "";
  height: var(--switch_height);
  width: var(--switch_height);
  border: 2px solid var(--outline_color);
  border-radius: 100%;
  left: -2px;
  bottom: -2px;
  background-color: var(--thumb_color);
  transform: translateY(-0.2em);
  box-shadow: 0.1em 0.2em 0 var(--outline_color);
  will-change: box-shadow, transform;
  transition: .15s;
}

.custom-switch-input:checked+.custom-switch-slider {
  background-color: var(--track_active_color);
}

.custom-switch-input:focus-visible+.custom-switch-slider {
  box-shadow: 0 0 0 2px var(--track_active_color);
}

/* Raise thumb when hovered */
.custom-switch-input:hover+.custom-switch-slider::before {
  transform: translateY(-0.3em);
  box-shadow: 0 0.3em 0 var(--outline_color);
}

.custom-switch-input:checked+.custom-switch-slider::before {
  transform: translateX(calc(var(--switch_width) - var(--switch_height))) translateY(-0.2em);
  background-color: yellow;
}

/* Raise thumb when hovered & checked */
.custom-switch-input:hover:checked+.custom-switch-slider::before {
  transform: translateX(calc(var(--switch_width) - var(--switch_height))) translateY(-0.3em);
  box-shadow: 0 0.3em 0 var(--outline_color);
}
</style>