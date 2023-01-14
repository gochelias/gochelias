import Link from 'next/link';

import { FooterExternalLink } from 'components/FooterExternalLink';
import { ArrowUpRight } from 'components/ArrowRight';
import { links } from 'config/links';

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
