'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { X } from 'react-feather';
import gsap, { Expo } from 'gsap';

import { SocialLink } from 'components/SocialLink';
import { NavLink } from 'components/NavLink';
import { Email } from 'components/Email';
import { socialLinks } from 'config';
import styles from 'styles/Navbar.module.css';

export const Navbar = () => {
	const pathname = usePathname();

	const timeline: gsap.core.Timeline = gsap.timeline({
		paused: true,
		reversed: true,
	});

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
		timeline.to(
			'#menu',
			{
				y: 0,
				duration: 1.8,
				ease: Expo.easeInOut,
			},
			0.1,
		);

		timeline.to(
			'#menu-nav',
			{
				y: 0,
				duration: 2.4,
				ease: Expo.easeInOut,
			},
			'<0.2',
		);

		timeline.to(
			'#link',
			{
				y: 0,
				duration: 1.6,
				opacity: 1,
				stagger: {
					amount: 0.8,
				},
				ease: Expo.easeInOut,
			},
			'>',
		);

		timeline.to(
			'#socials',
			{
				duration: 1,
				opacity: 1,
				delay: 0,
				ease: Expo.easeOut,
			},
			'<1',
		);

		timeline.to(
			'#name',
			{
				duration: 0.6,
				opacity: 1,
				ease: Expo.easeInOut,
			},
			'<',
		);

		timeline.to(
			'#close',
			{
				duration: 0.6,
				opacity: 1,
				ease: Expo.easeInOut,
			},
			'<',
		);

		timeline.reverse();
	}, [timeline]);

	const toggleMenu = (): void => {
		timeline.reversed(!timeline.reversed());
	};

	const closeMenu = (): void => {
		timeline.reverse();
	};

	return (
		<>
			<nav
				className="navbar-hide fixed left-0 z-10 flex w-full select-none items-center justify-between bg-gradient-to-b from-black to-transparent px-4 pt-4 transition-transform duration-300 md:bg-none 2xl:px-16 2xl:pt-16"
				id="navbar">
				<Link
					href="/"
					className="text-2xl font-medium leading-none text-white xl:text-3xl xl:font-normal"
					title="Go to home"
					translate="no">
					Elias Goche
				</Link>
				<button
					type="button"
					onClick={toggleMenu}
					className="group flex h-7 w-6 flex-col items-end justify-center space-y-1.5 text-lg uppercase leading-none">
					<hr className="h-0.5 w-6 bg-white transition-colors group-hover:bg-gray" />
					<hr className="h-0.5 w-3 bg-white transition-all group-hover:w-6 group-hover:bg-gray" />
				</button>
			</nav>
			<div className={styles.menu} id="menu">
				<div className={styles.menuContent} id="menu-nav">
					<Link
						href="/"
						className={styles.name}
						id="name"
						title="Go to home"
						translate="no">
						Elias Goche
					</Link>
					<button
						className={styles.close}
						id="close"
						onClick={toggleMenu}
						title="Close"
						type="button">
						<X />
					</button>
					<div className="flex h-full w-full flex-col py-24 lg:flex-row-reverse lg:py-0 xl:justify-start landscape:flex-row-reverse landscape:gap-x-16 landscape:py-0">
						<ul className={styles.links}>
							<li className={styles.link} id="link">
								<NavLink
									href="/"
									name="Home"
									label="Home"
									closeMenu={closeMenu}
								/>
							</li>
							<li className={styles.link} id="link">
								<NavLink
									href="/portfolio"
									name="Portfolio"
									label="Maintenance"
									closeMenu={closeMenu}
								/>
							</li>
							<li className={styles.link} id="link">
								<NavLink
									href="/about"
									name="About"
									label="Maintenance"
									closeMenu={closeMenu}
								/>
							</li>
							<li className={styles.link} id="link">
								<NavLink
									href="/blog"
									name="Blog"
									label="Maintenance"
									closeMenu={closeMenu}
								/>
							</li>
							<li className={styles.link} id="link">
								<NavLink
									href="/contact"
									name="Contact"
									label="Say hello"
									closeMenu={closeMenu}
								/>
							</li>
						</ul>
						<div className={styles.socials} id="socials">
							<div className={styles.socialLinks}>
								<SocialLink type={socialLinks.github} />
								<SocialLink type={socialLinks.linkedin} />
								<SocialLink type={socialLinks.discord} />
							</div>
							<Email />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
