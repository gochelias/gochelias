import { Fragment } from 'react';

import { Post } from 'contentlayer/generated';
import PostCard from './PostCard';
import styles from './Blog.module.css';

export default function Grid({ posts }: { posts: Post[] }) {
	return (
		<main className={styles.gridContainer}>
			<div className={styles.gridPosts}>
				{posts.map((post: Post) => (
					<Fragment key={post.slug}>
						<PostCard data={post} />
					</Fragment>
				))}
			</div>
		</main>
	);
}
