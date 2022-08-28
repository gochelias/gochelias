import Link from 'next/link';

import styles from 'styles/Footer.module.css';

export const Footer = () => (
	<footer className={styles.footer}>
		<div className={styles.nav}>
			<div className={styles.col}>
				<Link href="/portfolio">
					<a className={styles.title}>Portfolio</a>
				</Link>
				<ul className={styles.list}>
					<li>
						<a
							href="https://github.com/gochelias"
							title="@gochelias">
							GitHub
						</a>
					</li>
					<li>
						<a
							href="https://codepen.io/gochelias"
							title="@gochelias">
							Codepen
						</a>
					</li>
					<li>
						<a
							href="https://dribbble.com/gochelias"
							title="@gochelias">
							Dribbble
						</a>
					</li>
				</ul>
			</div>
			<div className={styles.col}>
				<Link href="/about">
					<a className={styles.title}>About</a>
				</Link>
				<ul className={styles.list}>
					<li>
						<Link href="/me">
							<a>Me</a>
						</Link>
					</li>
					<li>
						<Link href="/feed">
							<a>Feed</a>
						</Link>
					</li>
					<li>
						<Link href="/stats">
							<a>Stats</a>
						</Link>
					</li>
				</ul>
			</div>
			<div className={styles.col}>
				<h2 className={styles.title}>Contact</h2>
				<ul className={styles.list}>
					<li>
						<a
							href="https://www.linkedin.com/in/gochelias"
							title="@gochelias">
							LinkedIn
						</a>
					</li>
					<li>
						<a
							href="http://https://twitter.com/gochelias"
							title="@gochelias">
							Twitter
						</a>
					</li>
					<li>Discord</li>
				</ul>
			</div>
			{/* <div className={styles.col}>
				<h2 className={styles.title}>Blog</h2>
				<ul className={styles.list}>
					<li>Tutorials</li>
				</ul>
			</div> */}
		</div>

		<div className={styles.email}>
			<input
				className={styles.input}
				placeholder="your@email.com"
				type="email"
				name=""
				id=""
			/>
			<button className={styles.button} type="button">
				<svg
					width="24"
					height="8"
					viewBox="0 0 24 8"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M17.728 7.8C18.048 7.11733 18.3573 6.52 18.656 6.008C18.976 5.496 19.2853 5.06933 19.584 4.728H0.928V3.384H19.584C19.2853 3.02133 18.976 2.584 18.656 2.072C18.3573 1.56 18.048 0.973332 17.728 0.311999H18.848C20.192 1.86933 21.6 3.02133 23.072 3.768V4.344C21.6 5.06933 20.192 6.22133 18.848 7.8H17.728Z"
						fill="black"
					/>
				</svg>
			</button>
		</div>
	</footer>
);
