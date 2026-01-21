import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import jsconfigPaths from "vite-jsconfig-paths"
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), jsconfigPaths(), tailwindcss()],
    server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
})

