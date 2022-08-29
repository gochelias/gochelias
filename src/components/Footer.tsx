import Link from 'next/link';

import styles from 'styles/Footer.module.css';

export const Footer = () => (
	<section className={styles.container}>
		<div className={styles.board}>
			<h2 className={styles.board_title}>
				I like to work on cool stuff,
				<br />
				<span className={styles.board_title_underline}>
					Let’s work together.
				</span>
			</h2>
		</div>
		<footer className={styles.footer}>
			<div className={styles.nav}>
				<div className={styles.col}>
					<Link href="/portfolio">
						<a className={styles.nav_title}>Portfolio</a>
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
						<a className={styles.nav_title}>About</a>
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
					<h2 className={styles.nav_title}>Contact</h2>
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
				<h2 className={styles.nav_title}>Blog</h2>
				<ul className={styles.list}>
					<li>Tutorials</li>
				</ul>
			</div> */}
			</div>

			<div className={styles.email}>
				<label className="font-medium uppercase" htmlFor="email">
					subscribe to my newsletter
					<input
						className={styles.input}
						placeholder="your@email.com"
						type="email"
						name=""
						id="email"
					/>
				</label>
				<button className={styles.button} type="button">
					<svg
						width="24"
						height="10"
						viewBox="0 0 24 10"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M16.384 9.28C16.5973 8.72533 16.832 8.21333 17.088 7.744C17.344 7.25333 17.632 6.79467 17.952 6.368H0.8V3.744H17.952C17.6533 3.31733 17.376 2.86933 17.12 2.4C16.864 1.90933 16.6293 1.38667 16.416 0.831999H18.848C20.1707 2.38933 21.6213 3.57333 23.2 4.384V5.76C21.6213 6.528 20.1707 7.70133 18.848 9.28H16.384Z"
							fill="currentColor"
						/>
					</svg>
				</button>
			</div>
		</footer>
	</section>
);
