import type { NextPage } from 'next';
import Image from 'next/image';
import { Tween } from 'react-gsap';

import styles from 'styles/Home.module.css';
import { Layout } from 'components/Layout';
import { ScrollDown } from 'components/ScrollDown';
import Link from 'next/link';

const Home: NextPage = () => (
	<Layout title="Home">
		<header className={styles.hero}>
			<div className={styles.hero_title}>
				<Tween
					from={{ y: 200, skewY: 5, opacity: 0 }}
					duration={2}
					delay={4}
					ease="Expo.easeInOut">
					<h1>
						<span className={styles.hero_name}>Elias Goche</span>
						<br />
						<span className={styles.hero_dev}>
							Software Developer
						</span>
					</h1>
				</Tween>
			</div>
			<div className={styles.hero_center}>
				<Tween
					from={{ x: 100, opacity: 0 }}
					duration={1.8}
					delay={4}
					ease="Expo.easeInOut">
					<div className={styles.hero_center_left}>
						<div className={styles.hero_to_about}>
							<svg
								width="40"
								height="40"
								viewBox="0 0 18 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M9.93945 0.403906L8.73945 1.60391L14.5645 7.37891H0.814453V9.00391H14.5395L8.73945 14.7539L9.93945 15.9789L17.7145 8.17891L9.93945 0.403906Z"
									fill="currentColor"
								/>
							</svg>
						</div>
					</div>
				</Tween>
				<Tween duration={2.4} delay={4} ease="Expo.easeInOut">
					<div className={styles.hero_img_container}>
						<Tween
							to={{ y: '-101%' }}
							duration={3}
							delay={1}
							ease="Expo.easeInOut">
							<div className={styles.img_cover} />
						</Tween>
						<Tween
							from={{ opacity: 0, scale: 1.4 }}
							to={{ opacity: 1, scale: 1.01 }}
							duration={4}
							delay={0.5}
							ease="Expo.easeInOut">
							<div className={styles.hero_img_layout}>
								<Image
									className={styles.hero_image}
									src="https://images.unsplash.com/photo-1593990965215-075c1f918806?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
									layout="fill"
								/>
							</div>
						</Tween>
					</div>
				</Tween>
				<Tween
					from={{ x: -100, opacity: 0 }}
					duration={1.8}
					delay={4}
					ease="Expo.easeInOut">
					<div className={styles.hero_center_right}>
						<div className={styles.hero_available}>
							<span className={styles.hero_available_text}>
								Available for work
							</span>
						</div>
					</div>
				</Tween>
			</div>
			<Tween
				from={{ y: 200, skewY: 5, opacity: 0 }}
				duration={1.8}
				delay={4}
				ease="Expo.easeInOut">
				<div className={styles.hero_descrip_container}>
					<div className={styles.hero_descrip_line} />
					<div className={styles.hero_descrip_content}>
						<p className={styles.hero_descrip_paragraph}>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Ex necessitatibus iure minima fuga autem saepe
							aperiam
						</p>
						<Link href="/about">
							<a className={styles.hero_descrip_more}>
								Read More
							</a>
						</Link>
					</div>
				</div>
			</Tween>
			<ScrollDown />
		</header>
		<main className={styles.main}>main</main>
	</Layout>
);

export default Home;
