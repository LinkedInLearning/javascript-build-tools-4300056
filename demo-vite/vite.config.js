import { defineConfig } from 'vite';

export default defineConfig({
  root: `./src`,
  publicDir: '../public',
  build: { outDir: '../dist' },
  server: {
    host: true,
    port: 5173,
    hmr: { clientPort: 5173 }
  }
});
