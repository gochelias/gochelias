/* const withPreact = require('next-plugin-preact'); */

/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		appDir: true,
	},
	images: {
		domains: ['images.unsplash.com', 'cdn.svgporn.com', 'www.svgrepo.com'],
	},
	async redirects() {
		return [
			{
				source: '/github',
				destination: 'https://github.com/gochelias',
				permanent: true,
			},
			{
				source: '/linkedin',
				destination: 'https://linkedin.com/in/gochelias',
				permanent: true,
			},
			{
				source: '/discord',
				destination: 'https://discord.com/users/636351475307773963',
				permanent: true,
			},
			{
				source: '/codepen',
				destination: 'https://codepen.io/gochelias',
				permanent: true,
			},
			{
				source: '/dribbble',
				destination: 'https://dribbble.com/gochelias',
				permanent: true,
			},
			{
				source: '/twitter',
				destination: 'https://twitter.com/gochelias',
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
