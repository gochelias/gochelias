import 'app/globals.css';
import { ReactNode } from 'react';
import localFont from 'next/font/local';

import { Navbar } from 'components/Navbar';

const clashDisplay = localFont({
	src: [
		{
			path: '../../../public/fonts/clash-display-400-regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../../public/fonts/clash-display-500-medium.woff2',
			weight: '500',
			style: 'normal',
		},
	],
	variable: '--font-clash-display',
	display: 'swap',
});

const telegraf = localFont({
	src: '../../../public/fonts/telegraf-400-regular.woff2',
	variable: '--font-telegraf',
	weight: '400',
	style: 'normal',
	display: 'swap',
});

const jetBrainsMono = localFont({
	src: '../../../public/fonts/jetbrains-mono-400-regular.woff2',
	variable: '--font-jetbrains-mono',
	weight: '400',
	style: 'normal',
	display: 'swap',
});

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html
			lang="en"
			className={`${clashDisplay.variable} ${telegraf.variable} ${jetBrainsMono.variable}`}>
			<body className="h-full w-full px-4 md:px-6 lg:px-8 2xl:px-16">
				<Navbar />
				{children}
			</body>
		</html>
	);
}
