import Link from 'next/link';
import CopyToClipboard from 'react-copy-to-clipboard';

import { ArrowRight } from './ArrowRight';

export const Footer = () => {
	const apos = '\u2019';

	return (
		<section className="relative flex h-screen w-full flex-col justify-center space-y-64">
			<h6 className="select-none text-lg font-semibold uppercase">
				Available for work
			</h6>
			<div className="text-center text-9xl font-medium duration-75 hover:text-[#999999]">
				<h2 className="inline select-none">
					I like to work on cool stuff, let{apos}s work together.{' '}
				</h2>
				<CopyToClipboard text="hello@gochelias.com">
					<button
						type="button"
						className="text-[#FFEFCF] underline outline-none selection:bg-[#FFEFCF] selection:text-black active:bg-[#FFEFCF] active:text-black">
						hello@gochelias.com
					</button>
				</CopyToClipboard>
			</div>
			<footer className="mr-40 flex w-auto select-none justify-between">
				<div>
					<div className="group flex items-center space-x-3">
						<Link href="/portfolio">
							<a className="text-lg font-semibold uppercase">
								Portfolio
							</a>
						</Link>
						<div className="overflow-hidden">
							<ArrowRight className="h-max w-4 -translate-x-full transition-transform duration-100 group-hover:translate-x-0" />
						</div>
					</div>
					<ul className="mt-4 space-y-1 text-lg font-medium text-[#999]">
						<li className="hover:text-white hover:underline">
							<a
								target="_blank"
								href="https://github.com/gochelias"
								title="@gochelias"
								className=""
								rel="noreferrer">
								GitHub
							</a>
						</li>
						<li className="hover:text-white hover:underline">
							<a
								target="_blank"
								href="https://codepen.io/gochelias"
								title="@gochelias"
								className=""
								rel="noreferrer">
								Codepen
							</a>
						</li>
						<li className="hover:text-white hover:underline">
							<a
								target="_blank"
								href="https://dribbble.com/gochelias"
								title="@gochelias"
								className=""
								rel="noreferrer">
								Dribbble
							</a>
						</li>
					</ul>
				</div>
				<div>
					<div className="group flex items-center space-x-3">
						<Link href="/about">
							<a className="text-lg font-semibold uppercase">
								About
							</a>
						</Link>
						<div className="overflow-hidden">
							<ArrowRight className="h-max w-4 -translate-x-full transition-transform duration-100 group-hover:translate-x-0" />
						</div>
					</div>
					<ul className="mt-4 space-y-1 text-lg font-medium text-[#999]">
						<li className="hover:text-white hover:underline">
							<Link href="/me">
								<a>Me</a>
							</Link>
						</li>
						<li className="hover:text-white hover:underline">
							<Link href="/feed">
								<a>Feed</a>
							</Link>
						</li>
						<li className="hover:text-white hover:underline">
							<Link href="/stats">
								<a>Stats</a>
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<div className="group flex items-center space-x-3">
						<Link href="/about">
							<a className="text-lg font-semibold uppercase">
								Contact
							</a>
						</Link>
						<div className="overflow-hidden">
							<ArrowRight className="h-max w-4 -translate-x-full transition-transform duration-100 group-hover:translate-x-0" />
						</div>
					</div>
					<ul className="mt-4 space-y-1 text-lg font-medium text-[#999]">
						<li className="hover:text-white hover:underline">
							<a
								target="_blank"
								href="https://www.linkedin.com/in/gochelias"
								title="@gochelias"
								rel="noreferrer">
								LinkedIn
							</a>
						</li>
						<li className="hover:text-white hover:underline">
							<a
								target="_blank"
								href="https://twitter.com/gochelias"
								title="@gochelias"
								rel="noreferrer">
								Twitter
							</a>
						</li>
						<li className="hover:text-white hover:underline">
							<a
								target="_blank"
								href="https://discord.com/users/636351475307773963"
								title="gochelias#2076"
								rel="noreferrer">
								Discord
							</a>
						</li>
					</ul>
				</div>
				<div>
					<div className="group flex items-center space-x-3">
						<Link href="/blog">
							<a className="text-lg font-semibold uppercase">
								Blog
							</a>
						</Link>
						<div className="overflow-hidden">
							<ArrowRight className="h-max w-4 -translate-x-full transition-transform duration-100 group-hover:translate-x-0" />
						</div>
					</div>
					<ul className="mt-4 space-y-1 text-lg font-medium text-[#999]">
						<li>undefined</li>
						<li>undefined</li>
						<li>undefined</li>
					</ul>
				</div>
			</footer>
			<div className="absolute bottom-16 flex w-full select-none justify-between font-medium uppercase">
				<p>© 2022 Elias Goche</p>
			</div>
		</section>
	);
};
