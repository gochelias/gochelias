'use client';

import { type ChangeEvent, type FormEvent, useState } from 'react';
import type { ContactForm } from '@/types';

const send = async (contactData: ContactForm): Promise<boolean> => {
	const { name, email, message } = contactData;

	const response = await fetch('/api/contact', {
		method: 'POST',
		body: JSON.stringify({ name, email, message }),
		headers: {
			'Content-Type': 'application/json',
		},
	}).catch(error => {
		throw new Error(error);
	});

	if (!response) return false;
	if (!response.ok) return false;

	return true;
};

export function useContactForm() {
	const [contactData, setContactData] = useState<ContactForm>({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	): void => {
		const { name, value } = event.target;
		setContactData({ ...contactData, [name]: value });
	};

	const handleSubmit = async (
		event: FormEvent<HTMLFormElement>,
	): Promise<void> => {
		event.preventDefault();

		if (!contactData.name || !contactData.email || !contactData.message) {
			return;
		}
		const sent = await send(contactData);
		if (!sent) return;

		setContactData({ name: '', email: '', message: '' });
	};

	return {
		contactData,
		handleChange,
		handleSubmit,
	};
}
