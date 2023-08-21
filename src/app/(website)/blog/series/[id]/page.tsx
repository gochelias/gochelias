import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'react-feather';
import Balancer from 'react-wrap-balancer';
import Link from 'next/link';

import { allPosts, type Post } from 'contentlayer/generated';
import styles from '@/styles/Blog.module.css';
import { Grid } from '@/components/blog';

export async function generateMetadata({
	params,
}: {
	params: { id: string };
}): Promise<Metadata | undefined> {
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
}

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
		<>
			<header className={styles.headerBlog}>
				<div className={styles.headerBlogContainer}>
					<Link className={styles.linkBackToBlog} href="/blog">
						<ArrowLeft className="h-5" />
						<span>Blog</span>
					</Link>
					<h1 className={styles.blogSectionsTitle}>
						<Balancer>{firstPost.series?.title}</Balancer>
					</h1>
					<p className={styles.seriesDescription}>
						{firstPost.series?.overview}
					</p>
				</div>
			</header>
			<Grid posts={sorted} />
		</>
	);
}
