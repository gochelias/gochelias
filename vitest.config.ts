/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
	root: './src',
	plugins: [react()],
	test: {
		environment: 'jsdom',
	},
});