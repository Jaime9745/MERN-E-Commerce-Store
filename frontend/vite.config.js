import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "https://mern-e-commerce-store-back.onrender.com",
      "/uploads/": "https://mern-e-commerce-store-back.onrender.com",
    },
  },
});
