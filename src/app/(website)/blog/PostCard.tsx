import Image from 'next/image';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';

import { PostCardProps } from 'types';
import styles from './Blog.module.css';

export default function PostCard({
	image,
	title,
	description,
	publishedAt,
	readingTime,
}: PostCardProps) {
	return (
		<article className={styles.article}>
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
			{/* <h4 className={styles.category}>{category}</h4> */}
			<h2 className={styles.title} title={title}>
				<Link href="#">{title}</Link>
			</h2>
			<p className={styles.description}>{description}</p>
			<p className={styles.data}>
				<span>{readingTime}</span>
				<span>{format(parseISO(publishedAt), 'MMM d, yyyy')}</span>
			</p>
			{/* <span>·</span> #FF3E00 */}
		</article>
	);
}
