import { z } from 'zod';

export const ContactFormSchema = z.object({
	name: z.string().min(5).max(75),
	email: z.string().email().min(5).max(75),
	message: z.string().min(5).max(280),
});

export type ContactForm = z.infer<typeof ContactFormSchema>;
