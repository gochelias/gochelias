import Image from 'next/image';

import { ArrowUpRight } from 'components/ArrowRight';
import styles from './Home.module.css';

/* type ProjectProps = {
	description: string;
	image: string;
	url: string;
	repo: string;
	reverse?: boolean;
}; */

/* const RecentProject = ({
	description,
	image,
	url,
	repo,
	reverse,
}: ProjectProps) => {
	const isReverse = reverse ? 'flex-row-reverse' : '';
	return <div />;
}; */

export const ProjectsSection = () => (
	<section className="my-16 w-full select-none">
		<div className="flex flex-col 2xl:flex-row">
			<h2 className={styles.projects}>
				<span>Passion</span>
				<span className="ml-20 2xl:ml-96">for</span>
				<span className="ml-16 2xl:ml-72">Creating</span>
			</h2>
			<div className="m-auto flex w-max flex-col items-center">
				<span className="hidden text-[12vw] 2xl:block">*</span>
				<p className={styles.projectSectionDescription}>
					Projects <br /> I am currently <br /> working on
				</p>
			</div>
		</div>
		<div className="flex h-screen flex-col justify-evenly">
			<div className={styles.recentProjectLeft}>
				<div className={styles.recentProjectImageContainer}>
					<div className={styles.recentProjectImage}>
						<Image
							className="object-center"
							src="https://images.unsplash.com/photo-1635776062360-af423602aff3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
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
							<a className={styles.recentProjectLabel} href="#">
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
					<p className={styles.recentProjectDescription}>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit.
					</p>
					<div>
						<a href="#">
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
							className="object-center"
							src="https://images.unsplash.com/photo-1635776062360-af423602aff3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
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
							<a className={styles.recentProjectLabel} href="#">
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
					<p className={styles.recentProjectDescription}>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit.
					</p>
					<div>
						<a href="#">
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
