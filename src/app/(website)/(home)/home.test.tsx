import { afterEach, expect, test } from 'vitest';
import { cleanup, render, screen, within } from '@testing-library/react';

import HomePage from './page';

afterEach(cleanup);

test('should render header section', (): void => {
	render(<HomePage />);

	const header = within(screen.getByRole('banner'));

	// link to contact page
	const link: HTMLLinkElement = header.getByRole('link', {
		name: 'Contact',
	});
	expect(link.href).toContain('/contact');

	// name
	const name = header.getByRole('heading', {
		level: 1,
		name: 'Elias Goche',
	});
	expect(name).toBeInTheDocument();

	// heading
	const heading = header.getByRole('heading', {
		level: 2,
		name: 'Making the code an experience',
	});
	expect(heading).toBeInTheDocument();
});

test('should render the about section', (): void => {
	render(<HomePage />);

	const about = within(screen.getByTestId('about-section'));

	// image
	expect(about.getByRole('img')).toBeInTheDocument();

	// link to read more
	/* const link: HTMLLinkElement = about.getByRole('link', {
		name: 'Read More',
	});
	expect(link.href).toContain('/about'); */

	// description
	const description: HTMLParagraphElement = about.getByRole('paragraph');
	expect(description.textContent).not.toContain('Lorem ipsum');
});

test('should render the project section', (): void => {
	render(<HomePage />);

	const projects = within(screen.getByTestId('projects-section'));

	// heading
	const title = projects.getByRole('heading', {
		level: 2,
		name: 'Passion for Creating',
	});
	expect(title).toBeInTheDocument();

	// project image
	const img = projects.getAllByRole('img');
	expect(img).toHaveLength(2);

	// project repository
	const sourceCode: HTMLLinkElement[] = projects.getAllByRole('link', {
		name: 'Source Code',
	});
	expect(sourceCode).toHaveLength(2);

	sourceCode.forEach((link: HTMLLinkElement): void => {
		expect(link.href).toContain('github.com/');
	});

	// project description
	const projectDescription: HTMLParagraphElement[] =
		projects.getAllByRole('paragraph');
	expect(projectDescription).toHaveLength(2);

	projectDescription.forEach((p: HTMLParagraphElement): void => {
		expect(p.textContent).not.toContain('Lorem ipsum');
	});
});

test('should render the footer', (): void => {
	render(<HomePage />);

	const footer = within(screen.getByRole('contentinfo'));

	// heading
	const title = footer.getByRole('heading', {
		level: 2,
		name: 'I like to work on cool stuff,',
	});
	expect(title).toBeInTheDocument();

	// get in touch
	const link: HTMLLinkElement = footer.getByRole('link', {
		name: 'Let\u2019s work together Get in Touch',
	});
	expect(link.href).toContain('/contact');

	// email
	const email: HTMLLinkElement = footer.getByRole('link', {
		name: 'elias@gochelias.com',
	});
	expect(email.href).toContain('/contact');

	// social links
	const socialLinks = [
		'GitHub',
		'Codepen',
		'Dribbble',
		'LinkedIn',
		'Discord',
	];

	socialLinks.forEach((name: string): void => {
		const socialLink: HTMLLinkElement = footer.getByRole('link', {
			name,
		});

		expect(socialLink.href).toContain(name.toLowerCase());
	});
});
