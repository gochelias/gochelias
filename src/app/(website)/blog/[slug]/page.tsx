import Image from 'next/image';
import { notFound } from 'next/navigation';
import { format, parseISO } from 'date-fns';

import { allPosts, type Post } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

export async function generateStaticParams() {
	return allPosts.map((post: Post) => ({
		slug: post.slug,
	}));
}

export default function PostPage({ params }: { params: { slug: string } }) {
	const post: Post | undefined = allPosts.find(
		(p: Post) => p.slug === params.slug,
	);

	if (!post) notFound();

	const MDXContent = useMDXComponent(post.body.code);

	return (
		<main className="flex flex-col items-center">
			<section className="flex h-full w-3/5 flex-col items-center">
				<div className="flex h-[50vh] flex-col items-center justify-center">
					<h1 className="text-center text-6xl font-medium">
						{post.title}
					</h1>
				</div>
				<p className="flex w-full items-center justify-center space-x-4 pb-16 font-body text-lg">
					<span>{post.readingTime.text}</span>
					<span>
						{format(parseISO(post.publishedAt), 'MMM d, yyyy')}
					</span>
				</p>
				<div className="relative aspect-video w-full">
					<Image
						src="https://images.unsplash.com/photo-1522517779552-6cf4c1f31ee3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
						fill
						alt=""
					/>
				</div>
				<p className="w-1/2 py-16 font-body text-2xl text-gray">
					{post.overview}
				</p>
			</section>
			<section className="flex w-3/5 justify-center pb-64 text-gray4light">
				<article className="w-2/3 font-body text-2xl">
					<MDXContent />
				</article>
			</section>
		</main>
	);
}
