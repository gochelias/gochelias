'use client';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Copy } from 'react-feather';

export default function CopyButton({ text }: { text: string }) {
	return (
		<CopyToClipboard text={text}>
			<button className="p-4 text-gray" type="button">
				<Copy />
			</button>
		</CopyToClipboard>
	);
}
