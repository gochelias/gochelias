import 'app/globals.css';
import { ReactNode } from 'react';

import { Footer } from 'components/Footer';
import { Nav } from 'components/Nav';

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className="w-full h-full px-4 md:px-6 lg:px-8 2xl:px-40">
				<Nav />
				{children}
				<Footer />
			</body>
		</html>
	);
}
