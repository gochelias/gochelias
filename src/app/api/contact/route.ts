import * as Sentry from '@sentry/nextjs';
import { NextResponse } from 'next/server';
import { MessageBuilder, Webhook } from 'discord-webhook-node';

import { contactFormSchema, type ContactForm } from '@/types';

export const POST = async (request: Request) => {
	const { DISCORD_WEBHOOK } = process.env;

	if (!DISCORD_WEBHOOK) {
		NextResponse.json({ info: 'Internal Server Error' }, { status: 500 });

		throw new Error('No Webhook Found');
	}

	const { name, email, message }: ContactForm = await request.json();

	const result = contactFormSchema.safeParse({
		name,
		email,
		message,
	});

	if (!result.success) {
		return NextResponse.json({ info: result.error }, { status: 400 });
	}

	const hook = new Webhook(DISCORD_WEBHOOK);
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
		return NextResponse.json({ info: 'Message sent' }, { status: 200 });
	} catch (error) {
		Sentry.captureException(error);

		return NextResponse.json(
			{ info: 'Internal Server Error' },
			{ status: 500 },
		);
	}
};
