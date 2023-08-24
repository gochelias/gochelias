import Image from 'next/image';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';
import daysjs from 'dayjs';

import type { Post } from 'contentlayer/generated';
import styles from '@/styles/Blog.module.css';

export function Card({ data }: { data: Post }) {
	const { slug, image, title, overview, readingTime } = data;

	const publishedAt = daysjs(data.publishedAt).format('MMM DD, YYYY');

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
				<span>{publishedAt}</span>
			</p>
			{/* <span>·</span> #FF3E00 */}
		</article>
	);
}
