import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Atlas-Insight-Initiative/',
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),

    // @quasar/plugin-vite options list:
    // https://github.com/quasarframework/quasar/blob/dev/vite-plugin/index.d.ts
    quasar({
      autoImportComponentCase: 'pascal',
      sassVariables: '/src/css/quasar-variables.scss',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
