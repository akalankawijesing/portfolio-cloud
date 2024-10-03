import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
import "npm:react-router-dom@^6.4";
export default defineConfig({
  plugins: [react()],
})
