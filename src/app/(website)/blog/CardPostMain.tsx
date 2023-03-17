import Image from 'next/image';
import Link from 'next/link';

import { CardPostProps } from 'types/CardPostProps';
import styles from './Blog.module.css';

export const CardPostMain = ({
	/* id, */
	image,
	category,
	title,
	description,
	publishedAt,
	readingTime,
}: CardPostProps) => (
	<article className={styles.mainArticle}>
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
		<h4 className={styles.mainCategory}>{category}</h4>
		<h2 className={styles.mainTitle} title={title}>
			<Link href="#">{title}</Link>
		</h2>
		<p className={styles.mainDescription}>{description}</p>
		<p className={styles.mainData}>
			<span>{readingTime}</span>
			<span>{publishedAt}</span>
		</p>
	</article>
);
