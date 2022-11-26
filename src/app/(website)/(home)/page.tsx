'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollTrigger, Tween } from 'react-gsap';
import { nanoid } from 'nanoid';

import styles from 'styles/Home.module.css';
import { ArrowRight } from 'components/ArrowRight';
import { RecentProject } from 'components/RecentProject';
import { Nav } from 'components/Nav';
import { Footer } from 'components/Footer';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import AddIcon from 'icons/AddIcon';

const HomePage = () => {
	const containerRef = useRef(null);

	const text =
		'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat nesciunt fugiat, placeat tenetur ducimus aperiam suscipit illum sit explicabo.';
	const textByWord = text.split(' ');
	// const [copied, setCopied] = useState(false);

	/* useEffect(() => {
		let scroll: any;
		import('locomotive-scroll').then(locomotiveModule => {
			// eslint-disable-next-line new-cap
			scroll = new locomotiveModule.default({
				el: document.querySelector(
					'[data-scroll-container]',
				) as HTMLElement,
				smooth: true,
			});
		});

		// `useEffect`'s cleanup phase
		return () => {
			if (scroll) scroll.destroy();
		};
	}); */

	return (
		<>
			<Nav pageTitle="Home" />
			{/* <LocomotiveScrollProvider
				options={{ smooth: true, getSpeed: true }}> */}
			<div>
				<header className={styles.hero}>
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
								<span className="block">
									Software Developer
								</span>
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
									<span
										className={styles.hero_available_text}>
										Available for work
									</span>
								</div>
							</div>
						</Tween>
					</div>
				</header>
				<main className={styles.main}>
					{/* <section className={styles.about_section}>
						<div className={styles.about_content}>
							<p className={styles.about_main}>
								<span className={styles.about_margin} />
								<ScrollTrigger
									start="center bottom"
									end="bottom bottom">
									{textByWord.map(
										(word: string, index: number) => (
											<span
												className={styles.about_word}
												key={nanoid()}>
												<Tween
													from={{ y: '100%' }}
													to={{ y: '0%' }}
													duration={2.5}
													delay={`0.1${index}`}
													ease="Expo.easeInOut">
													<span className="block">
														{word}
													</span>
												</Tween>
											</span>
										),
									)}
								</ScrollTrigger>
							</p>
							<div className={styles.about_paragraph}>
								<ScrollTrigger
									start="center bottom"
									end="bottom bottom">
									<Tween
										from={{ opacity: 0 }}
										to={{ opacity: 1 }}
										duration={2.5}
										delay={0.5}
										stagger={0.5}
										ease="Expo.easeInOut">
										<p
											className={
												styles.about_paragraph_one
											}>
											Lorem ipsum dolor sit amet
											consectetur adipisicing elit. Minus
											ullam veritatis rerum, recusandae,
											voluptas quisquam, deserunt
											aspernatur error odit repellendus
											dolorum ea ex inventore. Unde alias
											ducimus voluptatem dignissimos
											dicta!
										</p>
										<p
											className={
												styles.about_paragraph_two
											}>
											Lorem ipsum dolor sit amet
											consectetur, adipisicing elit.
											Quidem sint assumenda quod tenetur,
											officia reprehenderit.
										</p>
									</Tween>
									<Tween
										from={{ opacity: 0 }}
										duration={2.5}
										delay={0.7}
										ease="Expo.easeInOut">
										<div>
											<Link
												href="/about"
												className={
													styles.about_me_link
												}>
												<span className="flex items-center">
													More about{' '}
													<hr className="mx-4 h-[1px] w-20 text-white" />{' '}
													me and services
												</span>
											</Link>
										</div>
									</Tween>
								</ScrollTrigger>
							</div>
						</div>
					</section> */}
					<section className="w-full h-screen space-y-16 flex flex-col border-white">
						<hr className="h-[1] w-full bg-white" />
						<div className="w-full flex justify-between">
							<h4 className="text-xl w-1/3 font-semibold uppercase">
								About
							</h4>
							<div className="w-3/5">
								<p className="font-['telegraf'] text-4xl uppercase mb-12">
									Lorem ipsum dolor, sit amet consectetur
									adipisicing elit. Vel ab commodi repellendus
									doloribus non necessitatibus delectus nulla
									tenetur.
								</p>
								<p className="text-2xl w-1/2 font-['telegraf']">
									Lorem ipsum dolor, sit amet consectetur
									adipisicing elit. Vel ab commodi repellendus
									doloribus non necessitatibus delectus nulla
									tenetur, laudantium inventore qui
									consectetur.
								</p>
								<div className="flex w-full border-b mt-16 h-32 items-center border-white">
									<h4 className="text-4xl font-['telegraf] leading-none">
										Web development
									</h4>
									<p className="ml-auto">
										<AddIcon className="w-8" />
									</p>
								</div>
								<div className="flex w-full border-b h-32 items-center border-white">
									<h4 className="text-4xl font-['telegraf] leading-none">
										Backend development
									</h4>
									<p className="ml-auto">
										<AddIcon className="w-8" />
									</p>
								</div>
								<div className="flex w-full border-b h-32 items-center border-white">
									<h4 className="text-4xl font-['telegraf] leading-none">
										Apps development
									</h4>
									<p className="ml-auto">
										<AddIcon className="w-8" />
									</p>
								</div>
							</div>
						</div>
					</section>
					<section className={styles.projects_section}>
						<div className={styles.projects_container}>
							{/* <hr className="w-full h-[1] mb-16" /> */}
							<RecentProject
								name="tasklab"
								description="Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Vel ab commodi repellendus
								doloribus non necessitatibus delectus nulla
								tenetur."
								website=""
								imageUrl="https://images.unsplash.com/photo-1604079628040-94301bb21b91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
							/>
							<RecentProject
								name="watchmo"
								description="Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Vel ab commodi repellendus
								doloribus non necessitatibus delectus nulla
								tenetur."
								website=""
								imageUrl="https://images.unsplash.com/photo-1635776062360-af423602aff3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
							/>
						</div>
					</section>
				</main>
				<Footer />
			</div>
			{/* </LocomotiveScrollProvider> */}
		</>
	);
};

export default HomePage;
