'use client';

import { Tween } from 'react-gsap';
import { Expo } from 'gsap';

import { Footer } from '@/components/Footer';
import { HeaderHome } from './Header';
import { AboutSection } from './AboutSection';
import { ProjectsSection } from './ProjectsSection';
import styles from './Home.module.css';

const HomePage = () => (
	/* const containerRef = useRef(null); */
	<>
		{/* <LocomotiveScrollProvider
						options={{ smooth: true, getSpeed: true }}> */}
		<Tween to={{ y: 0, opacity: 1 }} duration={0.8} ease={Expo.easeInOut}>
			<div className="translate-y-4 opacity-0">
				<HeaderHome />
				<main className={styles.main}>
					<AboutSection />
					<ProjectsSection />
				</main>
				<Footer />
			</div>
		</Tween>
		{/* </LocomotiveScrollProvider> */}
	</>
);
export default HomePage;
