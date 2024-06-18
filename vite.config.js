import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/procon-team4/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        a: resolve(__dirname, 'mwyk/index.html'),
      },
    },
  },
});
