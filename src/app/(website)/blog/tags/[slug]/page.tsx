import Link from 'next/link';
import dayjs from 'dayjs';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'react-feather';

import { allPosts, Post } from 'contentlayer/generated';
import { Grid } from '@/components/blog';
import styles from '../../Blog.module.css';

export default function TagPage({ params }: { params: { slug: string } }) {
	const posts: Post[] = allPosts.filter(
		(p: Post) => p.tags?.includes(params.slug),
	);

	if (posts.length === 0) notFound();

	const sorted: Post[] = allPosts.sort((a, b) =>
		dayjs(a.publishedAt).isAfter(dayjs(b.publishedAt)) ? -1 : 1,
	);

	return (
		<>
			<header className={styles.headerBlog}>
				<div className={styles.headerBlogContainer}>
					<Link className={styles.linkBackToBlog} href="/blog">
						<ArrowLeft className="h-5" />
						<span>Blog</span>
					</Link>
					<h1 className={`${styles.blogSectionsTitle} text-gray`}>
						#{params.slug}
					</h1>
				</div>
			</header>
			<Grid posts={sorted} />
		</>
	);
}
