import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // React-related libraries in one chunk
          react: ['react', 'react-dom', 'react-router-dom', 'react-icons'],
          // Axios and Swiper in another chunk
          utilities: ['axios', 'swiper'],
          // Chunk for Leaflet-related libraries
          leaflet: ['react-leaflet'],
          // Chunk for other smaller or custom libraries
          custom: ['@custom-react-hooks/use-media-query', 'infinite-react-carousel', 'sass'],
        },
      },
    },
  },
});
