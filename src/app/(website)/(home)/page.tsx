'use client';

import { Tween } from 'react-gsap';
import { Expo } from 'gsap';

import { HeaderHome } from './Header';
import { AboutSection } from './AboutSection';
import { ProjectsSection } from './ProjectsSection';
import styles from './Home.module.css';

const HomePage = () => (
	<Tween to={{ y: 0, opacity: 1 }} duration={0.8} ease={Expo.easeInOut}>
		<div className="translate-y-4 opacity-0">
			<HeaderHome />
			<main className={styles.main}>
				<AboutSection />
				<ProjectsSection />
			</main>
		</div>
	</Tween>
);
export default HomePage;
