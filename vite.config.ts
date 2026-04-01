import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const figmaAssetPlugin = {
  name: 'figma-asset',
  resolveId(id: string) {
    if (id.startsWith('figma:asset/')) return id
  },
  load(id: string) {
    if (id.startsWith('figma:asset/')) return 'export default ""'
  },
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    figmaAssetPlugin,
  ],
})
