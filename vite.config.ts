import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    target: "esnext",
    outDir: "overwolf/dist",
    rollupOptions: {
      input: {
        controller: "controller.html",
        index: "index.html",
      },
    },
  },
  server: {
    port: 3030,
  },
});
