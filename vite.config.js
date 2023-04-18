import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "src", // needed to be set here because index.html is not at the root dir, but in "src" dir
});
