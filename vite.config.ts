import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/threejs-floating-island/" : "/", // Only set base in production
  plugins: [react(), tailwindcss()],
  assetsInclude: ["**/*.glb"],
}));
