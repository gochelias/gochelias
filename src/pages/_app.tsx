import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Tween } from 'react-gsap';

import { Nav } from 'components/Nav';

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default MyApp;
