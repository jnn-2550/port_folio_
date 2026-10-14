import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// For GitHub Pages under a repo subpath, add: base: "/your-repo-name/"
export default defineConfig({ plugins: [react()],base: '/port_folio_/', });
