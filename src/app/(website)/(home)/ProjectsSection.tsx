import Image from 'next/image';

import { ArrowUpRight } from '@/components/ArrowRight';
import styles from './Home.module.css';

export const ProjectsSection = () => (
	<section
		className="my-16 h-max w-full select-none sm:space-y-8 2xl:space-y-32"
		data-testid="projects-section">
		<div className="flex flex-col overflow-hidden sm:flex-row 2xl:flex-row">
			<h2 className={styles.projects}>
				<span>Passion</span>
				<span className="indent-20 md:indent-32 2xl:indent-96">
					for
				</span>
				<span className="md:indent-30 indent-16 2xl:indent-72">
					Creating
				</span>
			</h2>
			<div className="m-auto flex h-max w-max flex-col items-center">
				<span className="hidden text-[12vw] leading-none md:block 2xl:block">
					*
				</span>
				<p className={styles.projectSectionDescription}>
					Projects <br /> I am currently <br /> working on
				</p>
			</div>
		</div>
		<div className={styles.projectsContainer}>
			<div className={styles.recentProjectLeft}>
				<div className={styles.recentProjectImageContainer}>
					<div className={styles.recentProjectImage}>
						<Image
							className="object-cover object-center grayscale"
							src="https://images.unsplash.com/photo-1522517779552-6cf4c1f31ee3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
							fill
							sizes=""
							alt=""
						/>
					</div>
					<div className={styles.recentProjectLabels}>
						<h6 className={styles.recentProjectLabel}>Design</h6>
						<h6 className={styles.recentProjectLabel}>
							Development
						</h6>
						<div className={styles.recentProjetSourceCode}>
							<a
								className={styles.recentProjectLabel}
								href="https://github.com/gochelias/sonor"
								target="_blank"
								rel="noreferrer">
								Source Code
							</a>
							<ArrowUpRight
								className={styles.recentProjectArrowSourceCode}
								strokeWidth={4}
							/>
						</div>
					</div>
				</div>
				<div className={styles.recentProjectContentLeft}>
					<p
						className={styles.recentProjectDescription}
						role="paragraph">
						Listen to your favorite music anywhere.
					</p>
					<div>
						<a
							href="https://github.com/gochelias/sonor"
							target="_blank"
							rel="noreferrer">
							<ArrowUpRight
								className={styles.recentProjectArrowLink}
							/>
						</a>
					</div>
				</div>
			</div>
			<div className={styles.recentProjectRight}>
				<div className={styles.recentProjectImageContainer}>
					<div className={styles.recentProjectImage}>
						<Image
							className="object-cover object-center grayscale"
							src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
							fill
							sizes=""
							alt=""
						/>
					</div>
					<div className={styles.recentProjectLabels}>
						<h6 className={styles.recentProjectLabel}>Design</h6>
						<h6 className={styles.recentProjectLabel}>
							Development
						</h6>
						<div className={styles.recentProjetSourceCode}>
							<a
								className={styles.recentProjectLabel}
								href="https://github.com/gochelias/tasklab"
								target="_blank"
								rel="noreferrer">
								Source Code
							</a>
							<ArrowUpRight
								className={styles.recentProjectArrowSourceCode}
								strokeWidth={4}
							/>
						</div>
					</div>
				</div>
				<div className={styles.recentProjectContentRight}>
					<p
						className={styles.recentProjectDescription}
						role="paragraph">
						Manage your projects in the best way.
					</p>
					<div>
						<a
							href="https://github.com/gochelias/tasklab"
							target="_blank"
							rel="noreferrer">
							<ArrowUpRight
								className={styles.recentProjectArrowLink}
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
);
