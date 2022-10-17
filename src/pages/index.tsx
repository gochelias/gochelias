import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ScrollTrigger, Tween } from 'react-gsap';
import { nanoid } from 'nanoid';
import CopyToClipboard from 'react-copy-to-clipboard';

import styles from 'styles/Home.module.css';
import { Layout } from 'components/Layout';
import { ArrowRight } from 'components/ArrowRight';
import { RecentProject } from 'components/RecentProject';

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
			</header>
			<main className={styles.main}>
				<section className={styles.about_section}>
					<div className={styles.about_separator}>
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
									duration={2.5}
									delay={0.5}
									stagger={0.5}
									ease="Expo.easeInOut">
									<p className={styles.about_paragraph_one}>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Minus ullam veritatis
										rerum, recusandae, voluptas quisquam,
										deserunt aspernatur error odit
										repellendus dolorum ea ex inventore.
										Unde alias ducimus voluptatem
										dignissimos dicta!
									</p>
									<p className={styles.about_paragraph_two}>
										Lorem ipsum dolor sit amet consectetur,
										adipisicing elit. Quidem sint assumenda
										quod tenetur, officia reprehenderit.
									</p>
								</Tween>
								<Tween
									from={{ opacity: 0 }}
									duration={2.5}
									delay={0.7}
									ease="Expo.easeInOut">
									<div>
										<Link href="/about">
											<a className={styles.about_me_link}>
												<span>
													More about me and services
												</span>
												<ArrowRight
													className={
														styles.about_arrow
													}
												/>
											</a>
										</Link>
									</div>
								</Tween>
							</ScrollTrigger>
						</div>
					</div>
				</section>
				<section className={styles.projects_section}>
					<div className={styles.projects_separator}>
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
					<div className={styles.projects_container}>
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
				<footer className={styles.footer}>
					<div className={styles.footer_main}>
						<div className={styles.footer_separator}>
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
						<div className={styles.footer_content}>
							<div className={styles.footer_copy_msg}>
								{copied ? 'Copied' : 'Click to copy'}
							</div>
							<div className={styles.footer_email_container}>
								<ScrollTrigger start="top bottom">
									<Tween
										from={{ opacity: 0 }}
										duration={2.5}
										ease="Expo.easeInOut">
										<div>
											<CopyToClipboard
												text="hello@gochelias.com"
												onCopy={() => setCopied(true)}>
												<button
													type="button"
													className={
														styles.footer_email
													}>
													<span>hello@</span>
													<span>gochelias</span>
													<span>.com</span>
												</button>
											</CopyToClipboard>
										</div>
									</Tween>
								</ScrollTrigger>
							</div>
						</div>
					</div>
					<div className={styles.footer_info}>
						<div className={styles.footer_copyright}>
							© 2022 Elias Goche
						</div>
						<div className={styles.footer_social}>
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
										className={styles.footer_social_link}
										rel="noreferrer">
										GitHub
									</a>
									<a
										target="_blank"
										href="https://www.linkedin.com/in/gochelias"
										title="@gochelias"
										className={styles.footer_social_link}
										rel="noreferrer">
										LinkedIn
									</a>
									<a
										target="_blank"
										href="https://twitter.com/gochelias"
										title="@gochelias"
										className={styles.footer_social_link}
										rel="noreferrer">
										Twitter
									</a>
								</Tween>
							</ScrollTrigger>
						</div>
						<div className={styles.footer_name}>
							Elias Goche Software Developer
						</div>
					</div>
				</footer>
			</main>
		</Layout>
	);
};

export default Home;
