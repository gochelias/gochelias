import Image from 'next/image';
import { Tween } from 'react-gsap';

import styles from 'styles/Home.module.css';
import { ArrowRight } from 'components/ArrowRight';

export const HeaderHome = () => {
	const a = '';
	return (
		<header className={styles.hero}>
			<div className={styles.hero_title}>
				<h2 className={styles.hero_name} data-scroll>
					<Tween
						from={{ y: 200, opacity: 0 }}
						to={{ y: 0, opacity: 1 }}
						duration={2}
						delay={4}
						ease="Expo.easeInOut">
						<span className="block">Elias Goche</span>
					</Tween>
				</h2>
				<h2 className={styles.hero_dev}>
					<Tween
						from={{ y: 200, opacity: 0 }}
						duration={2}
						delay={4.1}
						ease="Expo.easeInOut">
						<span className="block">Software Developer</span>
					</Tween>
				</h2>
			</div>
			<div className={styles.hero_center}>
				<Tween
					from={{ x: 100, opacity: 0 }}
					to={{ x: 0, opacity: 1 }}
					duration={1.8}
					delay={4}
					ease="Expo.easeInOut">
					<div className={styles.hero_center_left}>
						<div className={styles.hero_to_about}>
							<ArrowRight className={styles.hero_arrow} />
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
							<div className={styles.hero_img_cover} />
						</Tween>
						<Tween
							from={{ opacity: 0, scale: 1.4 }}
							to={{ opacity: 1, scale: 1.01 }}
							duration={4}
							delay={0.5}
							ease="Expo.easeInOut">
							<div className={styles.hero_img_layout}>
								<Image
									className={`${styles.hero_image}`}
									fill
									sizes="25%"
									// layout="fill"
									src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
									alt=""
								/>
							</div>
						</Tween>
					</div>
				</Tween>
				<Tween
					from={{ x: -100, opacity: 0 }}
					to={{ x: 0, opacity: 1 }}
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
		</header>
	);
};
