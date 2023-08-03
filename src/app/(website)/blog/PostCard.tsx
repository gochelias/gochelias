import Image from 'next/image';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';
import { format, parseISO } from 'date-fns';

import type { Post } from 'contentlayer/generated';
import styles from './Blog.module.css';

export default function PostCard({ data }: { data: Post }) {
	const { slug, image, title, overview, readingTime, publishedAt } = data;

	return (
		<article className={styles.article}>
			<div className={styles.imgContainer}>
				<Link href={`/blog/${slug}`} className={styles.imgLink}>
					<Image
						className={styles.image}
						src={image!}
						fill
						sizes="(max-width: 768px) 100vw,
							(max-width: 1200px) 50vw,
							33vw"
						alt="IMG"
					/>
				</Link>
			</div>
			{/* <h4 className={styles.category}>{category}</h4> */}
			<Link href={`/blog/${slug}`}>
				<h2 className={styles.title} title={title}>
					<Balancer className="leading-tight">{title}</Balancer>
				</h2>
			</Link>
			<p className={styles.description}>{overview}</p>
			<p className={styles.data}>
				<span>{readingTime.text}</span>
				<span>{format(parseISO(publishedAt), 'MMM d, yyyy')}</span>
			</p>
			{/* <span>·</span> #FF3E00 */}
		</article>
	);
}
