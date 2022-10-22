import { Layout } from 'components/Layout';
import { nanoid } from 'nanoid';
import { NextPage } from 'next';
import Image from 'next/image';

const AboutPage: NextPage = () => {
	const text =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veritatis assumenda est voluptate laborum earum distinctio repellendus corporis deleniti ipsam error et.';
	const textByWord = text.split(' ');

	return (
		<Layout title="About me">
			<header className="flex h-screen w-full flex-col justify-between space-y-16 py-40">
				<p className="ml-auto flex w-3/4 flex-wrap">
					<span className="my-auto ml-72 mr-14 flex items-center space-x-7">
						<hr className="h-0.5 w-24" />
						<span className="text-2xl font-normal uppercase leading-none">
							I&apos;m Elias Goche
						</span>
					</span>
					{textByWord.map((word: string) => (
						<span
							key={nanoid()}
							className="mr-4 text-6xl font-medium uppercase">
							{word}
						</span>
					))}
				</p>
				<div className="mb-48 mt-16 flex h-[50vh] w-full">
					<div className="relative h-full w-1/2">
						<Image
							className="object-cover object-top"
							src="https://images.unsplash.com/photo-1612986568842-42f75cc9e36a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
							layout="fill"
						/>
					</div>
					<div className="m-auto w-1/4">
						<p className="font-['telegraf'] text-xl text-[#eaeaea]">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Ex, illum dolores. In obcaecati esse earum at
							ex temporibus ipsam impedit, est sint, sed omnis,
							explicabo non. Labore beatae eaque aut, voluptas
							nesciunt tenetur impedit asperiores eius nemo minus
							iure eum.
							<br /> <br />
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Hic illum nesciunt sequi. Tempora excepturi
							culpa dignissimos eveniet iste numquam harum earum
							perspiciatis illum aliquid!
						</p>
					</div>
				</div>
			</header>
			<section className="my-16 flex w-full flex-wrap gap-x-4">
				<a
					href="https://typescriptlang.org"
					title="TypeScript: JavaScript With Syntax For Types"
					className="text-xl font-semibold uppercase">
					Typescript
				</a>
				-
				<a
					href="https://reactjs.org"
					title="React – A JavaScript library for building user interfaces"
					className="text-xl font-semibold uppercase">
					React
				</a>
				-
				<a
					href="https://nextjs.org"
					title="Next.js by Vercel - The React Framework"
					className="text-xl font-semibold uppercase">
					Next.js
				</a>
				-
				<a
					href="https://svelte.dev"
					title="Svelte • Cybernetically enhanced web apps"
					className="text-xl font-semibold uppercase">
					Svelte
				</a>
				-
				<a
					href="https://tailwindcss.com"
					title="Tailwind CSS - Rapidly build modern websites without ever leaving your HTML."
					className="text-xl font-semibold uppercase">
					Tailwindcss
				</a>
				-
				<a
					href="https://expressjs.com"
					title="Express - Node.js web application framework"
					className="text-xl font-semibold uppercase">
					Express
				</a>
				-
				<a
					href="https:/hapi.dev"
					title="hapi.dev - The simple, secure framework developers trust"
					className="text-xl font-semibold uppercase">
					Hapi
				</a>
				-
				<a
					href="https://nestjs.com"
					title="NestJS - A progressive Node.js framework"
					className="text-xl font-semibold uppercase">
					NestJS
				</a>
				-
				<a
					href="https://prisma.io"
					title="Prisma | Next-generation ORM for Node.js & TypeScript"
					className="text-xl font-semibold uppercase">
					Prisma
				</a>
				-
				<a
					href="jestjs.io"
					title="Jest · 🃏 Delightful JavaScript Testing"
					className="text-xl font-semibold uppercase">
					Jest
				</a>
				-
				<a
					href="https://rust-lang.org"
					title="Rust Programming Language"
					className="text-xl font-semibold uppercase">
					Rust
				</a>
				-
				<a
					href="https://go.dev"
					title="The Go Programming Language"
					className="text-xl font-semibold uppercase">
					Go
				</a>
				<a
					href="https://gin-gonic.com"
					title="The fastest full-featured web framework for Go"
					className="text-xl font-semibold uppercase">
					Gin
				</a>
				-
				<a
					href="https://echo.labstack.com"
					title="High performance, minimalist Go web framework"
					className="text-xl font-semibold uppercase">
					Echo
				</a>
				-
				<a
					href="https://python.org"
					title="Python is a programming language that lets you work quickly and integrate systems more effectively"
					className="text-xl font-semibold uppercase">
					Python
				</a>
				-
				<a
					href="https://www.mongodb.com"
					title="The Developer Data Platform"
					className="text-xl font-semibold uppercase">
					MongoDB
				</a>
				-
				<a
					href="https://www.postgresql.org"
					title="The world's most advanced open source database"
					className="text-xl font-semibold uppercase">
					PostgreSQL
				</a>
				-
				<a
					href="https://docker.com"
					title="Develop faster. Run anywhere."
					className="text-xl font-semibold uppercase">
					Docker
				</a>
				-
				<a
					href="https://git-scm.com"
					title="A distributed version control system"
					className="text-xl font-semibold uppercase">
					Git.
				</a>
				<p className="text-xl font-medium text-[#999]">
					And I keep learning more...
				</p>
			</section>
			<section className="flex h-full w-full flex-col items-end">
				<div className="flex h-screen w-4/5 flex-col justify-center">
					<div className="flex h-96 w-full items-center justify-between">
						<h4 className="text-5xl">01</h4>
						<h2 className="text-6xl font-medium uppercase">
							Frontend <br /> development
						</h2>
						<p className="mr-16 w-1/5 font-['telegraf'] text-xl">
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Ab ullam quibusdam assumenda aliquam soluta.
						</p>
					</div>
					<div className="flex h-96 items-center justify-between border-y border-[#444]">
						<h4 className="text-5xl">02</h4>
						<h2 className="text-6xl font-medium uppercase">
							Backend <br /> development
						</h2>
						<p className="mr-16 w-1/5 font-['telegraf'] text-xl">
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Ab ullam quibusdam assumenda aliquam soluta.
						</p>
					</div>
					<div className="flex h-96 items-center justify-between border-[#666666]">
						<h4 className="text-5xl">03</h4>
						<h2 className="text-6xl font-medium uppercase">
							Apps <br /> development
						</h2>
						<p className="mr-16 w-1/5 font-['telegraf'] text-xl">
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Ab ullam quibusdam assumenda aliquam soluta.
						</p>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default AboutPage;
