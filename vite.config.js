import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio1/', // 👈 ajoute ceci
  plugins: [react()],
  assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.JPG', '**/*.JPEG']
})
