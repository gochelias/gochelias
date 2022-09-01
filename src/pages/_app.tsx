import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { Nav } from 'components/Nav';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<div className="fixed flex h-screen w-full select-none flex-col justify-between px-16 pb-16">
				<div>
					<div className="h-16 bg-gradient-to-b from-black to-transparent" />
					<Nav />
				</div>
				<div>© 2022</div>
			</div>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
