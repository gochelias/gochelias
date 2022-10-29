import { NextApiRequest, NextApiResponse } from 'next';
import { MessageBuilder, Webhook } from 'discord-webhook-node';

const ContactHandler = async (
	req: NextApiRequest,
	res: NextApiResponse,
): Promise<void> => {
	const { name, email, message } = req.body;

	const hook = new Webhook(String(process.env.DISCORD_WEBHOOK));
	hook.setUsername('Messanger');

	const embed = new MessageBuilder()
		.setAuthor(email)
		.setTitle(name)
		.setDescription(message)
		.setColor(0);

	try {
		await hook.send(embed);
		res.status(200).json({ status: 'Ok' });
	} catch (err: any) {
		// console.log(err.message);
		res.status(500).json({ status: 'Internal Server Error' });
	}
};

export default ContactHandler;
