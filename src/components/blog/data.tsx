'use client';

import { useEffect } from 'react';

import styles from '@/styles/post.module.css';
import { incrementViews } from '@/app/actions';

type DataProps = {
	slug: string;
	readingTime: string;
	publishedAt: string;
};

export function Data({ slug, readingTime, publishedAt }: DataProps) {
	useEffect(() => {
		incrementViews(slug);
	}, [slug]);

	return (
		<p className={styles.data}>
			<span>{readingTime}</span>·<span>{publishedAt}</span>
		</p>
	);
}
