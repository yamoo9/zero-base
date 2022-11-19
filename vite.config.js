import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import macrosPlugin from 'vite-plugin-babel-macros';

export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': resolve('src'),
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
