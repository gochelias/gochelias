import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollTrigger, Tween } from 'react-gsap';
import { nanoid } from 'nanoid';
import CopyToClipboard from 'react-copy-to-clipboard';

import styles from 'styles/Home.module.css';
import { Layout } from 'components/Layout';
import { ScrollDown } from 'components/ScrollDown';
import { ArrowRight } from 'components/ArrowRight';
import { RecentProject } from 'components/RecentProject';
import { useState } from 'react';

const Home: NextPage = () => {
	const text =
		'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat nesciunt fugiat, placeat tenetur ducimus aperiam suscipit illum sit explicabo.';
	const textByWord = text.split(' ');

	const [copied, setCopied] = useState(false);

	return (
		<Layout>
			<header className={styles.hero}>
				<div className={styles.hero_title}>
					<h2 className={styles.hero_name}>
						<Tween
							from={{ y: 200, opacity: 0 }}
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
						duration={1.8}
						delay={4}
						ease="Expo.easeInOut">
						<div className={styles.hero_center_left}>
							<div className={styles.hero_to_about}>
								<ArrowRight className="w-4 md:w-6 2xl:w-10" />
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
										className={styles.hero_image}
										src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
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
				<ScrollDown />
			</header>
			<main className={styles.main}>
				<section className="flex h-screen w-full select-none flex-col items-end py-16">
					<div className="flex w-full justify-around overflow-hidden text-2xl font-semibold uppercase leading-none">
						<ScrollTrigger start="top bottom">
							<Tween
								from={{ y: '105%' }}
								duration={1.6}
								stagger={0.2}
								ease="Expo.easeInOut">
								<h4>About me</h4>
								<h4>Base in México</h4>
							</Tween>
						</ScrollTrigger>
					</div>
					<div className="my-auto flex w-2/3 flex-col justify-center space-y-20">
						<p className="flex flex-wrap text-6xl font-medium uppercase">
							<span className="ml-80" />
							<ScrollTrigger
								start="center bottom"
								end="bottom bottom">
								{textByWord.map(
									(word: string, index: number) => (
										<span
											className="mr-3 overflow-hidden"
											key={nanoid()}>
											<Tween
												from={{ y: '100%' }}
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
						<div className="flex items-end">
							<div className="w-1/2">
								<ScrollTrigger
									start="center bottom"
									end="bottom bottom">
									<Tween
										from={{ opacity: 0 }}
										duration={2.5}
										delay={0.5}
										stagger={0.5}
										ease="Expo.easeInOut">
										<p className="font-['telegraf'] text-2xl text-[#eaeaea]">
											Lorem ipsum dolor sit amet
											consectetur adipisicing elit. Minus
											ullam veritatis rerum, recusandae,
											voluptas quisquam, deserunt
											aspernatur error odit repellendus
											dolorum ea ex inventore. Unde alias
											ducimus voluptatem dignissimos
											dicta!
										</p>
										<p className="mt-5 font-['telegraf'] text-2xl text-[#eaeaea]">
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
											<Link href="/about">
												<a className="relative ml-auto mt-20 flex w-max items-center space-x-6 text-2xl font-medium before:absolute before:top-10 before:h-0.5 before:w-0 before:bg-white before:transition-all before:duration-200 before:ease-in-out before:content-[''] hover:before:w-full">
													<span>
														More about me and
														services
													</span>
													<ArrowRight className="w-5" />
												</a>
											</Link>
										</div>
									</Tween>
								</ScrollTrigger>
							</div>
						</div>
					</div>
				</section>
				<section className="flex h-full w-full flex-col">
					<div className="my-24 flex w-full select-none justify-around overflow-hidden text-left text-2xl font-semibold uppercase leading-none">
						<ScrollTrigger start="top bottom">
							<Tween
								from={{ y: '100%' }}
								duration={1.6}
								stagger={0.2}
								ease="Expo.easeInOut">
								<h4>Recent Projects</h4>
								<h4>Design / Development</h4>
							</Tween>
						</ScrollTrigger>
					</div>
					<div className="h-full w-full flex-auto">
						<RecentProject
							name="tasklab"
							description="Lorem ipsum dolor sit consectetur adipisicing."
							website=""
							imageUrl="https://images.unsplash.com/photo-1604079628040-94301bb21b91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
						/>
						<RecentProject
							name="watchmo"
							description="Lorem ipsum dolor sit consectetur adipisicing."
							website=""
							imageUrl="https://images.unsplash.com/photo-1635776062360-af423602aff3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
						/>
					</div>
				</section>
				<section className="flex h-screen w-full flex-col">
					<div className="flex w-full flex-auto flex-col justify-center">
						<div className="mt-16 flex select-none justify-around overflow-hidden text-2xl font-semibold uppercase leading-none">
							<ScrollTrigger start="top bottom">
								<Tween
									from={{ y: '100%' }}
									duration={1.6}
									stagger={0.2}
									ease="Expo.easeInOut">
									<h2>I like to work on cool stuff</h2>
									<h2>Let’s work together</h2>
								</Tween>
							</ScrollTrigger>
						</div>
						<div className="group relative m-auto flex select-none flex-col items-center justify-center">
							<div className="absolute -top-12 w-max border border-white px-6 py-3 font-semibold text-white opacity-0 transition-all duration-300 ease-in-out group-hover:-top-20 group-hover:opacity-100">
								{copied ? 'Copied' : 'Click to copy'}
							</div>
							<div className="text-test overflow-hidden">
								<ScrollTrigger start="top bottom">
									<Tween
										from={{ y: '100%' }}
										duration={2.5}
										ease="Expo.easeInOut">
										<div>
											<CopyToClipboard
												text="hello@gochelias.com"
												onCopy={() => setCopied(true)}>
												<button
													type="button"
													className="text-9xl font-medium uppercase selection:bg-white selection:text-black">
													hello@gochelias.com
												</button>
											</CopyToClipboard>
										</div>
									</Tween>
								</ScrollTrigger>
							</div>
						</div>
					</div>
					<footer className="flex items-end justify-center space-x-12 py-16 text-lg font-medium">
						<ScrollTrigger start="top bottom">
							<Tween
								from={{ opacity: 0 }}
								duration={1.6}
								stagger={0.2}
								ease="Expo.easeInOut">
								<a
									target="_blank"
									href="https://github.com/gochelias"
									title="@gochelias"
									className="hover:underline"
									rel="noreferrer">
									GitHub
								</a>
								<a
									target="_blank"
									href="https://www.linkedin.com/in/gochelias"
									title="@gochelias"
									className="hover:underline"
									rel="noreferrer">
									LinkedIn
								</a>
								<a
									target="_blank"
									href="https://twitter.com/gochelias"
									title="@gochelias"
									className="hover:underline"
									rel="noreferrer">
									Twitter
								</a>
							</Tween>
						</ScrollTrigger>
					</footer>
				</section>
			</main>
		</Layout>
	);
};

export default Home;
