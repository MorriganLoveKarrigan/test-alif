import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dotenv from 'dotenv-flow';

const env = dotenv.config().parsed;
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env': Object.keys(env).reduce((acc, key) => {
      acc[key] = JSON.stringify(env[key]);
      return acc;
    }, {}),
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
