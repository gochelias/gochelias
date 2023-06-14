import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import readingTime from 'reading-time';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { visit } from 'unist-util-visit';

export const Post = defineDocumentType(() => ({
	name: 'Post',
	filePathPattern: '**/*.mdx',
	contentType: 'mdx',
	fields: {
		image: { type: 'string' },
		title: { type: 'string', required: true },
		overview: { type: 'string', required: true },
		publishedAt: { type: 'date', required: true },
	},
	computedFields: {
		slug: {
			type: 'string',
			// eslint-disable-next-line no-underscore-dangle
			resolve: post => post._raw.flattenedPath,
		},
		readingTime: {
			type: 'json',
			resolve: post => readingTime(post.body.raw),
		},
	},
}));

export default makeSource({
	contentDirPath: './src/posts',
	documentTypes: [Post],
	mdx: {
		rehypePlugins: [
			() => tree => {
				visit(tree, node => {
					if (node?.type === 'element' && node?.tagName === 'pre') {
						const [codeEl] = node.children;
						if (codeEl.tagName !== 'code') return;

						// eslint-disable-next-line no-param-reassign
						node.raw = codeEl.children?.[0].value;
					}
				});
			},
			[
				rehypePrettyCode,
				{
					theme: 'one-dark-pro',
					onVisitHighlightedLine(node: any) {
						node.properties.className.push('highlighted');
					},
				},
			],
			() => tree => {
				visit(tree, node => {
					if (node?.type === 'element' && node?.tagName === 'div') {
						const codeFragment = 'data-rehype-pretty-code-fragment';
						const isProperty = codeFragment in node.properties;
						if (!isProperty) return;

						// eslint-disable-next-line no-restricted-syntax
						for (const child of node.children) {
							if (child.tagName === 'pre') {
								child.properties.raw = node.raw;
							}
						}
					}
				});
			},
			rehypeSlug,
			[
				rehypeAutolinkHeadings,
				{
					properties: {
						className: ['anchor'],
					},
				},
			],
		],
	},
});
