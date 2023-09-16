import Link from 'next/link';
import dayjs from 'dayjs';
import Balancer from 'react-wrap-balancer';

import type { Post } from 'contentlayer/generated';
import styles from './card.module.css';

export function Card({ data }: { data: Post }) {
	const { slug, title, overview, readingTime } = data;

	const publishedAt = dayjs(data.publishedAt).format('MMM DD, YYYY');

	return (
		<Link href={`/blog/${slug}`} className={styles.container}>
			<article className={styles.article}>
				<h2 className={styles.title} title={title}>
					<Balancer className="leading-tight">{title}</Balancer>
				</h2>
				<div className={styles.content}>
					<p className={styles.overview}>{overview}</p>
					<p className={styles.data}>
						<span>{readingTime.text}</span>
						<span>{publishedAt}</span>
					</p>
				</div>
			</article>
		</Link>
	);
}
