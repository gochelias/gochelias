import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { Nav } from 'components/Nav';
import { Tween } from 'react-gsap';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Tween
				from={{ y: 20, opacity: 0 }}
				duration={1.8}
				delay={4}
				ease="Expo.easeInOut">
				<div className="lg:px fixed z-[2] flex w-full select-none flex-col justify-between px-4 pt-4 md:px-6 md:pt-6 lg:px-8 lg:pt-8 2xl:px-16 2xl:pt-16">
					<Nav />
				</div>
				<div className="fixed bottom-4 left-4 md:bottom-6 md:left-6 lg:bottom-8 lg:left-8 2xl:bottom-16 2xl:left-16">
					© 2022
				</div>
			</Tween>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
