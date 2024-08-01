import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  root: "src", // needed to be set here because index.html is not at the root dir, but in "src" dir
  build: {
    outDir: "../dist", // if not, will try to output to the folderd: "<current dir>/dist"
  },
});
