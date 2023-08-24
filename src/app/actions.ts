'use server';

import { db } from '@/lib';

export const incrementViews = async (slug: string): Promise<void> => {
	const views = await db
		.selectFrom('views')
		.where('slug', '=', slug)
		.select(['count'])
		.executeTakeFirst();

	const allViews = views ? views.count : 0;

	await db
		.insertInto('views')
		.values({ slug, count: 1 })
		.onDuplicateKeyUpdate({ count: allViews + 1 })
		.execute();
};
