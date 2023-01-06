import Image from 'next/image';
import { Expo } from 'gsap';
import { Tween, ScrollTrigger } from 'react-gsap';

import styles from 'styles/Home.module.css';
import { ArrowRight } from 'components/ArrowRight';

type ProjectProps = {
	name: string;
	description: string;
	imageUrl: string;
	website: string;
	reverse?: boolean;
};

export const RecentProject = ({
	name,
	description,
	imageUrl,
	website,
	reverse,
}: ProjectProps) => {
	const isReverse = reverse ? 'flex-row-reverse' : '';
	return (
		<div
			className={`flex h-full w-full justify-between gap-x-16 ${isReverse}`}>
			<div className=" flex w-1/3 flex-col justify-between">
				<div className="flex flex-col space-y-2">
					<h4 className="flex overflow-hidden text-5xl font-medium">
						<ScrollTrigger start="-100% bottom">
							<Tween
								from={{ y: '100%' }}
								to={{ y: '0%' }}
								duration={1.4}
								stagger={0.1}
								ease={Expo.easeInOut}>
								<span className="block">{name}</span>
							</Tween>
						</ScrollTrigger>
					</h4>
					<p className="font-[telegraf] text-xl">
						Design / Development
					</p>
				</div>
				<div className="flex flex-col space-y-12">
					<p className="indent-40">
						<ScrollTrigger start="-100% bottom" end="top bottom">
							<Tween
								from={{ opacity: 0 }}
								to={{ opacity: 1 }}
								delay={0.8}
								duration={1.8}
								ease={Expo.easeInOut}>
								<span className="block font-['telegraf'] text-2xl">
									{description}
								</span>
							</Tween>
						</ScrollTrigger>
					</p>
					<div className="flex space-x-10 text-lg font-medium uppercase">
						<a className="flex items-center space-x-2" href="#">
							<span>See More</span>
							<ArrowRight className="w-4 -rotate-45" />
						</a>
						<a className="flex items-center space-x-2" href="#">
							<span>Source Code</span>
							<ArrowRight className="w-4 -rotate-45" />
						</a>
					</div>
				</div>
			</div>
			<div className="relative h-[50vh] w-3/5 bg-violet-900">
				<div className="relative h-full w-full">
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
	);
};
