import { Post } from 'contentlayer/generated';
import styles from './grid.module.css';
import { Card } from '../card';

export function Grid({ posts }: { posts: Post[] }) {
	return (
		<div className={styles.container}>
			{posts.map((post: Post) => (
				<Card data={post} key={post.slug} />
			))}
		</div>
	);
}
