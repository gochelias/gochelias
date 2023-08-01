import { useMDXComponent } from 'next-contentlayer/hooks';

import components from '@/components/mdx';

/* interface MDXContentProps {
    body: MDXComponents
    
} */

export default function MDXContent({ content }: { content: string }) {
	const MDX = useMDXComponent(content);

	return <MDX components={components} />;
}
