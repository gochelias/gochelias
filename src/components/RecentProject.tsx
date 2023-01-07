import Image from 'next/image';
import { Expo } from 'gsap';
import { Tween, ScrollTrigger } from 'react-gsap';
import { ArrowUpRight } from 'react-feather';

import { Divider } from './Divider';

type ProjectProps = {
	name: string;
	description: string;
	image: string;
	url: string;
	repo: string;
	reverse?: boolean;
};

export const RecentProject = ({
	name,
	description,
	image: imageUrl,
	url,
	repo,
	reverse,
}: ProjectProps) => {
	const isReverse = reverse ? 'flex-row-reverse' : '';
	return (
		<div>
			<Divider className="mb-16" />
			<div
				className={`flex h-full w-full justify-between gap-x-16  ${isReverse}`}>
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
									<span className="block capitalize">
										{name}
									</span>
								</Tween>
							</ScrollTrigger>
						</h4>
						<p className="font-[telegraf] text-xl">
							Design / Development
						</p>
					</div>
					<div className="flex flex-col space-y-16">
						<p className="indent-40">
							<ScrollTrigger
								start="-100% bottom"
								end="top bottom">
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
						<div className="flex space-x-16 text-lg font-medium uppercase">
							<a
								className="group flex items-center space-x-3"
								href={url}>
								<span className="transition-colors duration-100 group-hover:text-[#8f8f93]">
									See More
								</span>
								<ArrowUpRight strokeWidth={1.5} />
							</a>
							<a
								className="group ml-auto flex items-center space-x-3"
								href={repo}>
								<span className="transition-colors duration-100 group-hover:text-[#8f8f93]">
									Source Code
								</span>
								<ArrowUpRight strokeWidth={1.5} />
							</a>
						</div>
					</div>
				</div>
				<div className="h-[50vh] w-3/5 bg-[#111]">
					<div className="relative h-full w-full">
						<Image
							className="object-cover object-center"
							src={imageUrl}
							fill
							sizes="60%"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
