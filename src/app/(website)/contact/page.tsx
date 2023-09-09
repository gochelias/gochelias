import styles from '@/styles/contact.module.css';
import { Form } from '@/components/contact';

export default function ContactPage() {
	return (
		<main className={styles.main}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<h1 className={styles.title}>Let's work together</h1>
					<p className={styles.email}>elias@gochelias.com</p>
				</div>
				<Form />
			</div>
		</main>
	);
}
