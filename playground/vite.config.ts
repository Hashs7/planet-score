import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // @ts-ignore
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/theme.scss";`
      }
    }
  }
});
