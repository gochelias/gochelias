import Link from 'next/link';

type FooterLinkProps = {
	url: string;
	name: string;
};

export const FooterLink = ({ url, name }: FooterLinkProps) => (
	<li className="hover:text-white hover:underline">
		<Link href={url}>{name}</Link>
	</li>
);
