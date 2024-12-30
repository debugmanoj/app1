import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
// Load the dependencies from package.json
import pkg from "./package.json";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app1",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App", // Expose the App component
      },
    }),
  ],
  server: {
    port: 5173, // Ensure the port matches the `remotes` in the container
  },
  build: {
    target: "esnext",
    outDir: "dist", // Ensure this matches where Vercel serves files
  },
});
