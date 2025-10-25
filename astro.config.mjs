// @ts-check
import { defineConfig } from 'astro/config';
import { fontProviders } from "astro/config";
import { fileURLToPath } from 'node:url'


import tailwindcss from '@tailwindcss/vite';

import vue from '@astrojs/vue';

import icon from "astro-icon";

import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['.trycloudflare.com']
    },
    resolve: {
      alias: {
        '@assets' : fileURLToPath(new URL('./src/assets', import.meta.url)),
        '@components' : fileURLToPath(new URL('./src/components', import.meta.url)),
      }
    }
  },

  integrations: [vue(), icon(), sanity()],
  experimental: {
        fonts: [{
            provider: fontProviders.google(),
            name: "DM Mono",
            cssVariable: "--font-body"
        },
      ],
    
    },
    

});