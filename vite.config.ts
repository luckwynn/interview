import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // root: resolve(__dirname, ''),
  server: {
    host: '127.0.0.1',
    port: 8888,
    strictPort: true,
    open: true,
    hmr: true,
    proxy: {
      '/web': {
        target: 'http://39.99.234.158:10088',
        ws: true,
        changeOrigin: true,
      },
    },
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  // publicDir: false,
  build: {
    outDir: './dist'
  }
});
