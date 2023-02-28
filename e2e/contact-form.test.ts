import { test, expect } from '@playwright/test';

test.describe.parallel('Contact Form', (): void => {
	test('should send a message correctly', async ({ page }): Promise<void> => {
		await page.goto('/contact');

		await page.getByLabel('name').fill('Example Name');
		await page.getByLabel('email').fill('example@email.com');
		await page.getByLabel('message').fill('Hello Word!');

		const send = page.getByRole('button', { name: 'send' });
		await expect(send).toBeEnabled();
		await send.click();

		const title = page.getByTestId('dialog-title');
		await title.waitFor({ state: 'visible' });
		await expect(title).toHaveText('Message sent');

		const link = page.getByRole('link', { name: 'Go back home' });
		await expect(link).toBeVisible();
		await link.click();

		await expect(page).toHaveURL('/');
	});
});
