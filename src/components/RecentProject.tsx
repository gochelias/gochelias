import Image from 'next/image';
import { ScrollTrigger, Tween } from 'react-gsap';
import { nanoid } from 'nanoid';

import { ArrowRight } from './ArrowRight';

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
	const descriptionByWord = description.split(' ');

	return (
		<div className="flex h-screen">
			<div className="flex w-full flex-auto space-x-20 py-16">
				<div className="flex w-1/2 flex-auto flex-col items-start justify-between">
					<div className="flex w-full">
						<h2 className="flex w-full flex-wrap text-9xl font-medium uppercase">
							<span className="flex w-24">
								<ScrollTrigger>
									<Tween
										from={{ width: 0 }}
										duration={1.6}
										ease="Expo.easeInOut">
										<hr className="mt-auto mb-6 block h-0.5 w-24 bg-white" />
									</Tween>
								</ScrollTrigger>
							</span>
							<span className="mr-6 ml-14 mt-auto mb-3 overflow-hidden text-2xl text-[#eaeaea]">
								<ScrollTrigger
									start="-100% bottom"
									end="top bottom">
									<Tween
										from={{ y: '100%' }}
										duration={1.8}
										ease="Expo.easeInOut">
										<span className="block">{name}</span>
									</Tween>
								</ScrollTrigger>
							</span>
							<ScrollTrigger
								start="-100% bottom"
								end="top bottom">
								{descriptionByWord.map(
									(word: string, index: number) => (
										<span
											className="mr-6 overflow-hidden"
											key={nanoid()}>
											<Tween
												from={{ y: '100%' }}
												delay={`0.${index}`}
												duration={1.8}
												ease="Expo.easeInOut">
												<span className="block">
													{word}
												</span>
											</Tween>
										</span>
									),
								)}
							</ScrollTrigger>
						</h2>
					</div>
					<ScrollTrigger start="top bottom" end="bottom bottom">
						<Tween
							from={{ opacity: 0 }}
							duration={2}
							ease="Expo.easeInOut">
							<a
								href={`https://${website}`}
								target="_blank"
								className="ml-auto grid h-48 w-48 place-content-center border-2 border-white transition-colors duration-200 ease-in-out hover:bg-white hover:text-black"
								rel="noreferrer">
								<ArrowRight className="-rotate-45" />
							</a>
						</Tween>
					</ScrollTrigger>
				</div>
				<ScrollTrigger start="top bottom">
					<Tween
						from={{ y: 100, opacity: 0 }}
						duration={2}
						ease="Expo.easeInOut"
						markers>
						<div className="relative h-full w-1/2 overflow-hidden">
							<Image
								className="object-cover"
								src={imageUrl}
								layout="fill"
							/>
						</div>
					</Tween>
				</ScrollTrigger>
			</div>
		</div>
	);
};
