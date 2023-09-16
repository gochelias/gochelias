import Balancer from 'react-wrap-balancer';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { allPosts, type Post } from 'contentlayer/generated';
import styles from '@/styles/series.module.css';
import { Grid, Scaffold } from '@/components/blog';

export const generateMetadata = async ({
	params,
}: {
	params: { id: string };
}): Promise<Metadata | undefined> => {
	const post = allPosts.find(
		(p: Post) => p.series?.id === params.id && p.series.part === 1,
	);

	if (!post) return;

	const { id, title, overview: description } = post.series!;
	const { image, publishedAt: publishedTime } = post;

	return {
		title: `${title} - Blog`,
		description,
		openGraph: {
			title,
			description,
			publishedTime,
			url: `https://gochelias.com/blog/series/${id}`,
			images: [image],
		},
		twitter: {
			title,
			description,
			card: 'summary_large_image',
			images: [image],
		},
	};
};

export default function SeriesPage({ params }: { params: { id: string } }) {
	const posts: Post[] = allPosts.filter(
		(p: Post) => p.series?.id === params.id,
	);

	if (posts.length === 0) notFound();

	const firstPost = posts.find((p: Post) => p.series!.part === 1)!;

	const sorted: Post[] = posts.sort(
		(a: Post, b: Post) => a.series!.part - b.series!.part,
	);

	return (
		<Scaffold>
			<div className={styles.header}>
				<h1 className={styles.title}>
					<Balancer>{firstPost.series?.title}</Balancer>
				</h1>
				<p className={styles.description}>
					{firstPost.series?.overview}
				</p>
			</div>
			<Grid posts={sorted} />
		</Scaffold>
	);
}
