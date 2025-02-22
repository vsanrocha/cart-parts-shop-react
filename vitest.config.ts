/// <reference types="vitest" />
import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'happy-dom',
      setupFiles: [
        './src/test/setup.ts',
        './src/test/mocks/server.ts'
      ],
    },
  })
);
