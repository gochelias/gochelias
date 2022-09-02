import { ReactNode } from 'react';
import Head from 'next/head';

import { Container } from 'components/Container';
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
		<Container>
			<div className="h-full w-full">{children}</div>
			<Footer />
		</Container>
	</>
);
