import Link from 'next/link';
import styles from './menu.module.css';

export default function MenuLinks({ closeMenu }: { closeMenu: () => void }) {
	return (
		<ul className={styles.links}>
			<li>
				<Link href="/" onClick={closeMenu} className={styles.link}>
					Home
				</Link>
			</li>
			<li>
				<Link href="/blog" onClick={closeMenu} className={styles.link}>
					Blog
				</Link>
			</li>
			<li>
				<Link
					href="/contact"
					onClick={closeMenu}
					className={styles.link}>
					Contact
				</Link>
			</li>
		</ul>
	);
}
