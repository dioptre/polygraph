import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/polygraph/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
});
