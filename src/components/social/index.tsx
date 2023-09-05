import { ExternalLink } from 'react-feather';
import styles from './social.module.css';

type Platform = 'GitHub' | 'LinkedIn' | 'Discord' | 'Codepen' | 'Dribbble';

/**
 * Generates a link to a specific platform
 *
 * @param platform Social platform to link to
 */
export const SocialLink = ({ platform }: { platform: Platform }) => (
	<a
		className={`${styles.link} group`}
		href={`/${platform.toLowerCase()}`}
		title="@gochelias"
		target="_blank"
		rel="noreferrer"
		translate="no">
		<span>{platform}</span>
		<ExternalLink
			size={18}
			className={`${styles.icon} mb-px group-hover:opacity-100`}
		/>
	</a>
);

/**
 * Generates a column of social links
 *
 * @param include An array of platforms to include in the column
 */
export function SocialLinksColumn({ include }: { include: Platform[] }) {
	return (
		<ul className={styles.column}>
			{include.map((platform: Platform) => (
				<li key={platform}>
					<SocialLink platform={platform} />
				</li>
			))}
		</ul>
	);
}

/**
 * Generates a row of social links
 *
 * @param include An array of platforms to include in the row
 */
export function SocialLinksRow({ include }: { include: Platform[] }) {
	return (
		<ul className={styles.row}>
			{include.map((platform: Platform) => (
				<li key={platform}>
					<SocialLink platform={platform} />
				</li>
			))}
		</ul>
	);
}

/**
 * Mail to
 */
export function EmailLink() {
	return (
		<a href="mailto:elias@gochelias.com" className={styles.email}>
			elias@gochelias.com
		</a>
	);
}
