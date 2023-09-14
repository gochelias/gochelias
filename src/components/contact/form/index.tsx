'use client';

import { useContactForm } from '@/hooks';
import styles from './form.module.css';

export function Form() {
	const { contactData, handleChange, handleSubmit } = useContactForm();

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<div className={styles.inputs}>
				<input
					className={styles.input}
					onChange={handleChange}
					value={contactData.name}
					placeholder="Name"
					name="name"
					minLength={5}
					maxLength={75}
					autoComplete="off"
					type="text"
					required
				/>
				<input
					className={styles.input}
					onChange={handleChange}
					value={contactData.email}
					placeholder="Email"
					name="email"
					minLength={5}
					maxLength={75}
					type="email"
					required
				/>
			</div>
			<textarea
				className={styles.textarea}
				onChange={handleChange}
				value={contactData.message}
				placeholder="Message"
				name="message"
				minLength={5}
				maxLength={280}
				required
			/>
			<button className={styles.send} type="submit">
				<span>Send</span>
				<span>→</span>
			</button>
		</form>
	);
}
