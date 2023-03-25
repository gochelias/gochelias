import type { Metadata } from 'next';

import { Maintenance } from 'components/Maintenance';

export const metadata: Metadata = {
	title: 'Blog',
};

const BlogPage = () => <Maintenance />;

export default BlogPage;
