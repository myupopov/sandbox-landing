// @ts-check
import { defineConfig } from 'astro/config';
import localhostCerts from 'vite-plugin-localhost-certs';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  outDir: './build',
  build: {
    format: 'file',
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "src/styles/_variables.scss";`,
        },
      },
    },
    plugins: [localhostCerts()],
  },
});
