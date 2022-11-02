import { useEffect } from 'react';
import Link from 'next/link';
import { gsap, Expo, Bounce } from 'gsap';

import { Logo } from 'components/Logo';
import { NavLink } from 'components/NavLink';

type NavProps = {
	pageTitle?: string;
};

export const Nav = ({ pageTitle }: NavProps) => {
	const tl = gsap.timeline({ paused: true });

	useEffect(() => {
		tl.to('.menu', {
			y: '0%',
			duration: 2.5,
			ease: Expo.easeInOut,
		});

		tl.from('.links li', {
			y: 25,
			opacity: 0,
			stagger: 0.2,
			duration: 1,
			ease: Expo.easeInOut,
		});

		tl.from('.extra', {
			opacity: 0,
			duration: 0.8,
			ease: Expo.easeInOut,
		});

		tl.reverse();
	}, [tl]);

	const toggleMenu = () => {
		tl.reversed(!tl.reversed());
	};

	return (
		<>
			<nav className="fixed z-10 flex h-40 w-full select-none bg-gradient-to-b from-black to-transparent">
				{/* <span className='px-4 pt-4 md:px-6 md:pt-6 lg:px-8 lg:pt-8 2xl:px-16 2xl:py-16'></span> */}
				<Link href="/">
					<a
						title="Go to home"
						className="grid place-content-center p-16 hover:text-[#999]">
						<Logo className="w-5 md:w-6 2xl:w-8" />
					</a>
				</Link>
				<div className="flex items-center space-x-6">
					<hr className="h-[1px] w-24 bg-white" />
					<h4
						className="text-lg font-semibold uppercase"
						title="You are here">
						{pageTitle || 'Not Found'}
					</h4>
				</div>
				<button
					type="button"
					onClick={toggleMenu}
					className="ml-auto place-content-center overflow-hidden p-16 text-base font-semibold uppercase hover:underline">
					Menu
				</button>
			</nav>
			<div
				className="menu fixed inset-0 z-[5] flex -translate-y-full  items-center bg-[#111] p-16"
				id="menu">
				<ul className="links absolute z-[5] flex flex-col space-y-10">
					<li>
						<NavLink href="/" name="Home" />
					</li>
					<li>
						<NavLink href="/portfolio" name="Portfolio" />
					</li>
					<li>
						<NavLink href="/about" name="About" />
					</li>
					<li>
						<NavLink href="/contact" name="Contact" />
					</li>
					<li>
						<NavLink href="/blog" name="Blog" />
					</li>
				</ul>
				<div className="extra ml-auto flex h-1/2 flex-col justify-between self-end">
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
