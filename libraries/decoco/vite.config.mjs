import { defineConfig } from "vite";
import decoInjectComponent from "@decoco/rollup-plugin-auto-inject-component";

const config = defineConfig({
  base: "./",
  plugins: [decoInjectComponent(["src/**/*.(tsx|jsx)"])],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "decoco",
      fileName: "index",
      formats: ["es"],
    },
  },
});

export default config;
