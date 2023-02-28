import { Fragment } from 'react';
import { Transition, Dialog as Modal } from '@headlessui/react';
import { Check, X, XCircle, XOctagon } from 'react-feather';

import styles from 'styles/Dialog.module.css';
import { DialogProps } from 'types';
import Link from 'next/link';

export const Dialog = ({
	type,
	title,
	description,
	isOpen,
	setIsOpen,
}: DialogProps) => {
	const icons = {
		InternalError: <XOctagon className={styles.xOctagon} />,
		Error: <XCircle className={styles.xCircle} />,
		Success: <Check className={styles.check} />,
	};

	const icon = icons[type];

	return (
		<Transition show={isOpen} as={Fragment}>
			<Modal className={styles.modal} onClose={() => setIsOpen(false)}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0">
					<div className={styles.backdrop} />
				</Transition.Child>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0 scale-90"
					enterTo="opacity-100 scale-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-90">
					<div className={styles.container}>
						<Modal.Panel className={styles.panel}>
							<button
								className={styles.buttonX}
								onClick={() => setIsOpen(false)}
								type="button">
								<X className={styles.x} />
							</button>
							<div className={styles.dialog}>
								<div className={styles.content}>
									{/* <p className="mb-12 mt-8 grid place-content-center rounded-full text-4xl leading-3">
										👋
									</p> */}
									<div className={styles.iconContainer}>
										{icon}
									</div>
									<h2
										className={styles.title}
										data-testid="dialog-title">
										{title}
									</h2>
									<p className={styles.description}>
										{description}
									</p>
								</div>
								<Link
									href="/"
									className={styles.textButton}
									title="Home">
									Go back home
								</Link>
							</div>
							{/* <div className="h-2 w-full bg-gray text-white" /> */}
						</Modal.Panel>
					</div>
				</Transition.Child>
			</Modal>
		</Transition>
	);
};
