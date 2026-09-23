import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import { fileURLToPath } from "url";

export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: "./tsconfig.lib.json",
      include: ["src"],
      outDirs: ["dist"],
    }),
  ],

  build: {
    copyPublicDir: false,

    lib: {
      entry: resolve(
        fileURLToPath(new URL("./src/index.ts", import.meta.url))
      ),
      formats: ["es"],
      fileName: "index",
      cssFileName: "index",
    },

    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
    },
  },
});