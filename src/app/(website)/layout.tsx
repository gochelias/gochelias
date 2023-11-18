import '@/app/globals.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import { clash_display, telegraf, jet_brains_mono } from '@/fonts';
import { Footer, Navigation } from '@/components/layout';

export const metadata: Metadata = {
	title: {
		default: 'Elias Goche',
		template: '%s | Elias Goche',
	},
	description: 'Software Developer',
	metadataBase: new URL('https://gochelias.com'),
	openGraph: {
		title: 'Elias Goche',
		description: 'Software Developer',
		url: 'https://gochelias.com',
		siteName: 'Elias Goche',
		images: ['/opengraph-image.png'],
		locale: 'en-US',
		alternateLocale: 'es-ES',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-image-preview': 'large',
			'max-video-preview': -1,
			'max-snippet': -1,
		},
	},
	icons: {
		shortcut: '/favicon.ico',
	},
	themeColor: 'black',
	twitter: {
		title: 'Elias Goche',
		description: 'Software Developer',
		card: 'summary_large_image',
		images: ['/opengraph-image.png'],
	},
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html
			lang="en"
			className={`${clash_display.variable} ${telegraf.variable} ${jet_brains_mono.variable}`}>
			<body className="h-full w-screen">
				<Navigation />
				{children}
				<Footer />
			</body>
		</html>
	);
}
