import dayjs from 'dayjs';
import type { Metadata } from 'next';

import { allPosts, type Post } from 'contentlayer/generated';
import styles from '@/styles/blog.module.css';
import { Grid, Scaffold } from '@/components/blog';

export const metadata: Metadata = {
	title: 'Blog',
};

export default function BlogPage() {
	const posts: Post[] = allPosts.sort((a, b) =>
		dayjs(a.publishedAt).isAfter(dayjs(b.publishedAt)) ? -1 : 1,
	);

	return (
		<Scaffold>
			<div className={styles.header}>
				<h1 className={styles.title}>Read, Learn, Create.</h1>
			</div>
			<Grid posts={posts} />
		</Scaffold>
	);
}
