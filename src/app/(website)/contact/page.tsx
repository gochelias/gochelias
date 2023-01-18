'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

import { ArrowUpRight } from 'components/ArrowRight';
import { ExternalLink } from 'components/ExternalLink';
import { links } from 'config/links';
import styles from './Contact.module.css';

interface FormData {
	name: string;
	email: string;
	message: string;
}

const ContactPage = () => {
	const apos = '\u2019';

	const router = useRouter();

	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		message: '',
	});

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

		const { name, email, message } = formData;
		if (!name && !email && !message) {
			console.log('Something was wrong!');
			return;
		}

		const data: FormData = { name, email, message };
		const JSONData = JSON.stringify(data);

		try {
			await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSONData,
			});

			router.push('/');
		} catch (err) {
			console.log(err);
		}
	};

	return (
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
							<label className={styles.formLabel} htmlFor="name">
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
							<label className={styles.formLabel} htmlFor="email">
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
					<ExternalLink
						name={links.github.name}
						title={links.github.username}
						url={links.github.url}
					/>
					<ExternalLink
						name={links.linkedin.name}
						title={links.linkedin.username}
						url={links.linkedin.url}
					/>
					<ExternalLink
						name={links.discord.name}
						title={links.discord.username}
						url={links.discord.url}
					/>
				</div>
			</div>
		</header>
	);
};

export default ContactPage;
