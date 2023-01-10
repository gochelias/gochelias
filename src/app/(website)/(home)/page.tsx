'use client';

import styles from './Home.module.css';
import { HeaderHome } from './Header';
import { AboutHome } from './About';
import { ProjectsHome } from './Projects';

const HomePage = () => (
	/* const containerRef = useRef(null); */
	<>
		{/* <LocomotiveScrollProvider
					options={{ smooth: true, getSpeed: true }}> */}
		<div>
			<HeaderHome />
			<main className={styles.main}>
				<AboutHome />
				<ProjectsHome />
			</main>
		</div>
		{/* </LocomotiveScrollProvider> */}
	</>
);
export default HomePage;
