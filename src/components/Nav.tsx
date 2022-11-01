import { useEffect } from 'react';
import Link from 'next/link';
import { gsap, Expo } from 'gsap';

import { Logo } from 'components/Logo';

type NavProps = {
	pageTitle?: string;
};

export const Nav = ({ pageTitle }: NavProps) => {
	const tl = gsap.timeline({ paused: true });

	useEffect(() => {
		const el = document.getElementById('menu');
		tl.to(el, {
			y: '0%',
			duration: 2.5,
			ease: Expo.easeInOut,
		});

		tl.reverse();
	}, [tl]);

	const toggleMenu = () => {
		tl.reversed(!tl.reversed());
	};

	return (
		<>
			<nav className="fixed z-10 flex w-full select-none bg-gradient-to-b from-black to-transparent">
				{/* <span className='px-4 pt-4 md:px-6 md:pt-6 lg:px-8 lg:pt-8 2xl:px-16 2xl:py-16'></span> */}
				<Link href="/">
					<a
						className="grid w-40 place-content-center p-16 duration-100 hover:bg-white hover:text-black"
						title="Go to home">
						<Logo className="w-5 md:w-6 2xl:w-8" />
					</a>
				</Link>
				<div className="flex items-center space-x-6">
					<hr className="h-[1px] w-24 bg-white" />
					<h4
						className="text-xl font-medium uppercase"
						title="You are here">
						{pageTitle || 'Not Found'}
					</h4>
				</div>
				<button
					type="button"
					onClick={toggleMenu}
					className="ml-auto h-40 w-40 place-content-center overflow-hidden text-base font-semibold uppercase duration-100 hover:bg-white hover:text-black">
					Menu
				</button>
			</nav>
			<div
				className="menu fixed inset-0 z-[5] flex -translate-y-full  items-center bg-black p-16"
				id="menu">
				<ul className="absolute z-[5] flex flex-col space-y-10 text-9xl font-medium uppercase text-[#999]">
					<li className="flex text-white">Home</li>
					<li>Portfolio</li>
					<li>About</li>
					<li>Contact</li>
					<li>Blog</li>
				</ul>
				<div className="ml-auto flex h-1/2 flex-col justify-between self-end">
					<div className="flex flex-col space-y-3 text-lg font-medium">
						<a
							target="_blank"
							href="https://github.com/gochelias"
							title="@gochelias"
							rel="noreferrer"
							className="hover:underline">
							GitHub
						</a>
						<a
							target="_blank"
							href="https://www.linkedin.com/in/gochelias"
							title="@gochelias"
							rel="noreferrer"
							className="hover:underline">
							LinkedIn
						</a>
						<a
							target="_blank"
							href="https://discord.com/users/636351475307773963"
							title="gochelias#2076"
							rel="noreferrer"
							className="hover:underline">
							Discord
						</a>
					</div>
					<p className="text-xl font-medium">
						Let&apos;s work together
					</p>
				</div>
			</div>
		</>
	);
};
