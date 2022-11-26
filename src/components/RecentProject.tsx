import Image from 'next/image';
import { Expo } from 'gsap';
import { Tween, ScrollTrigger } from 'react-gsap';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

import styles from 'styles/Home.module.css';
import { ArrowRight } from 'components/ArrowRight';
import { nanoid } from 'nanoid';

type ProjectProps = {
	name: string;
	description: string;
	imageUrl: string;
	website: string;
};

export const RecentProject = ({
	name,
	description,
	imageUrl,
	website,
}: ProjectProps) => {
	const nameByWord = name.split('');

	return (
		<div className="h-full">
			{/* <hr className="w-full h-[1] mb-16" /> */}
			<div className="w-full h-full flex justify-between space-x-16">
				<div className=" w-1/3 flex flex-col justify-center space-y-12">
					<h4 className="text-5xl font-semibold flex overflow-hidden">
						<ScrollTrigger start="-100% bottom">
							<Tween
								from={{ y: '100%' }}
								to={{ y: '0%' }}
								duration={1.6}
								stagger={0.1}
								ease={Expo.easeInOut}>
								{nameByWord.map((letter: string) => (
									<span key={nanoid(5)} className="block">
										{letter}
									</span>
								))}
							</Tween>
						</ScrollTrigger>
					</h4>
					<div className="w-10">
						<ScrollTrigger>
							<Tween
								from={{ width: '0%' }}
								to={{ width: '100%' }}
								delay={0.4}
								duration={1.6}
								ease={Expo.easeInOut}>
								<hr className={styles.recent_project_line} />
							</Tween>
						</ScrollTrigger>
					</div>
					<p>
						<ScrollTrigger start="-100% bottom" end="top bottom">
							<Tween
								from={{ opacity: 0 }}
								to={{ opacity: 1 }}
								delay={0.8}
								duration={1.8}
								ease={Expo.easeInOut}>
								<span className="text-2xl font-['telegraf'] block">
									{description}
								</span>
							</Tween>
						</ScrollTrigger>
					</p>
				</div>
				<div className="bg-violet-900 w-3/5 h-[50vh] relative">
					<div className="w-full h-full relative">
						<Image
							className="object-cover object-center"
							src={imageUrl}
							fill
							sizes="60%"
							alt=""
						/>
					</div>
					<a
						className={styles.recent_project_link}
						href={`https://${website}`}
						target="_blank"
						rel="noreferrer">
						<ArrowRight className={styles.recent_project_arrow} />
					</a>
				</div>
			</div>
			{/* <div className="w-full  flex h-[110vh] mt-96">
				<div className="w-1/3 h-[100vh] relative">
					<Image
						className="object-cover object-left-top"
						src="https://images.unsplash.com/photo-1635776064096-4e12cce9ead4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
						fill
						sizes="33%"
						alt=""
					/>
				</div>
				<div className="w-1/3 h-1/3 relative place-self-end mx-auto">
					<Image
						className="object-cover object-right-bottom"
						src="https://images.unsplash.com/photo-1635776064096-4e12cce9ead4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
						fill
						sizes="33%"
						alt=""
					/>
				</div>
			</div> */}
			{/* <LocomotiveScrollProvider> */}
		</div>
	);
};
