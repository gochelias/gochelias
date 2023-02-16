import { test } from 'vitest';
import { render, screen } from '@testing-library/react';

import ContactPage from './page';

test('should render the form', (): void => {
	render(<ContactPage />);

	const name = screen.getByRole('textbox', { name: 'Name' });
	expect(name).toBeInTheDocument();

	const email = screen.getByRole('textbox', { name: 'Email' });
	expect(email).toBeInTheDocument();

	const message = screen.getByRole('textbox', { name: 'Message' });
	expect(message).toBeInTheDocument();

	const send = screen.getByRole('button', { name: 'Send' });
	expect(send).toBeInTheDocument();
});
