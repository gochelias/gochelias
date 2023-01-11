import Link from 'next/link';

import { FooterExternalLink } from 'components/FooterExternalLink';
import { links } from 'config/links';
import { Logo } from './Logo';
import { ArrowUpRight } from './ArrowRight';

export const Footer = () => {
	const apos = '\u2019';

	return (
		<section className="flex h-full w-full flex-col items-center pb-16">
			<div className="my-64 w-full">
				<div className="mx-auto w-max text-[8vw] uppercase leading-none">
					<h2>
						I like to <br /> work <br /> on cool <br /> stuff,
						<br />
					</h2>
					<Link href="/contact">
						<span>
							Let{apos}s <br /> work <br /> together
						</span>
						<span className="flex flex-col items-end justify-between text-4xl transition-colors hover:text-gray">
							<p>Get in Touch</p>
							<ArrowUpRight strokeWidth={3} size={20} />
						</span>
					</Link>
				</div>
			</div>
			<footer className="w-full">
				<div className="flex w-full items-center justify-between text-lg uppercase text-white">
					<div className="flex items-center space-x-20">
						<div className="bg-white p-6 text-black">
							<Logo />
						</div>
						<FooterExternalLink
							title={links.github.username}
							name={links.github.name}
							url={links.github.url}
						/>
						<FooterExternalLink
							title={links.codepen.username}
							name={links.codepen.name}
							url={links.codepen.url}
						/>
						<FooterExternalLink
							title={links.dribbble.username}
							name={links.dribbble.name}
							url={links.dribbble.url}
						/>
						<FooterExternalLink
							title={links.linkedin.username}
							name={links.linkedin.name}
							url={links.linkedin.url}
						/>
						<FooterExternalLink
							title={links.discord.username}
							name={links.discord.name}
							url={links.discord.url}
						/>
					</div>
					<Link
						href="/contact"
						className=" selection:bg-white selection:text-black">
						hello@gochelias.com
					</Link>
				</div>
			</footer>
		</section>
	);
};

/* 

<section className="flex h-screen w-full flex-col justify-center space-y-64">
			<h6 className="select-none text-lg font-medium uppercase">
				Available for work
			</h6>
			<div className="group text-9xl font-medium">
				<h2 className="inline select-none transition-colors duration-75 ease-in group-hover:text-gray2dark">
					I like to work on cool stuff, let{apos}s work together.{' '}
				</h2>
				<Link
					href="/contact"
					className="text-gray underline outline-none transition-colors duration-75 ease-in selection:bg-white selection:text-black group-hover:text-white">
					hello@gochelias.com
				</Link>
			</div>
			<footer className="mr-40 flex w-auto select-none justify-between">
				<div className="space-y-6">
					<Link
						href="/portfolio"
						className="text-sm font-medium uppercase text-gray">
						Portfolio
					</Link>
					<ul className="space-y-2 font-body text-lg">
						<FooterExternalLink
							title={links.github.username}
							name={links.github.name}
							url={links.github.url}
						/>
						<FooterExternalLink
							title={links.codepen.username}
							name={links.codepen.name}
							url={links.codepen.url}
						/>
						<FooterExternalLink
							title={links.dribbble.username}
							name={links.dribbble.name}
							url={links.dribbble.url}
						/>
					</ul>
				</div>
				<div className="space-y-6">
					<Link
						href="/about"
						className="text-sm font-medium uppercase text-gray">
						About
					</Link>
					<ul className="space-y-2 font-body text-lg">
						<FooterLink name="Me" url="/me" />
						<FooterLink name="Feed" url="/feed" />
						<FooterLink name="stats" url="/stats" />
					</ul>
				</div>
				<div className="space-y-6">
					<Link
						href="/contact"
						className="text-sm font-medium uppercase text-gray">
						Contact
					</Link>
					<ul className="space-y-2 font-body text-lg">
						<FooterExternalLink
							title={links.linkedin.username}
							name={links.linkedin.name}
							url={links.linkedin.url}
						/>
						<FooterExternalLink
							title={links.discord.username}
							name={links.discord.name}
							url={links.discord.url}
						/>
						<FooterExternalLink
							title={links.twitter.username}
							name={links.twitter.name}
							url={links.twitter.url}
						/>
					</ul>
				</div>
				<div className="space-y-6">
					<Link
						href="/blog"
						className="text-sm font-medium uppercase text-gray">
						Blog
					</Link>
					<ul className="space-y-2 font-body text-lg">
						<li>undefined</li>
						<li>undefined</li>
						<li>undefined</li>
					</ul>
				</div>
			</footer>
		</section>

*/
