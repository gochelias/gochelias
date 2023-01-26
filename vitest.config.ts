/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	root: './',
	plugins: [react(), tsconfigPaths()],
	test: {
		dir: 'src',
		globals: true,
		watch: false,
		environment: 'jsdom',
		setupFiles: ['vitest.setup.ts'],
		reporters: process.env.CI ? 'basic' : 'verbose',
	},
});
