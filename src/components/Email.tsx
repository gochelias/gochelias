import Link from 'next/link';

export const Email = () => (
	<Link
		className="uppercase transition-colors selection:bg-white selection:text-black hover:text-gray3light"
		href="/contact"
		translate="no"
		title="Say hello">
		elias@gochelias.com
	</Link>
);
