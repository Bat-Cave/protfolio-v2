import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  build: {},
  plugins: [
    svgr(),
    react(),
    viteCompression({ filter: /\.(jsx|mjs|json|css|html)$/i }),
  ],
});
