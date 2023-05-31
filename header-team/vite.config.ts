import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "headerTeam",
      filename: "headerTeam.js",
      remotes: {
        fetchingApp: "http://127.0.0.1:8822/assets/dataFetching.js",
      },
      exposes: {
        "./App": "./src/App",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
