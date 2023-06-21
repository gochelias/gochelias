import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { format, parseISO } from 'date-fns';
import Balancer from 'react-wrap-balancer';

import { allPosts, type Post } from 'contentlayer/generated';
import components from 'components/mdx';

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
				<div className="flex h-[50vh] w-full flex-col items-center justify-center">
					{post.series && (
						<Link
							className="mb-8 space-x-3 border border-gray4dark px-4 py-2 font-body text-lg text-white hover:bg-gray6dark"
							href={`/blog/series/${post.series.id}`}>
							<span>Part {post.series.part}</span>
						</Link>
					)}
					<h1 className="text-center text-7xl font-medium leading-tight">
						<Balancer>{post.title}</Balancer>
					</h1>
					<p className="mt-4 w-full max-w-4xl text-center font-body text-2xl text-gray">
						{post.overview}
					</p>
				</div>
				<p className="mt-16 mb-8 flex w-full items-center justify-center space-x-5 font-body text-lg text-gray3light">
					<span>{post.readingTime.text}</span>
					<span>
						Last updated{' '}
						{format(parseISO(post.updatedAt), 'MMMM d, yyyy')}
					</span>
				</p>
				<div className="relative mb-16 aspect-video w-full">
					<Image src={post.image} fill alt="" />
				</div>
			</section>
			<section className="flex w-3/5 justify-center pb-64 text-gray3light">
				<article className="prose flex w-full max-w-3xl flex-col gap-y-6 font-body text-[22px] leading-relaxed">
					<MDXContent components={components} />
				</article>
			</section>
		</main>
	);
}
