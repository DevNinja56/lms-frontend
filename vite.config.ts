import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@pages": "/src/pages",
      "@components": "/src/components",
      "@utils": "/src/utils",
      "@route": "/src/Routes",
      "@slices": "/src/redux/slices",
      "@hooks": "/src/hooks",
      "@constant": "/src/constant",
      "@actions": "/src/redux/actions",
      "@context": "/src/context",
    },
  },
});
