import { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact',
};

const ContactLayout = ({ children }: { children: ReactNode }) => (
	<main className="overflow-hidden">{children}</main>
);

export default ContactLayout;
