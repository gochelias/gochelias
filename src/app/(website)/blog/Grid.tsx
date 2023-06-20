import { Fragment } from 'react';

import { Post } from 'contentlayer/generated';
import PostCard from './PostCard';

export default function Grid({ posts }: { posts: Post[] }) {
	return (
		<main className="flex w-full flex-col items-center pb-64">
			<div className="grid w-3/5 grid-cols-3 gap-x-8 gap-y-16">
				{posts.map((post: Post) => (
					<Fragment key={post.slug}>
						<PostCard data={post} />
					</Fragment>
				))}
			</div>
		</main>
	);
}
