import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [{ userAgent: '*' }],
		host: 'https://gochelias.com',
		sitemap: 'https://gochelias.com/sitemap.xml',
	};
}
