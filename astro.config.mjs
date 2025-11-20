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
  output: 'static',
  vite: {
    preview: {
            host: true,
            allowedHosts: ['true','.trycloudflare.com']
    },
    server: {
      host: true,
      allowedHosts: ['.trycloudflare.com']
    },
    plugins: /** @type {any} */ (tailwindcss()),
    resolve: {
      alias: {
        '@assets' : fileURLToPath(new URL('./src/assets', import.meta.url)),
        '@components' : fileURLToPath(new URL('./src/components', import.meta.url)),
        '@animations' : fileURLToPath(new URL('./src/animations', import.meta.url)),
        '@utils' : fileURLToPath(new URL('./src/utils', import.meta.url)),
      }
    }
  },

  integrations: [vue(), icon(), sanity({
      projectId: 'zahdcxw4',
      dataset: 'production',
      useCdn: false, //cambiar esto si la build no va a ser estatica.
  }
  )],
  experimental: {
        fonts: [{
            provider: fontProviders.google(),
            name: "DM Mono",
            cssVariable: "--font-body"
        },
      ],
    
    },
    

});