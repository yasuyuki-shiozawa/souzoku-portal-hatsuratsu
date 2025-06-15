import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/souzoku-portal-hatsuratsu/', // GitHub Pagesのサブディレクトリに対応するため、baseをリポジトリ名に設定
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: '0.0.0.0',
    allowedHosts: [
      'localhost',
      '5174-irefpv9lotmvxyu9psgh0-b44b4fbd.manusvm.computer',
      '.manusvm.computer'
    ]
  }
})


