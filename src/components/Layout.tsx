import { ReactNode } from 'react';
import Head from 'next/head';

import { Container } from 'components/Container';
import { Nav } from 'components/Nav';
import { Footer } from 'components/Footer';

export const Layout = ({
	title,
	children,
}: {
	title: string;
	children: ReactNode;
}) => (
	<>
		<Head>
			<title>{`${title} | Elias Goche`}</title>
			<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
		</Head>
		<div className="fixed flex h-screen w-full select-none flex-col justify-between px-16 pb-16">
			<div>
				<div className="h-16 bg-gradient-to-b from-black to-transparent" />
				<Nav />
			</div>
			<div>© 2022</div>
		</div>
		<Container>
			<div className="h-full w-full">{children}</div>
		</Container>
		<Footer />
	</>
);
