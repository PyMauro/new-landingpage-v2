// @ts-check
import { defineConfig } from 'astro/config';
import { fontProviders } from "astro/config";

import tailwindcss from '@tailwindcss/vite';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [vue()],
  experimental: {
        fonts: [{
            provider: fontProviders.google(),
            name: "DM Mono",
            cssVariable: "--font-body"
        },
        // {
        //   name: 'Mango Grotesque',
        //   cssVariable: '--font-heading',
        //   provider:"local",
        //   variants:[{
        //     src: [
        //       "./src/assets/font/Mango Grotesque.ttf"
        //     ]
        //   }]
        // }
      ]
    }

});