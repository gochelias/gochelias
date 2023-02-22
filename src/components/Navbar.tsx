'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { X } from 'react-feather';
import gsap, { Expo } from 'gsap';

import { SocialLink } from 'components/SocialLink';
import { NavLink } from 'components/NavLink';
import { Logo } from 'components/Logo';
import { socialLinks } from 'config';
import { Email } from './Email';

export const Navbar = () => {
	const pathname = usePathname();

	const timeline: gsap.core.Timeline = gsap.timeline({ paused: true });

	useEffect(() => {
		const navbar: HTMLElement | null = document.getElementById('navbar');

		if (pathname === '/') {
			const homeTop: number =
				document.getElementById('top')?.offsetHeight ?? 0;

			const onLoadScroll: number = window.scrollY;
			if (
				onLoadScroll === 0 &&
				!navbar?.classList.contains('navbar-hide')
			) {
				navbar?.classList.remove('navbar-show');
				navbar?.classList.add('navbar-hide');
			}

			window.addEventListener('scroll', () => {
				const currentScroll: number = window.scrollY;

				if (
					currentScroll >= homeTop &&
					!navbar?.classList.contains('navbar-show')
				) {
					navbar?.classList.remove('navbar-hide');
					navbar?.classList.add('navbar-show');
				}

				if (
					currentScroll <= homeTop &&
					!navbar?.classList.contains('navbar-hide')
				) {
					navbar?.classList.remove('navbar-show');
					navbar?.classList.add('navbar-hide');
				}
			});
		} else {
			navbar?.classList.remove('navbar-hide');
			navbar?.classList.add('navbar-show');
		}
	}, [pathname]);

	useEffect(() => {
		timeline.to('.menu', {
			y: '0%',
			duration: 2.2,
			ease: Expo.easeInOut,
		});

		timeline.reverse();
	}, [timeline]);

	const toggleMenu = (): void => {
		timeline.reversed(!timeline.reversed());
	};

	return (
		<>
			<nav
				className="navbar-hide fixed inset-0 z-10 flex h-max w-full select-none justify-between px-4 pt-4 transition-transform duration-300 2xl:px-16 2xl:pt-16"
				id="navbar">
				<Link
					href="/"
					className="bg-white p-3 text-black 2xl:p-6"
					title="Go to home">
					<Logo className="h-4 w-4 2xl:h-auto 2xl:w-auto" />
				</Link>
				{/* <button
					type="button"
					onClick={toggleMenu}
					className="px-2 text-4xl uppercase leading-none">
					Me
					<br />
					nu
				</button> */}
			</nav>
			<div className="menu fixed inset-0 z-20 flex -translate-y-full overflow-hidden">
				<div className="relative flex h-screen w-full bg-black p-16">
					<Link
						href="/"
						className="absolute h-max w-max bg-white p-6 text-black"
						title="Go to home">
						<Logo />
					</Link>
					<button
						className="absolute right-16 h-max w-max p-6 transition-colors hover:bg-white hover:text-black"
						onClick={toggleMenu}
						title="Close"
						type="button">
						<X />
					</button>
					<div className="ml-12 mb-12 flex h-max w-max flex-col space-y-16 self-end text-lg uppercase">
						<div className="mr-12 flex select-none flex-col space-y-3">
							<SocialLink type={socialLinks.github} />
							<SocialLink type={socialLinks.linkedin} />
							<SocialLink type={socialLinks.discord} />
						</div>
						<Email />
					</div>
					<ul className="ml-auto flex h-max w-2/3 select-none flex-col text-white opacity-100">
						<li>
							<NavLink href="/" name="Home" label="Maintenance" />
						</li>
						<li>
							<NavLink
								href="/portfolio"
								name="Portfolio"
								label="Maintenance"
							/>
						</li>
						<li>
							<NavLink
								href="/about"
								name="About"
								label="Maintenance"
							/>
						</li>
						<li>
							<NavLink
								href="/blog"
								name="Blog"
								label="Maintenance"
							/>
						</li>
						<li>
							<NavLink
								href="/contact"
								name="Contact"
								label="Maintenance"
							/>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};
