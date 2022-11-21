import { ReactNode } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Container } from 'components/Container';
import { RingsWaves } from 'components/RingsWaves';
import { Nav } from 'components/Nav';
import { ScrollDown } from 'components/ScrollDown';
import { Footer } from 'components/Footer';

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
			<Nav pageTitle={homePage ? 'Home' : title} />
			<Container>
				<div className="relative z-[1] h-full w-full">{children}</div>
				<ScrollDown />
				<RingsWaves delay={4.8} />
				<Footer />
			</Container>
		</>
	);
};
