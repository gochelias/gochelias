import { test, expect } from '@playwright/test';

test.describe('Contact Form', (): void => {
	test('should send a message correctly', async ({ page }): Promise<void> => {
		await page.goto('/contact');

		await page.getByLabel('name').fill('Example Name');
		await page.getByLabel('email').fill('example@email.com');
		await page.getByLabel('message').fill('Hello Word!');
		await page.getByRole('button', { name: 'send' }).click();

		await expect(page).toHaveURL('/');
	});
});
