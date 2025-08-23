import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// Minimal, production-safe Vite config (no external "lovable-tagger" plugin)
export default defineConfig({
  plugins: [react()],
});
