const withPreact = require('next-plugin-preact');

/** @type {import('next').NextConfig} */

const nextConfig = withPreact({
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['images.unsplash.com'],
	},
});

module.exports = nextConfig;
