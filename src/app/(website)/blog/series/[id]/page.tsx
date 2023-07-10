import { notFound } from 'next/navigation';
import Balancer from 'react-wrap-balancer';
import { ArrowLeft } from 'react-feather';
import Link from 'next/link';

import { allPosts, Post } from 'contentlayer/generated';
import Grid from '../../Grid';
import styles from '../../Blog.module.css';

export default function SeriesPage({ params }: { params: { id: string } }) {
	const posts: Post[] = allPosts.filter(
		(p: Post) => p.series?.id === params.id,
	);

	if (posts.length === 0) notFound();

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
						<Balancer>
							Building and Scaling Web Applications on AWS: A
							Step-by-Step Guide
						</Balancer>
					</h1>
					<p className={styles.seriesDescription}>
						Task-01: Launch an EC2 instance, install a web server,
						and deploy a simple web application Launch an EC2
						instance using the AWS Management Console: Log in to the
						AWS Management Console. Open the EC
					</p>
				</div>
			</header>
			<Grid posts={sorted} />
		</>
	);
}
