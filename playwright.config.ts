import type { PlaywrightTestConfig } from '@playwright/test';

const baseURL = 'http://127.0.0.1:3000';

const config: PlaywrightTestConfig = {
	testDir: './e2e',
	reporter: process.env.CI ? 'github' : 'list',
	webServer: {
		command: 'pnpm start',
		url: baseURL,
		timeout: 120 * 1000,
		reuseExistingServer: !process.env.CI,
	},
	use: {
		baseURL,
	},
};

export default config;
