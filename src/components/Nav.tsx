'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { gsap, Expo } from 'gsap';

import { Logo } from 'components/Logo';
import { NavLink } from 'components/NavLink';

export const Nav = () => {
	const timeline = gsap.timeline({ paused: true });

	useEffect(() => {
		const navbar: HTMLElement | null = document.getElementById('navbar');
		const height: number =
			document.getElementById('top')?.offsetHeight ?? 0;

		window.addEventListener('scroll', () => {
			const currentScroll = window.pageYOffset;

			if (
				currentScroll >= height &&
				!navbar?.classList.contains('navbar-show')
			) {
				navbar?.classList.remove('navbar-hide');
				navbar?.classList.add('navbar-show');
			}

			if (
				currentScroll <= height &&
				!navbar?.classList.contains('navbar-hide')
			) {
				navbar?.classList.remove('navbar-show');
				navbar?.classList.add('navbar-hide');
			}
		});

		timeline.to('.menu', {
			y: '0%',
			duration: 2.5,
			ease: Expo.easeInOut,
		});

		timeline.from('.links li', {
			y: 25,
			opacity: 0,
			stagger: 0.2,
			duration: 1,
			ease: Expo.easeInOut,
		});

		timeline.from('.extra', {
			opacity: 0,
			duration: 0.8,
			ease: Expo.easeInOut,
		});

		timeline.reverse();
	}, [timeline]);

	const toggleMenu = () => {
		timeline.reversed(!timeline.reversed());
	};

	return (
		<>
			<nav
				className="navbar-hide fixed inset-0 z-10 flex h-max w-full select-none justify-between px-16 pt-16 transition-transform duration-300"
				id="navbar">
				{/* <span className='px-4 pt-4 md:px-6 md:pt-6 lg:px-8 lg:pt-8 2xl:px-16 2xl:py-16'></span> */}
				<Link
					href="/"
					className="bg-white p-6 text-black"
					title="Go to home">
					<Logo />
				</Link>
				<button
					type="button"
					onClick={toggleMenu}
					className="px-2 text-4xl uppercase leading-none">
					Me
					<br />
					nu
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
