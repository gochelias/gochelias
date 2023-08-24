import Link from 'next/link';

import styles from '@/styles/Footer.module.css';
import { ArrowUpRight } from '@/components/ArrowRight';
import { SocialLink } from '@/components/SocialLink';
import { Email } from '@/components/Email';
import { socialLinks } from '@/config';

export const Footer = () => {
	const apos = '\u2019';

	return (
		<footer className={styles.footerSection}>
			<div className={styles.footerContent} translate="no">
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
			<div className="w-full">
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
			</div>
		</footer>
	);
};
