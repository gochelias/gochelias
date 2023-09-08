import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'react-feather';

import styles from '@/styles/Home.module.css';

export default function HomePage() {
	return (
		<>
			<section className={styles.container}>
				<div className={styles.hero}>
					<h1 className={styles.title}>
						Turning code into experiences
					</h1>
					<div className={styles.info}>
						<h6>Software Developer</h6>
						<h6>Based in México</h6>
						<Link href="/contact" className={styles.contact}>
							<span>Contact</span>
							<ArrowUpRight />
						</Link>
					</div>
					<div className={styles.image}>
						<Image
							className="object-cover object-top"
							fill
							src="https://images.unsplash.com/photo-1612986568842-42f75cc9e36a?crop=bottom&auto=format&q=80&fit=crop&w=1920&h=1215"
							alt=""
						/>
					</div>
				</div>
			</section>
			<main className="box">
				<section className={styles.aboutSection}>
					<hr />
					<div className={styles.about}>
						<div className="w-1/2">About</div>
						<div className="flex w-full flex-col md:w-1/2">
							<div className={styles.aboutContent}>
								<h2>Hello I'm Elias.</h2>
								<p>
									I'm a passionate software developer who
									started his journey in the exciting world of
									software in 2018. Since then, I've been
									focused on learning and growing in this
									field.
								</p>
								<p>
									My enthusiasm for software drives me to
									constantly seek new challenges and
									innovative solutions. I'm committed to
									continuous improvement and enjoy working on
									projects that allow me to expand my
									knowledge and skills.
								</p>
							</div>
							<a
								href="/github"
								target="_blank"
								translate="no"
								className={`${styles.aboutLink} mb-[-1px]`}>
								<span>GitHub</span>
								<ArrowUpRight />
							</a>
							<a
								href="/linkedin"
								target="_blank"
								translate="no"
								className={styles.aboutLink}>
								<span>LinkedIn</span>
								<ArrowUpRight />
							</a>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
