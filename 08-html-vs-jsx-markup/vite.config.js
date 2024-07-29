import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const viteConfig = defineConfig({
  base: '/',
  server: {
    host: 'localhost',
    port: 3000,
    open: false,
  },
  plugins: [react()],
});

export default viteConfig;
