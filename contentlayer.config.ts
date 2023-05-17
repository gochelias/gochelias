/* eslint-disable no-underscore-dangle */
import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import readingTime from 'reading-time';

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
		readingTime: {
			type: 'json',
			resolve: post => readingTime(post.body.raw),
		},
	},
}));

export default makeSource({
	contentDirPath: './src/posts',
	documentTypes: [Post],
});
