import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { format, parseISO } from 'date-fns';
import Balancer from 'react-wrap-balancer';

import { allPosts, type Post } from 'contentlayer/generated';
import components from 'components/mdx';
import styles from '../Blog.module.css';

export async function generateStaticParams() {
	return allPosts.map((post: Post) => ({
		slug: post.slug,
	}));
}

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata | undefined> {
	const post: Post | undefined = allPosts.find(
		(p: Post) => p.slug === params.slug,
	);

	if (!post) return;

	const {
		slug,
		title,
		overview: description,
		publishedAt: publishedTime,
	} = post;

	return {
		title: `${title} - Blog`,
		description: post?.overview,
		openGraph: {
			title,
			description,
			publishedTime,
			url: `https://gochelias.com/blog/${slug}`,
			type: 'article',
		},
		twitter: {
			title,
			description,
			card: 'summary_large_image',
		},
	};
}

export default function PostPage({ params }: { params: { slug: string } }) {
	const post: Post | undefined = allPosts.find(
		(p: Post) => p.slug === params.slug,
	);

	if (!post) notFound();

	const MDXContent = useMDXComponent(post.body.code);

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
						<Balancer>{post.title}</Balancer>
					</h1>
					<p className={styles.postOverview}>{post.overview}</p>
				</div>
				<p className={styles.postData}>
					<span>{post.readingTime.text}</span>
					<span>
						Last updated{' '}
						{format(parseISO(post.updatedAt), 'MMMM d, yyyy')}
					</span>
				</p>
				<div className={styles.postImage}>
					<Image src={post.image} fill alt="" />
				</div>
			</section>
			<section className={styles.postMain}>
				<article className="prose flex w-full max-w-3xl flex-col gap-y-6 font-body text-base leading-relaxed md:text-[22px]">
					<MDXContent components={components} />
				</article>
			</section>
		</main>
	);
}
