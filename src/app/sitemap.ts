import { MetadataRoute } from 'next';
import { Post, allPosts } from 'contentlayer/generated';

export default function sitemap(): MetadataRoute.Sitemap {
	const blogs = allPosts.map((post: Post) => ({
		url: `https://gochelias.com/blog/${post.slug}`,
		lastModified: post.updatedAt,
	}));

	return [
		{ url: 'https://gochelias.com', lastModified: new Date(), priority: 1 },
		{
			url: 'https://gochelias.com/blog',
			lastModified: new Date(),
			priority: 0.5,
		},
		...blogs,
	];
}
