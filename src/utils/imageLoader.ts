'use client';

import type { ImageLoaderProps } from 'next/image';

/**
 * # Cloudinary Image Loader
 * Returns a URL string for the image
 *
 * Example: https://res.cloudinary.com/demo/image/upload/w_600,c_limit,f_webp,q_auto/sample
 */
export const cloudinaryLoader = ({
	src,
	width,
	quality,
}: ImageLoaderProps): string => {
	const url = 'https://res.cloudinary.com/demo/image/upload';
	const params = [
		`w_${width}`,
		'c_limit',
		'f_webp',
		`q_${quality || 'auto'}`,
	];

	return `${url}/${params.join(',')}/${src}`;
};
