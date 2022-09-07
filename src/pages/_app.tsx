import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { Nav } from 'components/Nav';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<div className="fixed z-[2] flex w-full select-none flex-col justify-between px-16 pt-16">
				<Nav />
				<div className="fixed bottom-16 left-16">© 2022</div>
			</div>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
