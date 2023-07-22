import { NextApiRequest, NextApiResponse } from 'next';
import * as Sentry from '@sentry/nextjs';
import { MessageBuilder, Webhook } from 'discord-webhook-node';

import { ContactForm, ContactFormSchema } from '@/types';

export default async (
	req: NextApiRequest,
	res: NextApiResponse,
): Promise<void> => {
	if (req.method !== 'POST') {
		res.status(405).json({
			status: '405 Method Not Allowed',
		});
		return;
	}

	const { name, email, message }: ContactForm = req.body;

	const result = ContactFormSchema.safeParse({
		name,
		email,
		message,
	});

	if (!result.success) {
		res.status(422).json(result.error);
		return;
	}

	if (!process.env.DISCORD_WEBHOOK) {
		res.status(500).json({
			status: '500 Internal Server Error',
		});

		throw new Error('No Webhook Found');
	}

	const hook = new Webhook(process.env.DISCORD_WEBHOOK);
	hook.setUsername('Messenger');
	hook.setAvatar(
		'https://cdn.discordapp.com/attachments/893625212871008326/1080950125079298048/messenger.png',
	);

	const embed = new MessageBuilder()
		.setAuthor(result.data.email)
		.setTitle(result.data.name)
		.setDescription(result.data.message)
		.setColor(0)
		.setTimestamp();

	try {
		await hook.send(embed);
		res.status(200).json({
			status: '200 Message Sent',
		});
	} catch (err) {
		res.status(500).json({
			status: '500 Internal Server Error',
		});

		Sentry.captureException(err);
	}
};
