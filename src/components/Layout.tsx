import { ReactNode } from 'react';
import Head from 'next/head';
import { Scrollbars } from 'react-custom-scrollbars';

import { Container } from 'components/Container';
import { Footer } from 'components/Footer';

export const Layout = ({
	title,
	children,
}: {
	title: string;
	children: ReactNode;
}) => {
	const scrollbar = () => <div className="rounded-full bg-[#333]" />;

	return (
		<>
			<Head>
				<title>{`${title} | Elias Goche`}</title>
				<link
					rel="shortcut icon"
					href="favicon.ico"
					type="image/x-icon"
				/>
			</Head>
			<Scrollbars
				renderThumbVertical={scrollbar}
				universal
				autoHeight
				autoHeightMin="calc(100vh)">
				<Container>
					<div className="h-full w-full">{children}</div>
					<Footer />
				</Container>
			</Scrollbars>
		</>
	);
};
