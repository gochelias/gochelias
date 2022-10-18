import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollTrigger, Tween } from 'react-gsap';
import { nanoid } from 'nanoid';
import CopyToClipboard from 'react-copy-to-clipboard';

import styles from 'styles/Home.module.css';
import { Layout } from 'components/Layout';
import { ArrowRight } from 'components/ArrowRight';
import { RecentProject } from 'components/RecentProject';

const Home: NextPage = () => {
	const apos = '\u2019';
	const text =
		'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat nesciunt fugiat, placeat tenetur ducimus aperiam suscipit illum sit explicabo.';
	const textByWord = text.split(' ');

	// const [copied, setCopied] = useState(false);

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
												<span className="flex items-center">
													More about{' '}
													<hr className="mx-4 h-[1px] w-20 text-white" />{' '}
													me and services
												</span>
											</a>
										</Link>
									</div>
								</Tween>
							</ScrollTrigger>
						</div>
					</div>
				</section>
				<section className={styles.projects_section}>
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
				<section className="relative flex h-screen w-full flex-col justify-center space-y-52 px-24">
					<h6 className="select-none text-lg font-semibold uppercase">
						Available for work
					</h6>
					<div className="text-9xl font-medium duration-75 hover:text-[#999999]">
						<h2 className="inline select-none">
							I like to work on cool stuff, let{apos}s work
							together.{' '}
						</h2>
						<CopyToClipboard text="hello@gochelias.com">
							<button
								type="button"
								className="text-[#FFEFCF] underline outline-none selection:bg-[#FFEFCF] selection:text-black active:bg-[#FFEFCF] active:text-black">
								hello@gochelias.com
							</button>
						</CopyToClipboard>
					</div>
					<footer className="flex w-full select-none justify-between">
						<div>
							<div className="group flex items-center space-x-3">
								<Link href="/portfolio">
									<a className="text-lg font-semibold uppercase">
										Portfolio
									</a>
								</Link>
								<div className="overflow-hidden">
									<ArrowRight className="h-max w-4 -translate-x-full transition-transform duration-100 group-hover:translate-x-0" />
								</div>
							</div>
							<ul className="mt-4 space-y-1 text-lg font-medium text-[#eaeaea]">
								<li className="hover:underline">
									<a
										target="_blank"
										href="https://github.com/gochelias"
										title="@gochelias"
										className=""
										rel="noreferrer">
										GitHub
									</a>
								</li>
								<li className="hover:underline">
									<a
										target="_blank"
										href="https://codepen.io/gochelias"
										title="@gochelias"
										className=""
										rel="noreferrer">
										Codepen
									</a>
								</li>
								<li className="hover:underline">
									<a
										target="_blank"
										href="https://dribbble.com/gochelias"
										title="@gochelias"
										className=""
										rel="noreferrer">
										Dribbble
									</a>
								</li>
							</ul>
						</div>
						<div>
							<div className="group flex items-center space-x-3">
								<Link href="/about">
									<a className="text-lg font-semibold uppercase">
										About
									</a>
								</Link>
								<div className="overflow-hidden">
									<ArrowRight className="h-max w-4 -translate-x-full transition-transform duration-100 group-hover:translate-x-0" />
								</div>
							</div>
							<ul className="mt-4 space-y-1 text-lg font-medium text-[#eaeaea]">
								<li className="hover:underline">
									<Link href="/me">
										<a>Me</a>
									</Link>
								</li>
								<li className="hover:underline">
									<Link href="/feed">
										<a>Feed</a>
									</Link>
								</li>
								<li className="hover:underline">
									<Link href="/stats">
										<a>Stats</a>
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<div className="group flex items-center space-x-3">
								<Link href="/about">
									<a className="text-lg font-semibold uppercase">
										Contact
									</a>
								</Link>
								<div className="overflow-hidden">
									<ArrowRight className="h-max w-4 -translate-x-full transition-transform duration-100 group-hover:translate-x-0" />
								</div>
							</div>
							<ul className="mt-4 space-y-1 text-lg font-medium text-[#eaeaea]">
								<li className="hover:underline">
									<a
										target="_blank"
										href="https://www.linkedin.com/in/gochelias"
										title="@gochelias"
										rel="noreferrer">
										LinkedIn
									</a>
								</li>
								<li className="hover:underline">
									<a
										target="_blank"
										href="https://twitter.com/gochelias"
										title="@gochelias"
										rel="noreferrer">
										Twitter
									</a>
								</li>
								<li className="hover:underline">
									<a
										target="_blank"
										href="https://discord.com/users/636351475307773963"
										title="gochelias#2076"
										rel="noreferrer">
										Discord
									</a>
								</li>
							</ul>
						</div>
						<div>
							<div className="group flex items-center space-x-3">
								<Link href="/blog">
									<a className="text-lg font-semibold uppercase">
										Blog
									</a>
								</Link>
								<div className="overflow-hidden">
									<ArrowRight className="h-max w-4 -translate-x-full transition-transform duration-100 group-hover:translate-x-0" />
								</div>
							</div>
							<ul className="mt-4 space-y-1 text-lg font-medium text-[#eaeaea]">
								<li>undefined</li>
								<li>undefined</li>
								<li>undefined</li>
							</ul>
						</div>
					</footer>
					<div className="absolute bottom-16 left-0">© 2022</div>
				</section>
			</main>
		</Layout>
	);
};

export default Home;
