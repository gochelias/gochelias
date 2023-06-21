import { compareDesc } from 'date-fns';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'react-feather';

import { allPosts, Post } from 'contentlayer/generated';
import Grid from '../../Grid';

export default function TagPage({ params }: { params: { slug: string } }) {
	const posts: Post[] = allPosts.filter((p: Post) =>
		p.tags?.includes(params.slug),
	);

	if (posts.length === 0) notFound();

	const sorted: Post[] = posts.sort((a, b) =>
		compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)),
	);

	return (
		<>
			<header className="flex h-[50vh] w-full select-none justify-center">
				<div className="flex h-full w-3/5 flex-col items-start justify-center">
					<Link
						className="mb-8 flex items-end space-x-2 font-body leading-none text-gray2dark transition-colors duration-200 hover:text-white"
						href="/blog">
						<ArrowLeft className="h-5" />
						<span>Blog</span>
					</Link>
					<h1 className="text-left text-7xl font-medium text-gray">
						#{params.slug}
					</h1>
				</div>
			</header>
			<Grid posts={sorted} />
		</>
	);
}
