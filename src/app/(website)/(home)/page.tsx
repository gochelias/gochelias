'use client';

import Image from 'next/image';
import { Tween } from 'react-gsap';
import { Minus, Plus } from 'react-feather';

import styles from 'styles/Home.module.css';
import { ArrowRight } from 'components/ArrowRight';
import { RecentProject } from 'components/RecentProject';
import { Divider } from 'components/Divider';
import { Disclosure, Transition } from '@headlessui/react';

const HomePage = () => (
	/* const containerRef = useRef(null); */
	<>
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
			</header>
			<main className={styles.main}>
				<section className="flex min-h-screen w-full select-none flex-col space-y-16 border-white">
					<Divider />
					<div className="flex w-full justify-between">
						<h4 className="w-1/3 text-lg uppercase">
							About me /<br /> Services
						</h4>
						<div className="w-3/5">
							<p className="indent-64 text-4xl uppercase">
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Vel ab commodi repellendus
								doloribus non necessitatibus delectus nulla
								tenetur.
							</p>
							<p className="mt-16 w-2/3 font-['telegraf'] text-2xl">
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Vel ab commodi repellendus
								doloribus non necessitatibus delectus nulla
								tenetur, laudantium inventore qui consectetur.
								<br /> <br />
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Laboriosam expedita distinctio
								cupiditate optio ratione beatae nobis commodi ad
								fugiat vel.
							</p>
							<Disclosure>
								{({ open }) => (
									<>
										<div className="">
											<Disclosure.Button className="mt-16 flex h-40 w-full items-center justify-between px-16 text-4xl uppercase leading-none">
												<span>
													Frontend Development
												</span>
												{open ? (
													<Minus
														size={40}
														strokeWidth={1.5}
													/>
												) : (
													<Plus
														size={40}
														strokeWidth={1.5}
													/>
												)}
											</Disclosure.Button>
										</div>
										<Transition
											enter="transition duration-200 ease-out"
											enterFrom="transform opacity-0"
											enterTo="transform opacity-100"
											leave="transition duration-75 ease-out"
											leaveFrom="transform opacity-100"
											leaveTo="transform opacity-0">
											<Disclosure.Panel className="mx-16 pb-16">
												<p className="flex w-2/3 items-center font-body text-2xl text-gray3light">
													Lorem ipsum dolor sit amet,
													consectetur adipisicing
													elit. Ab, ratione quod
													recusandae ex nobis
													repudiandae aliquam in
													cumque sequi assumenda?
												</p>
											</Disclosure.Panel>
										</Transition>
									</>
								)}
							</Disclosure>
							<Divider className="border-gray4dark" />
							<Disclosure>
								{({ open }) => (
									<>
										<div className="">
											<Disclosure.Button className="flex h-40 w-full items-center justify-between px-16 text-4xl uppercase leading-none">
												<span>Backend Development</span>
												{open ? (
													<Minus
														size={40}
														strokeWidth={1.5}
													/>
												) : (
													<Plus
														size={40}
														strokeWidth={1.5}
													/>
												)}
											</Disclosure.Button>
										</div>
										<Transition
											enter="transition duration-200 ease-out"
											enterFrom="transform opacity-0"
											enterTo="transform opacity-100"
											leave="transition duration-75 ease-out"
											leaveFrom="transform opacity-100"
											leaveTo="transform opacity-0">
											<Disclosure.Panel className="mx-16 pb-16">
												<p className="flex w-2/3 items-center font-body text-2xl text-gray3light">
													Lorem ipsum dolor sit amet,
													consectetur adipisicing
													elit. Ab, ratione quod
													recusandae ex nobis
													repudiandae aliquam in
													cumque sequi assumenda?
												</p>
											</Disclosure.Panel>
										</Transition>
									</>
								)}
							</Disclosure>
							<Divider className="border-gray4dark" />
							<Disclosure>
								{({ open }) => (
									<>
										<div className="">
											<Disclosure.Button className="flex h-40 w-full items-center justify-between px-16 text-4xl uppercase leading-none">
												<span>Apps Development</span>
												{open ? (
													<Minus
														size={40}
														strokeWidth={1.5}
													/>
												) : (
													<Plus
														size={40}
														strokeWidth={1.5}
													/>
												)}
											</Disclosure.Button>
										</div>
										<Transition
											enter="transition duration-200 ease-out"
											enterFrom="transform opacity-0"
											enterTo="transform opacity-100"
											leave="transition duration-75 ease-out"
											leaveFrom="transform opacity-100"
											leaveTo="transform opacity-0">
											<Disclosure.Panel className="mx-16 pb-16">
												<p className="flex w-2/3 items-center font-body text-2xl text-gray3light">
													Lorem ipsum dolor sit amet,
													consectetur adipisicing
													elit. Ab, ratione quod
													recusandae ex nobis
													repudiandae aliquam in
													cumque sequi assumenda?
												</p>
											</Disclosure.Panel>
										</Transition>
									</>
								)}
							</Disclosure>
							<Divider className="border-gray4dark" />
						</div>
					</div>
				</section>
				<section className={styles.projects_section}>
					<div className={styles.projects_container}>
						<RecentProject
							name="tasklab"
							description="Lorem ipsum dolor, sit amet consectetur
									adipisicing elit. Vel ab commodi repellendus
									doloribus non necessitatibus delectus nulla
									tenetur."
							url=""
							repo=""
							image="https://images.unsplash.com/photo-1604079628040-94301bb21b91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
						/>
						<RecentProject
							name="watchmo"
							description="Lorem ipsum dolor, sit amet consectetur
									adipisicing elit. Vel ab commodi repellendus
									doloribus non necessitatibus delectus nulla
									tenetur."
							url=""
							repo=""
							image="https://images.unsplash.com/photo-1635776062360-af423602aff3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
							reverse
						/>
					</div>
				</section>
			</main>
		</div>
		{/* </LocomotiveScrollProvider> */}
	</>
);
export default HomePage;
