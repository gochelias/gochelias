import Image from 'next/image';
import Link from 'next/link';
import daysjs from 'dayjs';
import Balancer from 'react-wrap-balancer';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
// import { useMDXComponent } from 'next-contentlayer/hooks';

import { allPosts, type Post } from 'contentlayer/generated';
import styles from '@/styles/Blog.module.css';
import { incrementViews } from '@/app/actions';
import MDXContent from '@/components/mdx/MDXContent';

type PageProps = {
	params: {
		slug: string;
	};
};

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata | undefined> {
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
}

export default async function PostPage({ params }: PageProps) {
	const post: Post | undefined = allPosts.find(
		(p: Post) => p.slug === params.slug,
	);

	if (!post) notFound();

	// await incrementViews(post.slug);
	// const MDXContent = useMDXComponent(post.body.code);

	const publishedAt = daysjs(post.publishedAt).format('MMM DD, YYYY');

	return (
		<main className="flex flex-col items-center">
			<section className={styles.postHeader}>
				<div className={styles.postHeaderData}>
					{post.series && (
						<Link
							className={styles.seriesPart}
							href={`/blog/series/${post.series.id}`}>
							<span>Part {post.series.part}</span>
						</Link>
					)}
					<h1 className={styles.postTitle}>
						<Balancer className="leading-[1.1]">
							{post.title}
						</Balancer>
					</h1>
					<p className={styles.postData}>
						<span>{post.readingTime.text}</span>·
						<span>{publishedAt}</span>
					</p>
				</div>
				<div className={styles.postImage}>
					<Image src={post.image} fill alt="" />
				</div>
			</section>
			<section className={styles.postMain}>
				<article className="prose flex w-full max-w-3xl flex-col gap-y-6 font-body text-base leading-relaxed selection:bg-white selection:text-black md:text-[22px]">
					<p className="text-gray">{post.overview}</p>
					<hr />
					<MDXContent content={post.body.code} />
					{post.tags && (
						<div className="no-line mt-16 flex flex-wrap items-center gap-3 overflow-hidden">
							{post.tags.map((tag: string) => (
								<Link
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
