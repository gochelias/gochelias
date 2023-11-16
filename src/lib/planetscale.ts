import 'server-only';
import { Kysely } from 'kysely';
import { PlanetScaleDialect } from 'kysely-planetscale';

import { Database } from '@/types';

if (!process.env.DATABASE_URL) {
	throw new Error('No DATABASE_URL was provided');
}

export const db = new Kysely<Database>({
	dialect: new PlanetScaleDialect({
		url: process.env.DATABASE_URL,
	}),
});
