import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),        // 🧠 Habilita React/JSX
    tailwindcss(),  // 🎨 Activa Tailwind v4 con integración nativa
  ],
})