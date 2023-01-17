import Link from 'next/link';

import { ExternalLink } from 'components/ExternalLink';
import { ArrowUpRight } from 'components/ArrowRight';
import { links } from 'config/links';
import styles from 'styles/Footer.module.css';

export const Footer = () => {
	const apos = '\u2019';

	return (
		<section className={styles.footerSection}>
			<div className="my-16 w-full 2xl:my-64">
				<div className={styles.footerContent}>
					<h2>
						I like to <br /> work <br /> on cool <br /> stuff,
						<br />
					</h2>
					<Link href="/contact">
						<span>
							Let{apos}s <br /> work <br /> together
						</span>
						<span className={styles.footerGetInTouch}>
							<p>Get in Touch</p>
							<ArrowUpRight
								strokeWidth={3}
								className={styles.footerGetInTouchArrow}
							/>
						</span>
					</Link>
				</div>
			</div>
			<footer className="w-full">
				<div className={styles.footerLinksContainer}>
					<div className={styles.footerLinks}>
						<ExternalLink
							title={links.github.username}
							name={links.github.name}
							url={links.github.url}
						/>
						<ExternalLink
							title={links.codepen.username}
							name={links.codepen.name}
							url={links.codepen.url}
						/>
						<ExternalLink
							title={links.dribbble.username}
							name={links.dribbble.name}
							url={links.dribbble.url}
						/>
						<ExternalLink
							title={links.linkedin.username}
							name={links.linkedin.name}
							url={links.linkedin.url}
						/>
						<ExternalLink
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
