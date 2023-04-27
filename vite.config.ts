// @ts-ignore
import { defineConfig } from 'vite'
// @ts-ignore
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import { md } from "./plugins/md";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), md()],
})