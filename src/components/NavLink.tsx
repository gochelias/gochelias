'use client';

import { usePathname, useRouter } from 'next/navigation';

import { ArrowUpRight } from 'components/ArrowRight';
import styles from 'styles/Navbar.module.css';

type NavLinkProps = {
	href: string;
	name: string;
	label: string;
	closeMenu: () => void;
};

export const NavLink = ({ href, name, label, closeMenu }: NavLinkProps) => {
	const router = useRouter();
	const pathname = usePathname();

	const path = pathname === href;

	const handleClick = (): void => {
		if (path) return;

		closeMenu();
		router.push(href);
	};

	return (
		<button
			className={`group flex h-max text-4xl uppercase leading-tight md:text-[7vw] md:leading-none ${
				path ? 'cursor-not-allowed' : null
			}`}
			onClick={handleClick}
			type="button"
			translate="no">
			{path ? (
				<ArrowUpRight className="my-auto mr-8 hidden h-5 w-5 rotate-45 lg:flex xl:mr-16 xl:h-10 xl:w-10 2xl:mr-24 2xl:h-20 2xl:w-20" />
			) : (
				<ArrowUpRight className="my-auto mr-8 hidden h-5 w-5 -translate-x-24 rotate-45 text-gray2dark opacity-0 transition-all duration-300 group-hover:mr-32 group-hover:translate-x-0 group-hover:opacity-100 lg:flex xl:mr-16 xl:h-10 xl:w-10 2xl:mr-24 2xl:h-20 2xl:w-20" />
			)}
			<span
				className="transition-colors duration-300 group-hover:text-gray2dark"
				translate="no">
				{name}
			</span>
			{path ? (
				<span className="mt-1 ml-3 text-sm md:flex xl:ml-12 xl:mt-6 xl:text-xl">
					You are here
				</span>
			) : (
				<span className="mt-1 ml-3 text-sm md:flex xl:ml-12 xl:mt-6 xl:text-xl">
					{label}
				</span>
			)}
		</button>
	);
};
