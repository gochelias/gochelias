import { NextPage } from 'next';
import Image from 'next/image';
import { nanoid } from 'nanoid';

import styles from 'styles/About.module.css';
import { Layout } from 'components/Layout';

const AboutPage: NextPage = () => {
	const text =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veritatis assumenda est voluptate laborum earum distinctio repellendus corporis deleniti ipsam error et.';
	const textByWord = text.split(' ');

	return (
		<Layout title="About me">
			<header className="flex h-full w-full flex-col justify-between space-y-16 py-40">
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
				<div className="mb-48 mt-16 flex h-[100vh] w-full">
					<div className="relative h-full w-1/2">
						<Image
							className="object-cover object-top"
							src="https://images.unsplash.com/photo-1612986568842-42f75cc9e36a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
							layout="fill"
						/>
					</div>
					<div className="m-auto w-2/5">
						<p className="font-['telegraf'] text-2xl text-[#eaeaea]">
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
							<br /> <br />
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. A optio recusandae accusamus voluptates
							reiciendis non doloribus fuga. Atque, repellendus
							in.
						</p>
						<div className="my-16 flex select-none flex-wrap items-center gap-4">
							<a
								href="https://typescriptlang.org"
								target="_black"
								rel="noreferrer"
								title="TypeScript: JavaScript With Syntax For Types"
								className={styles.skill_item}>
								Typescript
							</a>
							{/* <span className={styles.separator}>/</span> */}
							<a
								href="https://reactjs.org"
								target="_black"
								rel="noreferrer"
								title="React – A JavaScript library for building user interfaces"
								className={styles.skill_item}>
								React
							</a>
							<a
								href="https://nextjs.org"
								target="_black"
								rel="noreferrer"
								title="Next.js by Vercel - The React Framework"
								className={styles.skill_item}>
								Next.js
							</a>
							<a
								href="https://svelte.dev"
								target="_black"
								rel="noreferrer"
								title="Svelte • Cybernetically enhanced web apps"
								className={styles.skill_item}>
								Svelte
							</a>
							<a
								href="https://tailwindcss.com"
								target="_black"
								rel="noreferrer"
								title="Tailwind CSS - Rapidly build modern websites without ever leaving your HTML."
								className={styles.skill_item}>
								Tailwindcss
							</a>
							<a
								href="https://expressjs.com"
								target="_black"
								rel="noreferrer"
								title="Express - Node.js web application framework"
								className={styles.skill_item}>
								Express
							</a>
							<a
								href="https://nestjs.com"
								target="_black"
								rel="noreferrer"
								title="NestJS - A progressive Node.js framework"
								className={styles.skill_item}>
								NestJS
							</a>
							<a
								href="https:/hapi.dev"
								target="_black"
								rel="noreferrer"
								title="hapi.dev - The simple, secure framework developers trust"
								className={styles.skill_item}>
								Hapi
							</a>
							<a
								href="https://prisma.io"
								target="_black"
								rel="noreferrer"
								title="Prisma | Next-generation ORM for Node.js & TypeScript"
								className={styles.skill_item}>
								Prisma
							</a>
							<a
								href="https://jestjs.io"
								target="_black"
								rel="noreferrer"
								title="Jest · 🃏 Delightful JavaScript Testing"
								className={styles.skill_item}>
								Jest
							</a>
							<a
								href="https://rust-lang.org"
								target="_black"
								rel="noreferrer"
								title="Rust Programming Language"
								className={styles.skill_item}>
								Rust
							</a>
							<a
								href="https://go.dev"
								target="_black"
								rel="noreferrer"
								title="The Go Programming Language"
								className={styles.skill_item}>
								Go
							</a>
							<a
								href="https://gin-gonic.com"
								target="_black"
								rel="noreferrer"
								title="The fastest full-featured web framework for Go"
								className={styles.skill_item}>
								Gin
							</a>
							<a
								href="https://echo.labstack.com"
								target="_black"
								rel="noreferrer"
								title="High performance, minimalist Go web framework"
								className={styles.skill_item}>
								Echo
							</a>
							<a
								href="https://python.org"
								target="_black"
								rel="noreferrer"
								title="Python is a programming language that lets you work quickly and integrate systems more effectively"
								className={styles.skill_item}>
								Python
							</a>
							<a
								href="https://mongodb.com"
								target="_black"
								rel="noreferrer"
								title="The Developer Data Platform"
								className={styles.skill_item}>
								MongoDB
							</a>
							<a
								href="https://postgresql.org"
								target="_black"
								rel="noreferrer"
								title="The world's most advanced open source database"
								className={styles.skill_item}>
								PostgreSQL
							</a>
							<a
								href="https://docker.com"
								target="_black"
								rel="noreferrer"
								title="Develop faster. Run anywhere."
								className={styles.skill_item}>
								Docker
							</a>
							<a
								href="https://git-scm.com"
								target="_black"
								rel="noreferrer"
								title="A distributed version control system"
								className={styles.skill_item}>
								Git
							</a>
							<p className="my-auto font-['telegraf'] text-xl font-medium text-[#FFEFCF]/50">
								I keep learning more.
							</p>
						</div>
					</div>
				</div>
			</header>
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
					<div className="flex h-96 items-center justify-between">
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
