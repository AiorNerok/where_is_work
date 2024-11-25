import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      shared: path.resolve(__dirname, "./src/components/shared"),
      entities: path.resolve(__dirname, "./src/components/entities"),
      features: path.resolve(__dirname, "./src/components/features"),
      pages: path.resolve(__dirname, "./src/components/pages"),
    },
  },
});
