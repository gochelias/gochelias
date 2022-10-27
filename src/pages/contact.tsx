import { Nav } from 'components/Nav';
import { NextPage } from 'next';
import Image from 'next/image';

const ContactPage: NextPage = () => (
	<>
		<Nav pageTitle="Contact" />
		<header className="flex h-screen w-full">
			<div className="relative h-full w-1/2 select-none">
				<div className="absolute z-[1] flex h-full w-full flex-col justify-between p-40">
					<h2 className="flex flex-col space-y-2 text-7xl font-medium">
						<span className="block">
							You have a new project? <br /> or want to say hello.
						</span>
					</h2>
					<div className="flex justify-evenly text-lg font-medium [text-shadow:_0_2px_0_rgb(0_0_0_/_50%)]">
						<a
							target="_blank"
							href="https://github.com/gochelias"
							title="@gochelias"
							className=""
							rel="noreferrer">
							GitHub
						</a>
						<a
							target="_blank"
							href="https://www.linkedin.com/in/gochelias"
							title="@gochelias"
							rel="noreferrer">
							LinkedIn
						</a>
						<a
							target="_blank"
							href="https://discord.com/users/636351475307773963"
							title="gochelias#2076"
							rel="noreferrer">
							Discord
						</a>
					</div>
				</div>
				<Image
					className="object-cover object-center opacity-70"
					src="https://images.unsplash.com/photo-1660503427782-f9c627e7066e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80"
					layout="fill"
				/>
			</div>
			<div className="flex h-full w-1/2 items-center p-40">
				<form action="" className="grid h-max w-full grid-cols-2 gap-6">
					<div className="flex flex-col">
						<label className="select-none text-lg font-semibold uppercase">
							Name
						</label>
						<input
							type="text"
							name=""
							id=""
							required
							autoComplete="off"
							placeholder="Enter your name"
							className="h-14 border-b border-white bg-transparent font-['telegraf'] text-2xl selection:bg-white selection:text-black placeholder:text-xl placeholder:text-[#666666] focus:border-b-2 focus:outline-none"
						/>
					</div>
					<div className="flex flex-col">
						<label className="select-none text-lg font-semibold uppercase">
							Email
						</label>
						<input
							type="email"
							name=""
							id=""
							required
							placeholder="Enter your email"
							className="h-14 border-b border-white bg-transparent font-['telegraf'] text-2xl selection:bg-white selection:text-black placeholder:text-xl placeholder:text-[#666666]  focus:border-b-2 focus:outline-none"
						/>
					</div>
					<div className="col-span-2 mt-10 mb-40 flex flex-col space-y-3">
						<label className="select-none text-lg font-semibold uppercase">
							Message
						</label>
						<textarea
							name=""
							id=""
							required
							maxLength={280}
							placeholder="Enter your message"
							className="h-28 border-b bg-transparent font-['telegraf'] text-2xl selection:bg-white selection:text-black placeholder:text-xl placeholder:text-[#666666] focus:border-b-2 focus:outline-none"
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

export default ContactPage;
