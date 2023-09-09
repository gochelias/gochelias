import styles from './form.module.css';

export function Form() {
	return (
		<form className={styles.form}>
			<div className={styles.inputs}>
				<input
					className={styles.input}
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
