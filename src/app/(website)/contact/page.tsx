'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import { Expo } from 'gsap';
import { Tween } from 'react-gsap';

import { DialogData } from 'types';
import { socialLinks, dialogMessages } from 'config';
import { ArrowUpRight } from 'components/ArrowRight';
import { SocialLink } from 'components/SocialLink';
import { ContactForm } from 'types/ContactForm';
import { Dialog } from 'components/Dialog';
import styles from './Contact.module.css';

const ContactPage = () => {
	const [dialogIsOpen, setDialogIsOpen] = useState<boolean>(false);
	const [dialogData, setDialogData] = useState<DialogData>({
		type: 'Success',
		title: '',
		description: '',
	});

	const [formData, setFormData] = useState<ContactForm>({
		name: '',
		email: '',
		message: '',
	});

	const apos = '\u2019';

	const handleChange = async (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	): Promise<void> => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (
		event: FormEvent<HTMLFormElement>,
	): Promise<void> => {
		event.preventDefault();

		const { name, email, message }: ContactForm = formData;
		if (!name || !email || !message) {
			setDialogData({
				type: 'Error',
				title: dialogMessages.required.title,
				description: dialogMessages.required.description,
			});
			setDialogIsOpen(true);
			return;
		}

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ name, email, message }),
			});

			if (res.status !== 200) {
				setDialogData({
					type: 'InternalError',
					title: dialogMessages.internalError.title,
					description: dialogMessages.internalError.description,
				});
				setDialogIsOpen(true);
			}

			setDialogData({
				type: 'Success',
				title: dialogMessages.sent.title,
				description: dialogMessages.sent.description,
			});
			setFormData({ name: '', email: '', message: '' });
			setDialogIsOpen(true);
		} catch (err) {
			setDialogData({
				type: 'InternalError',
				title: dialogMessages.internalError.title,
				description: dialogMessages.internalError.description,
			});
			setDialogIsOpen(true);
			console.log(err);
		}
	};

	return (
		<div className="overflow-hidden">
			<Tween
				to={{ y: 0, opacity: 1 }}
				duration={0.8}
				ease={Expo.easeInOut}>
				<header className={styles.container}>
					<div className={styles.leftContainer}>
						<div className={styles.leftContent}>
							<p className={styles.textP}>
								If you have a new project or want to say hello
							</p>
							<h2 className={styles.textH2}>
								<span>Let{apos}s</span>
								<span className={styles.indented}>get in</span>
								<span>touch</span>
							</h2>
						</div>
					</div>
					<div className={styles.rightContainer}>
						<form onSubmit={handleSubmit} className={styles.form}>
							<div className={styles.formInputs}>
								<div
									className={`${styles.formInputContainer} ${styles.formInputName}`}>
									<label
										className={styles.formLabel}
										htmlFor="name">
										Name
									</label>
									<input
										className={styles.formInput}
										onChange={handleChange}
										value={formData.name}
										placeholder="Enter your name"
										autoComplete="off"
										type="text"
										name="name"
										id="name"
										required
									/>
								</div>
								<div
									className={`${styles.formInputContainer} ${styles.formInputEmail}`}>
									<label
										className={styles.formLabel}
										htmlFor="email">
										Email
									</label>
									<input
										className={styles.formInput}
										onChange={handleChange}
										value={formData.email}
										placeholder="Enter your email"
										type="email"
										name="email"
										id="email"
										required
									/>
								</div>
								<div className={styles.formTextareaContainer}>
									<label
										className={styles.formLabel}
										htmlFor="message">
										Message
									</label>
									<textarea
										className={styles.formTextarea}
										onChange={handleChange}
										value={formData.message}
										placeholder="Enter your message"
										name="message"
										id="message"
										maxLength={280}
										required
									/>
								</div>
							</div>
							<button
								className={styles.formButton}
								type="submit"
								title="Send">
								<ArrowUpRight
									className="h-full w-full rotate-45"
									strokeWidth={2.5}
								/>
							</button>
						</form>
						<div className={styles.links}>
							<SocialLink type={socialLinks.github} />
							<SocialLink type={socialLinks.linkedin} />
							<SocialLink type={socialLinks.discord} />
						</div>
					</div>
				</header>
			</Tween>
			<Dialog
				type={dialogData.type}
				title={dialogData.title}
				description={dialogData.description}
				isOpen={dialogIsOpen}
				setIsOpen={setDialogIsOpen}
			/>
		</div>
	);
};

export default ContactPage;
