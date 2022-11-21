import { ChangeEvent, FormEvent, useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Nav } from 'components/Nav';

interface FormData {
	name: string;
	email: string;
	message: string;
}

const ContactPage: NextPage = () => {
	const router = useRouter();

	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = async (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	): Promise<void> => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (
		event: FormEvent<HTMLFormElement>,
	): Promise<void> => {
		event.preventDefault();

		const { name, email, message } = formData;
		if (!name && !email && !message) {
			console.log('Something was wrong!');
			return;
		}

		const data: FormData = { name, email, message };
		const JSONData = JSON.stringify(data);

		try {
			await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSONData,
			});

			router.push('/');
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<Nav pageTitle="Contact" />
			<header className="flex h-screen w-full">
				<div className="relative h-full w-1/2 select-none">
					<div className="absolute z-[1] flex h-full w-full flex-col justify-between p-40">
						<h2 className="flex flex-col space-y-2 text-7xl font-medium">
							<span className="block">
								You have a new project? <br /> or want to say
								hello.
							</span>
						</h2>
						<div className="flex justify-evenly text-lg font-medium">
							<a
								target="_blank"
								href="https://github.com/gochelias"
								title="@gochelias"
								rel="noreferrer"
								className="hover:underline">
								GitHub
							</a>
							<a
								target="_blank"
								href="https://www.linkedin.com/in/gochelias"
								title="@gochelias"
								rel="noreferrer"
								className="hover:underline">
								LinkedIn
							</a>
							<a
								target="_blank"
								href="https://discord.com/users/636351475307773963"
								title="gochelias#2076"
								rel="noreferrer"
								className="hover:underline">
								Discord
							</a>
						</div>
					</div>
					<Image
						className="object-cover object-center opacity-80"
						src="https://images.unsplash.com/photo-1660757177644-2469974a447d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
						layout="fill"
						alt=""
					/>
				</div>
				<div className="flex h-full w-1/2 items-center p-40">
					<form
						onSubmit={handleSubmit}
						className="grid h-max w-full grid-cols-2 gap-6">
						<div className="flex flex-col">
							<label
								htmlFor="name"
								className="select-none text-lg font-semibold uppercase">
								Name
							</label>
							<input
								onChange={handleChange}
								type="text"
								id="name"
								name="name"
								value={formData.name}
								required
								autoComplete="off"
								placeholder="Enter your name"
								className="h-14 border-b border-white bg-transparent font-['telegraf'] text-2xl text-[#EAEAEA] selection:bg-white selection:text-black placeholder:text-xl placeholder:text-[#666666] focus:border-b-2 focus:outline-none"
							/>
						</div>
						<div className="flex flex-col">
							<label
								htmlFor="email"
								className="select-none text-lg font-semibold uppercase">
								Email
							</label>
							<input
								onChange={handleChange}
								type="email"
								id="email"
								name="email"
								value={formData.email}
								required
								placeholder="Enter your email"
								className="h-14 border-b border-white bg-transparent font-['telegraf'] text-2xl text-[#EAEAEA] selection:bg-white selection:text-black placeholder:text-xl placeholder:text-[#666666]  focus:border-b-2 focus:outline-none"
							/>
						</div>
						<div className="col-span-2 mt-10 mb-40 flex flex-col space-y-3">
							<label
								htmlFor="message"
								className="select-none text-lg font-semibold uppercase">
								Message
							</label>
							<textarea
								onChange={handleChange}
								id="message"
								name="message"
								value={formData.message}
								required
								maxLength={280}
								placeholder="Enter your message"
								className="h-28 border-b bg-transparent font-['telegraf'] text-2xl text-[#EAEAEA] selection:bg-white selection:text-black placeholder:text-xl placeholder:text-[#666666] focus:border-b-2 focus:outline-none"
							/>
						</div>
						<button
							type="submit"
							className="col-span-2 h-14 select-none border-2 border-white bg-white text-lg font-semibold uppercase text-black outline outline-white focus:outline-2 focus:outline-offset-4 active:bg-black active:text-white ">
							Send
						</button>
					</form>
				</div>
			</header>
		</>
	);
};

export default ContactPage;
