import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        charset: false,
        additionalData: `@use "sass:math";`
      },
    },
  },
});