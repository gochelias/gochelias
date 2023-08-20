import { Fragment } from 'react';

import { Post } from 'contentlayer/generated';
import styles from '@/app/(website)/blog/Blog.module.css';
import { Card } from './Card';

export function Grid({ posts }: { posts: Post[] }) {
	return (
		<main className={styles.gridContainer}>
			<div className={styles.gridPosts}>
				{posts.map((post: Post) => (
					<Fragment key={post.slug}>
						<Card data={post} />
					</Fragment>
				))}
			</div>
		</main>
	);
}
