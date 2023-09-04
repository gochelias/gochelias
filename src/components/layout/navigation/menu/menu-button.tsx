import type { Dispatch, SetStateAction } from 'react';
import styles from './menu.module.css';

export function MenuButton({
	isOpen,
	setIsOpen,
}: {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
	return (
		<button
			onClick={() => setIsOpen(!isOpen)}
			type="button"
			className={`${styles.button} group`}>
			<div className={styles.btnContainer}>
				<div
					className={`${styles.one} ${
						isOpen && 'translate-y-0 -rotate-45'
					}`}
				/>
				<div
					className={`${
						styles.two
					} group-hover:w-7 2xl:group-hover:w-8 ${
						isOpen && 'w-7 translate-y-0 rotate-45 xl:w-8'
					}`}
				/>
			</div>
		</button>
	);
}
