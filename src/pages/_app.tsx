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
				<div className="fixed z-[2] flex w-full select-none flex-col justify-between px-16 pt-16">
					<Nav />
				</div>
				<div className="fixed bottom-16 left-16">© 2022</div>
			</Tween>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
