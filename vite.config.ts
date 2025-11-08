import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    root: "frontend",
    plugins: [
    react(),
    tsconfigPaths({ projects: ["frontend/tsconfig.json"] })
    ],
    server: { port: 5173, open: true }
});
