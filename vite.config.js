import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react()],
   server: {
      host: true,
   },
   resolve: {
      alias: {
         src: '/src',
         pages: '/src/pages',
         templates: '/src/templates',
         components: '/src/components',
      },
   },
});
