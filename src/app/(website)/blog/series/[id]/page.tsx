import { notFound } from 'next/navigation';
import Balancer from 'react-wrap-balancer';
import { ArrowLeft } from 'react-feather';
import Link from 'next/link';

import { allPosts, Post } from 'contentlayer/generated';
import Grid from '../../Grid';

export default function SeriesPage({ params }: { params: { id: string } }) {
	const posts: Post[] = allPosts.filter(
		(p: Post) => p.serie?.id === params.id,
	);

	if (posts.length === 0) notFound();

	const sorted: Post[] = posts.sort(
		(a: Post, b: Post) => a.serie!.part - b.serie!.part,
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
					<h1 className="text-left text-7xl font-medium">
						<Balancer>title</Balancer>
					</h1>
					<p className="mt-4 max-w-4xl font-body text-2xl text-gray">
						description
					</p>
				</div>
			</header>
			<Grid posts={sorted} />
		</>
	);
}
