import Image from 'next/image';

import { ArrowUpRight } from 'components/ArrowRight';
import styles from './Home.module.css';

export const AboutSection = () => {
	const image =
		'https://images.unsplash.com/photo-1626624158360-8cb69be9b5e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80';

	return (
		<section className={styles.about} data-testid="about-section">
			<div className={styles.aboutImage}>
				<Image
					className="object-cover object-center"
					fill
					src={image}
					alt=""
				/>
			</div>
			<div className="ml-auto flex w-full flex-col">
				<div className="mt-2 flex flex-col items-end space-x-4 2xl:mt-4">
					<a className={styles.aboutReadMore} href="#">
						Read More
					</a>
					<ArrowUpRight
						className="h-2 w-2 xl:h-2.5 xl:w-2.5 2xl:h-3 2xl:w-3"
						strokeWidth={4}
					/>
				</div>
				<p className={styles.aboutDescrip} role="paragraph">
					Lorem ipsum dolor, sit amet consec- tetur adipisicing elit.
					Molestiae optio quis sunt, dolores porro inventore ex
					dignissimos tenetur, aspernatur, nemo vel explicabo.
				</p>
			</div>
		</section>
	);
};
