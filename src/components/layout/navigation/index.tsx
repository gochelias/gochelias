import Link from 'next/link';
/* import { useState } from 'react'; */

import styles from './navigation.module.css';
/* import Menu, { MenuButton } from './menu'; */

export function Navigation() {
	/* 	const [isOpen, setIsOpen] = useState<boolean>(false);

	const closeMenu = () => setIsOpen(false); */

	return (
		<>
			<header className={styles.container}>
				<div className={styles.navigation}>
					<Link href="/" className={styles.name} translate="no">
						Elias Goche
					</Link>
					{/* <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} /> */}
				</div>
			</header>
			{/* <Menu isOpen={isOpen} closeMenu={closeMenu} /> */}
		</>
	);
}
