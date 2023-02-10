import dotenv from 'dotenv';
import type { PlaywrightTestConfig } from '@playwright/test';

dotenv.config({ path: '.env.test.local' });

const PORT = process.env.PORT || 3000;
const baseURL = `http://localhost:${PORT}`;

const config: PlaywrightTestConfig = {
	testDir: './e2e',
	reporter: process.env.CI ? 'github' : 'list',
	webServer: {
		command: 'pnpm run dev',
		url: baseURL,
		timeout: 120 * 1000,
		reuseExistingServer: !process.env.CI,
	},
	use: {
		baseURL,
	},
};

export default config;
