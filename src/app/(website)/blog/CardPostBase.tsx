import Image from 'next/image';
import Link from 'next/link';

import { CardPostProps } from 'types/CardPostProps';
import styles from './Blog.module.css';

export const CardPostBase = ({
	/* id, */
	image,
	category,
	title,
	description,
	publishedAt,
	readingTime,
}: CardPostProps) => (
	<article className={styles.baseArticle}>
		<div className={styles.imgContainer}>
			<Link href="#" className={styles.imgLink}>
				<Image
					className={styles.image}
					src={image}
					fill
					sizes="(max-width: 768px) 100vw,
					(max-width: 1200px) 50vw,
					33vw"
					alt="IMG"
				/>
			</Link>
		</div>
		<h4 className={styles.baseCategory}>{category}</h4>
		<h2 className={styles.baseTitle} title={title}>
			<Link href="#">{title}</Link>
		</h2>
		<p className={styles.baseDescription}>{description}</p>
		<p className={styles.baseData}>
			<span>{readingTime}</span>
			<span>{publishedAt}</span>
		</p>
		{/* <span>·</span> #FF3E00 */}
	</article>
);
