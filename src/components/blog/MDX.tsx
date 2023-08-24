import { useMDXComponent } from 'next-contentlayer/hooks';
import components from '@/components/mdx';

export function MDX({ content }: { content: string }) {
	const MDXContent = useMDXComponent(content);

	return <MDXContent components={components} />;
}
