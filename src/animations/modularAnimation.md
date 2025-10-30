# 🌀 Sistema de Animaciones — Estructura Modular con GSAP

Este documento explica **cómo funciona y cómo usar** el sistema de animaciones modular que implementaste, basado en **GSAP**, **SplitType** y **ScrollTrigger**, estructurado en capas (`core`, `effects`, `sections`, `initAnimations`).  
Está optimizado para reutilizar animaciones entre múltiples páginas sin duplicar código ni romper el bundle.

---

## 📁 Estructura General

```
/src/animations/
│
├── core/
│ ├── gsapSetup.js // Importa y registra GSAP + plugins
│ └── createScrollTrigger.js // Helper para ScrollTrigger reutilizable
│
├── effects/
│ ├── textAnimations.js // initTextAnimations()
│ ├── imageAnimations.js // initImageAnimations()
│ └── priceAnimations.js // initPriceAnimation()
│
├── sections/
│ └── heroAnimations.js // initHeroAnimation()
│
└── initAnimations.js // initAllAnimations() → orquestador
```


---

## 🧩 Descripción de cada archivo

### `core/gsapSetup.js`
**Responsabilidad:**  
Importa GSAP, `ScrollTrigger`, `SplitText` y `SplitType`, registra los plugins y exporta las instancias para todo el sistema.

**Clave:**  
Solo se registra una vez. Evita repetir `gsap.registerPlugin()` en otros archivos.

---

### `core/createScrollTrigger.js`

**Responsabilidad:**  
Centraliza la creación de `ScrollTrigger` con la configuración estándar de tu sitio.

```js
createScrollTrigger(triggerElement, timeline, options?)
```

### Qué hace:

Crea un trigger con scrub y onLeaveBack para resetear la animación al volver arriba.

Crea otro trigger que llama a timeline.play() cuando el elemento entra en vista (start: "top 80%").

### Parámetros:

triggerElement → elemento DOM que dispara la animación.

timeline → timeline GSAP asociado.

options (opcional) → para sobrescribir start, scrub, etc.


## `effects/textAnimations.js`

### Responsabilidad:
Aplica animaciones de texto con SplitType.

### Selectores soportados:
| Atributo                 | Descripción                                            |
| ------------------------ | ------------------------------------------------------ |
| `text-split`             | Marca el elemento para dividirlo en `words` y `chars`. |
| `words-slide-up`         | Palabras que aparecen subiendo (stagger suave).        |
| `words-slide-from-right` | Palabras que entran desde la derecha.                  |

### Ejemplo:
```html
<h2 text-split words-slide-up>Tu mensaje con estilo</h2>
```

Cada tipo genera un timeline pausado que se asocia con createScrollTrigger.

## `effects/imageAnimations.js`

### Responsabilidad:
Anima imágenes o bloques según su atributo data-animate.

### Animaciones disponibles:
| Valor         | Efecto                                     |
| ------------- | ------------------------------------------ |
| `from-bottom` | Entra desde abajo (`y:80`, scale 0.95).    |
| `blur-up`     | Desenfoque → limpieza al entrar.           |
| `zoom-rotate` | Zoom con ligera rotación y desplazamiento. |

### Ejemplo:
```html
<img data-animate="blur-up" src="/img.jpg" alt="">
```

## `effects/priceAnimations.js`

### Responsabilidad:
Anima bloques de precios o contenedores de texto dinámico.

### Selectores esperados:

| Selector           | Descripción                                                  |
| ------------------ | ------------------------------------------------------------ |
| `.price-block`     | Contiene `.old-price`, `.new-price` y un `[words-slide-up]`. |
| `.price-container` | Bloque con textos internos animables.                        |

### Ejemplo:
```html
<div class="price-block">
  <span words-slide-up>Todo por...</span>
  <div>
    <p class="old-price">$125.000</p>
    <p class="new-price">$85.000</p>
  </div>
</div>
```

## `sections/heroAnimations.`js

### Responsabilidad:
Anima la sección Hero (#hero-title, #hero-image, etc.).
Se ejecuta de forma independiente o como parte de initAllAnimations().

## `initAnimations.js`

### Responsabilidad:
Punto de entrada principal que importa y ejecuta todas las animaciones disponibles.

### Incluye:

- initHeroAnimation()
- initTextAnimations()
- initImageAnimations()
- initPriceAnimation()

Podés importar solo las funciones que necesites para cada página.

### ⚙️ Uso Básico
### 1️⃣ Inicialización completa

Ideal para páginas con todas las animaciones activas:

```javascript
window.addEventListener("finishedPreloader", async () => {
  const { initAllAnimations } = await import("/src/animations/initAnimations.js");
  initAllAnimations();
});
```

## 2️⃣ Inicialización selectiva

Solo texto e imágenes (landing liviana):
```javascript
const { initTextAnimations, initImageAnimations } = await import("/src/animations/initAnimations.js");
initTextAnimations();
initImageAnimations();
```

## 🎨 Atributos y Clases Soportadas
| Tipo   | Atributo / Clase             | Descripción                            | Ejemplo                                          |
| ------ | ---------------------------- | -------------------------------------- | ------------------------------------------------ |
| Texto  | `text-split`                 | Divide texto en palabras y caracteres. | `<h2 text-split>Hola Mundo</h2>`                 |
| Texto  | `words-slide-up`             | Palabras suben progresivamente.        | `<p words-slide-up>Animación suave</p>`          |
| Texto  | `words-slide-from-right`     | Palabras entran desde la derecha.      | `<h3 words-slide-from-right>Impacto visual</h3>` |
| Imagen | `data-animate="from-bottom"` | Aparece desde abajo.                   | `<img data-animate="from-bottom" />`             |
| Imagen | `data-animate="blur-up"`     | Efecto blur → claro.                   | `<img data-animate="blur-up" />`                 |
| Imagen | `data-animate="zoom-rotate"` | Zoom + rotación.                       | `<figure data-animate="zoom-rotate"></figure>`   |
| Precio | `.price-block`               | Estructura completa de precio.         | `<div class="price-block">...</div>`             |
| Precio | `.price-container`           | Contenedor con varios textos animados. | `<div class="price-container">...</div>`         |

## 🧠 Cómo funciona createScrollTrigger
Cada animación genera un timeline (gsap.timeline({ paused: true })) que no se ejecuta automáticamente.
createScrollTrigger() lo vincula al scroll con dos triggers:

1. Trigger principal:
scrub: 1.2
start: "top bottom"
onLeaveBack → resetea la animación al volver arriba.

2. Trigger de entrada:
start: "top 80%"
onEnter → reproduce el timeline cuando entra en vista.


Esto da un comportamiento fluido, reversible y sin repeticiones innecesarias.

## 🧱 Ejemplos Prácticos

### Hero con texto y animaciones
```html
<section id="heroSection">
  <h1 id="hero-title" text-split>Mi mensaje poderoso</h1>
  <img id="hero-image" data-animate="from-bottom" src="/hero.jpg" />
</section>
```

```javascript
import { initTextAnimations, initImageAnimations } from "/src/animations/initAnimations.js";
initTextAnimations();
initImageAnimations();
```


### Seccion de precios animada
```html
<div class="price-block">
  <p words-slide-up>Oferta limitada</p>
  <p class="old-price">$150.000</p>
  <p class="new-price">$99.000</p>
</div>
```

```javascript
import { initPriceAnimation } from "/src/animations/initAnimations.js";
initPriceAnimation();
```

## Buenas practicas de uso
1. Importá siempre desde initAnimations.js o módulos individuales; nunca registres GSAP manualmente.

2. Ejecución solo en cliente: usá onMounted() (Vue) o finishedPreloader (Astro).

3. Atributos correctos: asegurate de usar los nombres exactos (text-split, words-slide-up, etc.).

4. Carga selectiva: importá solo lo que necesites (performance).

5. Evita duplicar init: no llames initAllAnimations() dos veces en la misma página.

6. Destrucción opcional: si un bloque se desmonta dinámicamente, usá ScrollTrigger.kill() para limpiar.


## 🧩 Troubleshooting
| Problema             | Posible causa              | Solución                                             |
| -------------------- | -------------------------- | ---------------------------------------------------- |
| Animación no ejecuta | Llamada antes del montaje  | Mover dentro de `onMounted()` o `finishedPreloader`. |
| “Target not found”   | Selector incorrecto        | Revisar atributos o ID.                              |
| Doble animación      | Múltiples llamadas `init*` | Llamar solo una vez por sección.                     |
| Error SSR            | GSAP en servidor           | Asegurarse que `init*` solo se ejecute en cliente.   |


## ⚡ Resumen rápido (2 pasos)

1. Añadí los atributos/clases a tus elementos (text-split, data-animate, .price-block, etc.).

2. Importá y ejecutá las funciones de inicialización que necesites:
   
```javascript
import { initTextAnimations, initImageAnimations } from "/src/animations/initAnimations.js";
initTextAnimations();
initImageAnimations();
```
Y listo — animaciones reusables, modulares y sin inflar el bundle.