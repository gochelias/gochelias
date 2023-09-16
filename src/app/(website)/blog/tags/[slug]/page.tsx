import dayjs from 'dayjs';
import { notFound } from 'next/navigation';

import { allPosts, type Post } from 'contentlayer/generated';
import styles from '@/styles/tags.module.css';
import { Grid, Scaffold } from '@/components/blog';

export default function TagPage({ params }: { params: { slug: string } }) {
	const posts: Post[] = allPosts.filter(
		(p: Post) => p.tags?.includes(params.slug),
	);

	if (posts.length === 0) notFound();

	const sorted: Post[] = allPosts.sort((a, b) =>
		dayjs(a.publishedAt).isAfter(dayjs(b.publishedAt)) ? -1 : 1,
	);

	return (
		<Scaffold>
			<div className={styles.header}>
				<h1 className={styles.title}>#{params.slug}</h1>
			</div>
			<Grid posts={sorted} />
		</Scaffold>
	);
}
