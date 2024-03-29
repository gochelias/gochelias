import Image from 'next/image';
import Link from 'next/link';
import daysjs from 'dayjs';
import Balancer from 'react-wrap-balancer';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { allPosts, type Post } from 'contentlayer/generated';
import styles from '@/styles/post.module.css';
import { Data, MDXContent } from '@/components/blog';

type PageProps = {
	params: {
		slug: string;
	};
};

export const generateMetadata = async ({
	params,
}: PageProps): Promise<Metadata | undefined> => {
	const post: Post | undefined = allPosts.find(
		(p: Post) => p.slug === params.slug,
	);

	if (!post) return;

	const {
		slug,
		image,
		title,
		overview: description,
		publishedAt: publishedTime,
	} = post;

	return {
		title: `${title} - Blog`,
		description,
		openGraph: {
			title,
			description,
			publishedTime,
			images: [image],
			url: `https://gochelias.com/blog/${slug}`,
			type: 'article',
		},
		twitter: {
			title,
			description,
			card: 'summary_large_image',
			images: [image],
		},
	};
};

export default function PostPage({ params }: PageProps) {
	const post: Post | undefined = allPosts.find(
		(p: Post) => p.slug === params.slug,
	);

	if (!post) notFound();

	const publishedAt = daysjs(post.publishedAt).format('MMM DD, YYYY');

	return (
		<main className="flex flex-col items-center">
			<section className={styles.header}>
				<div className={styles.details}>
					{post.series && (
						<Link
							className={styles.part}
							href={`/blog/series/${post.series.id}`}>
							<span>Part {post.series.part}</span>
						</Link>
					)}
					<h1 className={styles.title}>
						<Balancer className="leading-[1.1]">
							{post.title}
						</Balancer>
					</h1>
					<Data
						slug={post.slug}
						readingTime={post.readingTime.text}
						publishedAt={publishedAt}
					/>
				</div>
				<div className={styles.image}>
					<Image src={post.image} fill alt="" />
				</div>
			</section>
			<section className={styles.content}>
				<article className={`prose ${styles.article}`}>
					<p className="text-gray">{post.overview}</p>
					<hr />
					<MDXContent content={post.body.code} />
					{post.tags && (
						<div className="no-line mt-16 flex flex-wrap items-center gap-3 overflow-hidden">
							{post.tags.map((tag: string) => (
								<Link
									key={tag}
									href={`/blog/tags/${tag}`}
									className="border border-gray5dark bg-[#0a0a0a] px-3 py-1 text-base text-gray md:text-lg">
									{tag}
								</Link>
							))}
						</div>
					)}
				</article>
			</section>
		</main>
	);
}
