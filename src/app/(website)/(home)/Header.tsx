import { ArrowUpRight } from 'components/ArrowRight';
import { Divider } from 'components/Divider';
/* import styles from './Home.module.css'; */

export const HeaderHome = () => {
	const a = '';
	return (
		<header className="flex h-max w-full flex-col pt-4">
			<div id="top">
				<Divider />
				<div className="flex items-center justify-between py-4 pr-4 text-base uppercase leading-none">
					<h6>Frontend Development</h6>
					<h6>Backend Development</h6>
					<h6>Apps Development</h6>
					<h6>Contact</h6>
				</div>
				<Divider />
				<div className="flex h-40 items-center justify-between">
					<h1 className="text-6xl uppercase">
						Elias <br /> Goche
					</h1>
					<button
						className="text mr-4 h-40 text-6xl uppercase"
						type="button">
						Me
						<br />
						nu
					</button>
				</div>
				<Divider />
			</div>
			<div className="mt-8 ml-auto w-2/3">
				<div className="w-max">
					<h4 className="mb-6 text-4xl uppercase">
						Software <br /> Developer
					</h4>
					<div className="flex items-end justify-between">
						<h6 className="text-lg uppercase leading-tight">
							Based in <br /> México
						</h6>
						<ArrowUpRight strokeWidth={3} className="m-1" />
					</div>
				</div>
				<p className="mt-16 text-[8vw] uppercase leading-none">
					Making <br /> the code an <br /> experience
				</p>
			</div>
		</header>
	);
};

/* <header className={styles.hero}>
	<div
		className={styles.hero_title}
		data-scroll
		data-scroll-speed="2">
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
</header> */
