import {
	defineDocumentType,
	defineNestedType,
	makeSource,
} from 'contentlayer/source-files';
import readingTime from 'reading-time';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { visit } from 'unist-util-visit';
import { stat } from 'fs/promises';
import { join } from 'path';

const contentDirPath = './src/posts';

const Series = defineNestedType(() => ({
	name: 'Series',
	fields: {
		id: { type: 'string', required: true },
		part: { type: 'number', required: true },
		title: { type: 'string' },
		overview: { type: 'string' },
	},
}));

export const Post = defineDocumentType(() => ({
	name: 'Post',
	filePathPattern: '**/*.mdx',
	contentType: 'mdx',
	fields: {
		id: { type: 'string', required: true },
		image: { type: 'string', required: true },
		title: { type: 'string', required: true },
		overview: { type: 'string', required: true },
		publishedAt: { type: 'date', required: true },
		series: { type: 'nested', of: Series, required: false },
		tags: { type: 'list', of: { type: 'string' }, required: false },
	},
	computedFields: {
		slug: {
			type: 'string',
			resolve: post => post._raw.flattenedPath,
		},
		readingTime: {
			type: 'json',
			resolve: post => readingTime(post.body.raw),
		},
		updatedAt: {
			type: 'date',
			resolve: async (post): Promise<Date> => {
				const path = join(contentDirPath, post._raw.sourceFilePath);
				const stats = await stat(path);

				return stats.mtime;
			},
		},
	},
}));

export default makeSource({
	contentDirPath,
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
