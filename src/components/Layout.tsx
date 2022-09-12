import { ReactNode } from 'react';
import Head from 'next/head';

import { Container } from 'components/Container';
import { Footer } from 'components/Footer';
import { RingsWaves } from 'components/RingsWaves';

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
			<div className="relative z-[1] h-full w-full">{children}</div>
			<Footer />
			<RingsWaves />
		</Container>
	</>
);
