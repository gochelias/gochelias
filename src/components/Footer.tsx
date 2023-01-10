import Link from 'next/link';

/* import { Arrow } from 'components/ArrowRight'; */
import { FooterExternalLink } from 'components/FooterExternalLink';
import { FooterLink } from 'components/FooterLink';
import { links } from 'config/links';

export const Footer = () => {
	const apos = '\u2019';

	return (
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
					<div className="group flex items-center space-x-3">
						<Link
							href="/portfolio"
							className="text-sm font-medium uppercase text-gray">
							Portfolio
						</Link>
						<div className="overflow-hidden">
							{/* <Arrow className="h-max w-4 -translate-x-full transition-transform duration-100 group-hover:translate-x-0 " /> */}
						</div>
					</div>
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
					<div className="group flex items-center space-x-3">
						<Link
							href="/about"
							className="text-sm font-medium uppercase text-gray">
							About
						</Link>
						<div className="overflow-hidden">
							{/* <Arrow className="h-max w-4 -translate-x-full transition-transform duration-100 group-hover:translate-x-0" /> */}
						</div>
					</div>
					<ul className="space-y-2 font-body text-lg">
						<FooterLink name="Me" url="/me" />
						<FooterLink name="Feed" url="/feed" />
						<FooterLink name="stats" url="/stats" />
					</ul>
				</div>
				<div className="space-y-6">
					<div className="group flex items-center space-x-3">
						<Link
							href="/about"
							className="text-sm font-medium uppercase text-gray">
							Contact
						</Link>
						<div className="overflow-hidden">
							{/* <Arrow className="h-max w-4 -translate-x-full transition-transform duration-100 group-hover:translate-x-0" /> */}
						</div>
					</div>
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
					<div className="group flex items-center space-x-3">
						<Link
							href="/blog"
							className="text-sm font-medium uppercase text-gray">
							Blog
						</Link>
						<div className="overflow-hidden">
							{/* <Arrow className="h-max w-4 -translate-x-full transition-transform duration-100 group-hover:translate-x-0" /> */}
						</div>
					</div>
					<ul className="space-y-2 font-body text-lg">
						<li>undefined</li>
						<li>undefined</li>
						<li>undefined</li>
					</ul>
				</div>
			</footer>
		</section>
	);
};
