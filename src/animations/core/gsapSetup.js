// animations/core/gsapSetup.js
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import ScrollToPlugin from "gsap/ScrollToPlugin"
import SplitText from "gsap/SplitText"
import SplitType from "split-type"

// Registro seguro de plugins (solo en cliente)
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText)
}

export { gsap, ScrollTrigger, ScrollToPlugin, SplitText,SplitType }
export default gsap
