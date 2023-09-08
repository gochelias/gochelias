import { MetadataRoute } from 'next';
import { Post, allPosts } from 'contentlayer/generated';

export default function sitemap(): MetadataRoute.Sitemap {
	const allRoutes = ['', '/blog', 'contact'];

	const routes = allRoutes.map(route => ({
		url: `https://gochelias.com${route}`,
		lastModified: new Date(),
	}));

	const blogs = allPosts.map((post: Post) => ({
		url: `https://gochelias.com/blog/${post.slug}`,
		lastModified: post.updatedAt,
	}));

	return [...routes, ...blogs];
}
