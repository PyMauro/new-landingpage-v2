import { initHeroAnimation } from "./sections/heroAnimation.js";
import { initTextAnimations } from "./effects/textAnimations.js";
import { initImageAnimations } from "./effects/imageAnimations.js";
import { initPriceAnimation } from "./effects/priceAnimations.js";

export function initAllAnimations() {
  initHeroAnimation();
  initTextAnimations();
  initImageAnimations();
  initPriceAnimation();
}