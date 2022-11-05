// import Link from 'next/link';
import { useRouter } from 'next/router';

type NavLinkProps = {
	href: string;
	name: string;
};

export const NavLink = ({ href, name }: NavLinkProps) => {
	const router = useRouter();
	const path = router.pathname === href;

	const handleClick = (): void => {
		if (path) return;
		router.push(href);
	};

	return (
		<button
			className={`${
				path ? 'text-white' : 'text-[#999]'
			} text-9xl font-medium uppercase`}
			onClick={handleClick}
			type="button">
			{name}
		</button>
	);
};
