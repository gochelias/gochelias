import dayjs from 'dayjs';
import type { Metadata } from 'next';

import { allPosts, type Post } from 'contentlayer/generated';
import Grid from './Grid';

export const metadata: Metadata = {
	title: 'Blog',
};

export default function BlogPage() {
	const posts: Post[] = allPosts.sort((a, b) =>
		dayjs(a.publishedAt).isAfter(dayjs(b.publishedAt)) ? -1 : 1,
	);

	return (
		<>
			<header className="flex h-[50vh] w-full items-center justify-center">
				<h1 className="text-5xl font-medium uppercase md:text-[8vw] md:font-normal">
					Blog
				</h1>
			</header>
			{posts.length > 0 ? (
				<Grid posts={posts} />
			) : (
				<div className="flex w-full flex-col items-center justify-center">
					<h6 className="text-3xl font-medium">Under Maintenance</h6>
					<p className="text-center font-body text-xl text-gray3light md:max-w-md">
						The page you are looking for is currently under
						maintenance and will be back soon.
					</p>
				</div>
			)}
		</>
	);
}
