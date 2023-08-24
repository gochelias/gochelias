'use client';

import { useEffect } from 'react';

import styles from '@/styles/Blog.module.css';
import { incrementViews } from '@/app/actions';

type InfoProps = {
	slug: string;
	readingTime: string;
	publishedAt: string;
};

export function Info({ slug, readingTime, publishedAt }: InfoProps) {
	useEffect(() => {
		incrementViews(slug);
	}, [slug]);

	return (
		<p className={styles.postData}>
			<span>{readingTime}</span>·<span>{publishedAt}</span>
		</p>
	);
}
