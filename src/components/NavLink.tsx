import Link from 'next/link';
import { useRouter } from 'next/router';

export const NavLink = ({ href, name }: { href: string; name: string }) => {
	const router = useRouter();
	const path = router.pathname === href;

	return (
		<Link href={href}>
			<a
				className={`${
					path ? 'text-white' : 'text-[#999]'
				} text-9xl font-medium uppercase`}>
				{name}
			</a>
		</Link>
	);
};
