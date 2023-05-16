/* eslint-disable no-underscore-dangle */
import { defineDocumentType, makeSource } from 'contentlayer/source-files';

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
		id: {
			type: 'string',
			resolve: post => post._raw.flattenedPath,
		},
	},
}));

export default makeSource({
	contentDirPath: './src/posts',
	documentTypes: [Post],
});
