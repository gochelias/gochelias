import { Fragment, type ReactNode } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import { EmailLink, SocialLinksColumn } from '@/components';
import styles from './menu.module.css';
import MenuLinks from './menu-links';

export * from './menu-button';

/**
 * Provide only the animation when opening and closing the menu
 */
function MenuTransition({ children }: { children: ReactNode }) {
	return (
		<>
			<Transition.Child
				as={Fragment}
				enter="transition duration-150 ease-out"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="transition duration-150 ease-in"
				leaveFrom="opacity-100"
				leaveTo="opacity-0">
				<div className={styles.backdrop} aria-hidden="true" />
			</Transition.Child>
			<div className={styles.container}>
				<Transition.Child
					as={Fragment}
					enter="transition duration-300 ease-out"
					enterFrom="translate-x-full "
					enterTo="translate-x-0 "
					leave="transition duration-300 ease-in"
					leaveFrom="translate-x-0 "
					leaveTo="translate-x-full ">
					{children}
				</Transition.Child>
			</div>
		</>
	);
}

export default function Menu({
	isOpen,
	closeMenu,
}: {
	isOpen: boolean;
	closeMenu: () => void;
}) {
	return (
		<Transition show={isOpen} as={Fragment}>
			<Dialog onClose={closeMenu}>
				<MenuTransition>
					<Dialog.Panel className={styles.panel}>
						<div className={styles.wrapper}>
							<div className={styles.content}>
								<nav className={styles.nav}>
									<h6 className={styles.title}>Menu</h6>
									<MenuLinks closeMenu={closeMenu} />
								</nav>
								<div className={styles.social}>
									<div>
										<h6 className={styles.title}>Social</h6>
										<SocialLinksColumn
											include={[
												'GitHub',
												'LinkedIn',
												'Discord',
											]}
										/>
									</div>
									<div>
										<h6 className={styles.title}>
											Get in touch
										</h6>
										<EmailLink />
									</div>
								</div>
							</div>
						</div>
					</Dialog.Panel>
				</MenuTransition>
			</Dialog>
		</Transition>
	);
}
