import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
      features: '/src/features',
      layouts: '/src/layouts',
      routes: '/src/routes',
      hooks: '/src/hooks',
      config: '/src/config',
      utils: '/src/utils',
    },
  },
})
