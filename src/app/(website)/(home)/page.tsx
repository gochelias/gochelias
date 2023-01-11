'use client';

import styles from './Home.module.css';
import { HeaderHome } from './Header';
import { AboutSection } from './AboutSection';
import { ProjectsSection } from './ProjectsSection';

const HomePage = () => (
	/* const containerRef = useRef(null); */
	<>
		{/* <LocomotiveScrollProvider
					options={{ smooth: true, getSpeed: true }}> */}
		<div>
			<HeaderHome />
			<main className={styles.main}>
				<AboutSection />
				<ProjectsSection />
			</main>
		</div>
		{/* </LocomotiveScrollProvider> */}
	</>
);
export default HomePage;
