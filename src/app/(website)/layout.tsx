import 'app/globals.css';
import { ReactNode } from 'react';

import { Navbar } from 'components/Navbar';

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className="h-full w-full px-4 md:px-6 lg:px-8 2xl:px-16">
				<Navbar />
				{children}
			</body>
		</html>
	);
}
