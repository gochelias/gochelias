'use client';

// import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

type NavLinkProps = {
	href: string;
	name: string;
};

export const NavLink = ({ href, name }: NavLinkProps) => {
	const router = useRouter();
	const pathname = usePathname();

	const handleClick = (): void => {
		if (pathname === href) return;
		router.push(href);
	};

	return (
		<button
			className={`${
				pathname ? 'text-white' : 'text-[#999]'
			} text-9xl font-medium uppercase`}
			onClick={handleClick}
			type="button">
			{name}
		</button>
	);
};
