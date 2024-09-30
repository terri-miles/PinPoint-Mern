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
          // This example splits React and React DOM into a separate chunk
          react: ['react', 'react-dom'],
          // You can add more chunks for other large dependencies
          vendor: ['axios', 'lodash'], // Example for other dependencies
        },
      },
    },
  },
});



