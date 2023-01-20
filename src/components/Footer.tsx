import Link from 'next/link';

import { ArrowUpRight } from 'components/ArrowRight';
import { SocialLink } from 'components/SocialLink';
import { Email } from 'components/Email';
import { socialLinks } from 'config';
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
						<SocialLink type={socialLinks.github} />
						<SocialLink type={socialLinks.codepen} />
						<SocialLink type={socialLinks.dribbble} />
						<SocialLink type={socialLinks.linkedin} />
						<SocialLink type={socialLinks.discord} />
					</div>
					<Email />
				</div>
			</footer>
		</section>
	);
};
