import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import macrosPlugin from 'vite-plugin-babel-macros';

/** @type {import('vite').UserConfig} */
export default defineConfig({
  server: {
    port: 3000,
    cors: true,
  },
  resolve: {
    alias: {
      '@': resolve('./src'),
    },
  },
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              displayName: true,
              fileName: false,
              pure: true,
            },
          ],
        ],
      },
    }),
    macrosPlugin(),
  ],
});
