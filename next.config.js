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
};

module.exports = nextConfig;
