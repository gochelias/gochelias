import Link from 'next/link';

import { ArrowRight } from 'components/ArrowRight';
import { FooterExternalLink } from 'components/FooterExternalLink';
import { FooterLink } from 'components/FooterLink';
import { links } from 'config/links';

export const Footer = () => {
	const apos = '\u2019';

	return (
		<section className="flex h-screen w-full flex-col justify-center space-y-64">
			<h6 className="select-none text-lg uppercase">
				Available for work
			</h6>
			<div className="text-9xl font-medium duration-75 hover:text-[#999999]">
				<h2 className="inline select-none">
					I like to work on cool stuff, let{apos}s work together.{' '}
				</h2>
				<Link
					href="/contact"
					className="text-[#FFEFCF] underline outline-none selection:bg-[#FFEFCF] selection:text-black active:bg-[#FFEFCF] active:text-black">
					hello@gochelias.com
				</Link>
			</div>
			<footer className="mr-40 flex w-auto select-none justify-between">
				<div>
					<div className="group flex items-center space-x-3">
						<Link href="/portfolio" className="text-lg uppercase">
							Portfolio
						</Link>
						<div className="overflow-hidden">
							<ArrowRight className="h-max w-4 -translate-x-full transition-transform duration-100 group-hover:translate-x-0 " />
						</div>
					</div>
					<ul className="mt-4 space-y-1 font-body text-lg text-[#999]">
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
				<div>
					<div className="group flex items-center space-x-3">
						<Link href="/about" className="text-lg uppercase">
							About
						</Link>
						<div className="overflow-hidden">
							<ArrowRight className="h-max w-4 -translate-x-full transition-transform duration-100 group-hover:translate-x-0" />
						</div>
					</div>
					<ul className="mt-4 space-y-1 font-body text-lg text-[#999]">
						<FooterLink name="Me" url="/me" />
						<FooterLink name="Feed" url="/feed" />
						<FooterLink name="stats" url="/stats" />
					</ul>
				</div>
				<div>
					<div className="group flex items-center space-x-3">
						<Link href="/about" className="text-lg uppercase">
							Contact
						</Link>
						<div className="overflow-hidden">
							<ArrowRight className="h-max w-4 -translate-x-full transition-transform duration-100 group-hover:translate-x-0" />
						</div>
					</div>
					<ul className="mt-4 space-y-1 font-body text-lg text-[#999]">
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
				<div>
					<div className="group flex items-center space-x-3">
						<Link href="/blog" className="text-lg uppercase">
							Blog
						</Link>
						<div className="overflow-hidden">
							<ArrowRight className="h-max w-4 -translate-x-full transition-transform duration-100 group-hover:translate-x-0" />
						</div>
					</div>
					<ul className="mt-4 space-y-1 font-body text-lg text-[#999]">
						<li>undefined</li>
						<li>undefined</li>
						<li>undefined</li>
					</ul>
				</div>
			</footer>
		</section>
	);
};
