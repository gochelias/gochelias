'use client';

// import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ArrowUpRight } from './ArrowRight';

type NavLinkProps = {
	href: string;
	name: string;
	label: string;
};

export const NavLink = ({ href, name, label }: NavLinkProps) => {
	const router = useRouter();
	const pathname = usePathname();

	const path = pathname === href;

	const handleClick = (): void => {
		if (path) return;
		router.push(href);
	};

	return (
		<button
			className={`group flex h-max text-[7vw] uppercase leading-none ${
				path ? 'cursor-not-allowed' : null
			}`}
			onClick={handleClick}
			type="button">
			{path ? (
				<ArrowUpRight className="my-auto mr-24 rotate-45" size={80} />
			) : (
				<ArrowUpRight
					className="my-auto mr-24 -translate-x-24 rotate-45 opacity-0 transition-all duration-300 group-hover:mr-32 group-hover:translate-x-0 group-hover:opacity-100"
					size={80}
				/>
			)}
			<span
				className={`transition-colors duration-300 group-hover:text-gray ${
					path ? 'italic' : null
				}`}>
				{name}
			</span>
			{path ? (
				<span className="mt-6 ml-12 text-xl">You are here</span>
			) : (
				<span className="mt-6 ml-12 text-xl">{label}</span>
			)}
		</button>
	);
};
