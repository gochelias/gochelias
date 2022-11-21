import Image from 'next/image';
import { ScrollTrigger, Tween } from 'react-gsap';
import { nanoid } from 'nanoid';

import styles from 'styles/Home.module.css';
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
		<div className={styles.recent_project}>
			<div className={styles.recent_project_info_container}>
				<h2 className={styles.recent_project_content}>
					<span className={styles.recent_project_line_container}>
						<ScrollTrigger>
							<Tween
								from={{ width: 0 }}
								duration={1.6}
								ease="Expo.easeInOut">
								<hr className={styles.recent_project_line} />
							</Tween>
						</ScrollTrigger>
					</span>
					<span className={styles.recent_project_name}>
						<ScrollTrigger start="-100% bottom" end="top bottom">
							<Tween
								from={{ y: '100%' }}
								duration={1.8}
								ease="Expo.easeInOut">
								<span className="block">{name}</span>
							</Tween>
						</ScrollTrigger>
					</span>
					<ScrollTrigger start="-100% bottom" end="top bottom">
						{descriptionByWord.map(
							(word: string, index: number) => (
								<span
									className={
										styles.recent_project_description
									}
									key={nanoid()}>
									<Tween
										from={{ y: '100%' }}
										delay={`0.${index}`}
										duration={1.8}
										ease="Expo.easeInOut">
										<span className="block">{word}</span>
									</Tween>
								</span>
							),
						)}
					</ScrollTrigger>
				</h2>
				<ScrollTrigger start="top bottom" end="bottom bottom">
					<Tween
						from={{ opacity: 0 }}
						duration={2}
						ease="Expo.easeInOut">
						<a
							href={`https://${website}`}
							target="_blank"
							className={styles.recent_project_link}
							rel="noreferrer">
							<ArrowRight
								className={styles.recent_project_arrow}
							/>
						</a>
					</Tween>
				</ScrollTrigger>
			</div>
			<ScrollTrigger start="top bottom">
				<Tween
					from={{ y: 100, opacity: 0 }}
					duration={2}
					ease="Expo.easeInOut">
					<div className={styles.recent_project_image_container}>
						<Image
							className={styles.recent_project_image}
							src={imageUrl}
							fill
							sizes="50%"
							alt=""
						/>
					</div>
				</Tween>
			</ScrollTrigger>
		</div>
	);
};
