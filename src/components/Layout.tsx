import { ReactNode } from 'react';
import Head from 'next/head';
import { ScrollTrigger, Tween } from 'react-gsap';

import { Container } from 'components/Container';
import { RingsWaves } from 'components/RingsWaves';
import { useRouter } from 'next/router';
import { Nav } from './Nav';
import { ScrollDown } from './ScrollDown';

type LayoutProps = {
	title?: string;
	children: ReactNode;
};

export const Layout = ({ title, children }: LayoutProps) => {
	const router = useRouter();
	const homePage = router.pathname === '/';
	const pageTitle = title ? `Elias Goche | ${title}` : 'Elias Goche';

	return (
		<>
			<Head>
				<title>{pageTitle}</title>
				<link
					rel="shortcut icon"
					href="favicon.ico"
					type="image/x-icon"
				/>
			</Head>
			<Tween
				from={{ y: 20, opacity: 0 }}
				duration={1.8}
				delay={4}
				ease="Expo.easeInOut">
				<Nav pageTitle={homePage ? 'Home' : title} />
			</Tween>
			<Container>
				<div className="relative z-[1] h-full w-full">{children}</div>
				<ScrollDown />
				<RingsWaves delay={4.8} />
			</Container>
		</>
	);
};
