import { Fragment } from 'react';
import { compareDesc } from 'date-fns';
import type { Metadata } from 'next';

import { allPosts, type Post } from 'contentlayer/generated';
import PostCard from './PostCard';

export const metadata: Metadata = {
	title: 'Blog',
};

export default function BlogPage() {
	const posts: Post[] = allPosts.sort((a, b) =>
		compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)),
	);

	return (
		<section className="flex w-full flex-col items-center space-y-8 border-red-500 pb-64">
			<header className="flex w-full items-center justify-center py-40">
				<h1 className="text-[8vw] uppercase">Blog</h1>
			</header>
			{posts.length > 0 ? (
				<div className="grid w-3/5 grid-cols-3 gap-x-8 gap-y-16">
					{posts.map((post: Post) => (
						<Fragment key={post.id}>
							<PostCard data={post} />
						</Fragment>
					))}
				</div>
			) : (
				<div className="flex w-full flex-col items-center justify-center">
					<h6 className="text-3xl font-medium">Under Maintenance</h6>
					<p className="text-center font-body text-xl text-gray3light md:max-w-md">
						The page you are looking for is currently under
						maintenance and will be back soon.
					</p>
				</div>
			)}
		</section>
	);
}
